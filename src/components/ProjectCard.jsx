// src/components/ProjectCard.jsx
import React from 'react';
import { Play } from 'lucide-react';
import { parseVideo } from '../utils/video';

const ProjectCard = ({ project, onClick, index = 1 }) => {
  const video = parseVideo(project.link);
  const thumb = project.thumbnail || video?.thumbnail;
  const badge = video?.platform === 'instagram' ? 'IG' : video?.platform === 'youtube' ? 'YT' : null;

  return (
    <button
      onClick={onClick}
      className="group relative flex h-[533px] w-[300px] flex-col overflow-hidden border-4 border-white bg-surface text-left shadow-[8px_8px_0_0_#ff3333] transition-all duration-150 hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[12px_12px_0_0_#ffffff] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
    >
      {/* Title block */}
      <div className="border-b-4 border-white bg-base p-5">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          [ {String(index).padStart(2, '0')} ]
        </span>
        <h4 className="mt-2 text-3xl font-black uppercase leading-[0.95] tracking-tighter">
          {project.title}
        </h4>
      </div>

      {/* Thumbnail */}
      <div className="relative flex-grow overflow-hidden bg-surface">
        {thumb ? (
          <img
            src={thumb}
            alt={project.title}
            className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(45deg,#111111,#111111_12px,#1a1a1a_12px,#1a1a1a_24px)] text-xs font-black uppercase tracking-widest text-white/40">
            [ Video Thumbnail ]
          </div>
        )}

        {/* Platform badge */}
        {badge && (
          <span className="absolute right-3 top-3 border-2 border-white bg-base px-2 py-1 text-xs font-black uppercase tracking-widest text-white">
            {badge}
          </span>
        )}

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center border-4 border-white bg-base text-white shadow-[4px_4px_0_0_#ffffff] transition-colors group-hover:bg-accent group-hover:text-black">
            <Play size={28} strokeWidth={3} fill="currentColor" />
          </span>
        </div>
      </div>

      {/* Description block */}
      <div className="border-t-4 border-white bg-white p-4">
        <p className="text-xs font-black uppercase tracking-widest text-black">
          {project.description}
        </p>
      </div>
    </button>
  );
};

export default ProjectCard;