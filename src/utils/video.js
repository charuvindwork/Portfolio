// src/utils/video.js
// Turns an Instagram / YouTube URL into embed info.
export const parseVideo = (url = '') => {
  if (!url) return null;
  const isPlaceholder = url.includes('REPLACE');

  const ig = url.match(/instagram\.com\/(reel|reels|p)\/([\w-]+)/);
  if (ig) {
    const kind = ig[1] === 'p' ? 'p' : 'reel';
    return {
      platform: 'instagram',
      id: ig[2],
      isPlaceholder,
      embedUrl: `https://www.instagram.com/${kind}/${ig[2]}/embed`,
      thumbnail: null, // Instagram has no public thumbnail URL
    };
  }

  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]+)/);
  if (yt) {
    return {
      platform: 'youtube',
      id: yt[1],
      isPlaceholder,
      embedUrl: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`,
      thumbnail: isPlaceholder ? null : `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`,
    };
  }

  return null;
};