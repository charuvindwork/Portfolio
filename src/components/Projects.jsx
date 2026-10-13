// src/components/Projects.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { portfolioData, niches } from '../constants/data';
import { parseVideo } from '../utils/video';
import ProjectCard from './ProjectCard';

const pad = (n) => String(n).padStart(2, '0');
const STEP = 340; // card width (300) + gap (40)

const Projects = () => {
  const [activeNiche, setActiveNiche] = useState(niches[0]);
  const [previewVideo, setPreviewVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Every niche shows its reels directly in a horizontal scroller.
  // Projects from all companies in a niche are flattened into one list.
  const projects = (portfolioData[activeNiche] ?? []).flatMap((c) => c.projects);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -STEP : STEP,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / STEP));
  }, []);

  // Reset the scroller when switching niches
  useEffect(() => {
    setActiveIndex(0);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [activeNiche]);

  // Close the video preview with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setPreviewVideo(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Video preview data
  const video = previewVideo ? parseVideo(previewVideo.link) : null;
  const horizontal = previewVideo?.orientation === 'horizontal';
  const canEmbed = video && !video.isPlaceholder;

  return (
    <section id="work" className="min-h-screen border-b border-white/10 bg-base px-6 py-24 text-white md:px-12">
      {/* Section Header */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl">My Work</h2>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          [ {pad(niches.length)} Niches ]
        </span>
      </div>

      {/* Niche Navigation */}
      <div className="mb-16 flex flex-wrap gap-4">
        {niches.map((niche) => {
          const isActive = activeNiche === niche;
          return (
            <button
              key={niche}
              onClick={() => setActiveNiche(niche)}
              className={`border-2 border-white px-5 py-3 text-xs font-black uppercase tracking-widest transition-all duration-150 ${
                isActive
                  ? 'translate-x-[4px] translate-y-[4px] bg-accent text-black shadow-none'
                  : 'bg-base text-white shadow-[4px_4px_0_0_#ffffff] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_#ff3333]'
              }`}
            >
              {niche}
            </button>
          );
        })}
      </div>

      {/* Reels scroller */}
      {projects.length > 0 ? (
        <div className="border-4 border-white bg-base shadow-[12px_12px_0_0_#ff3333]">
          <div className="border-b-4 border-white bg-surface px-6 py-4 md:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              [ {activeNiche} ]
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tighter md:text-4xl">
              Reels
            </h3>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="brutal-scroll flex snap-x snap-mandatory items-center gap-10 overflow-x-auto p-8"
          >
            {projects.map((project, idx) => (
              <div key={`${activeNiche}-${idx}`} className="shrink-0 snap-start">
                <ProjectCard
                  project={project}
                  index={idx + 1}
                  onClick={() => setPreviewVideo(project)}
                />
              </div>
            ))}
          </div>

          {/* Footer: counter + arrows */}
          <div className="flex items-stretch justify-between border-t-4 border-white bg-surface">
            <div className="flex items-center px-6 text-sm font-black uppercase tracking-widest md:px-8">
              <span className="text-accent">{pad(Math.min(activeIndex + 1, projects.length))}</span>
              <span className="mx-2 text-white/40">/</span>
              <span>{pad(projects.length)}</span>
            </div>
            <div className="flex">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="flex h-16 w-16 items-center justify-center border-l-4 border-white bg-base text-white transition-colors hover:bg-white hover:text-black active:bg-accent"
              >
                <ArrowLeft size={28} strokeWidth={3} />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="flex h-16 w-16 items-center justify-center border-l-4 border-white bg-base text-white transition-colors hover:bg-accent hover:text-black active:bg-white"
              >
                <ArrowRight size={28} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="border-2 border-dashed border-white/30 py-16 text-center text-sm font-black uppercase tracking-widest text-white/40">
          [ Projects coming soon ]
        </p>
      )}

      {/* Video Preview Modal */}
      {previewVideo && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setPreviewVideo(null)}
            aria-label="Close preview"
            className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center border-4 border-white bg-accent text-black shadow-[4px_4px_0_0_#ffffff] transition-all hover:bg-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            <X size={28} strokeWidth={3} />
          </button>

          <div
            className={`relative border-4 border-white bg-surface shadow-[12px_12px_0_0_#ff3333] ${
              horizontal
                ? 'aspect-video w-full max-w-4xl'
                : 'aspect-[9/16] max-h-[85vh] w-full max-w-sm'
            }`}
          >
            {canEmbed ? (
              <iframe
                src={video.embedUrl}
                title={previewVideo.title}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="text-sm font-black uppercase tracking-widest text-accent">
                  [ Placeholder link ]
                </p>
                <p className="text-lg font-black uppercase tracking-tighter">
                  {previewVideo.title}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Replace the link in constants/data.js
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;