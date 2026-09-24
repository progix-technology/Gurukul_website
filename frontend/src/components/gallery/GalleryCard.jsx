import React from 'react';
import { Eye, Play, ExternalLink } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export const GalleryCard = ({ item, index, onOpen }) => {
  const handleClick = () => {
    if (item.isVideo && item.videoUrl) {
      window.open(item.videoUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpen(index);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative rounded-lg sm:rounded-2xl overflow-hidden aspect-[4/3] bg-orange-50 cursor-pointer shadow-sm hover:shadow-vedic border transition-all duration-300 transform hover:-translate-y-1.5 ${
        item.isVideo ? 'border-amber-300 ring-1 ring-amber-400/30' : 'border-orange-100'
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={item.isVideo ? `वीडियो देखें: ${item.title}` : `चित्र देखें: ${item.title}`}
    >
      <ImageWithFallback
        src={item.thumbnail}
        alt={item.title}
        loading={index < 6 ? 'eager' : 'lazy'}
        fetchPriority={index < 3 ? 'high' : 'auto'}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Top Badges for Video */}
      {item.isVideo && (
        <div className="absolute top-1.5 left-1.5 right-1.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-lg bg-black/75 backdrop-blur-md text-amber-300 text-[9px] sm:text-xs font-bold border border-amber-400/40 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
            {item.platformName || 'वीडियो'}
          </span>
          {item.views && (
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/20">
              {item.views}
            </span>
          )}
        </div>
      )}

      {/* Center Play Button for Video Items */}
      {item.isVideo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-gurukul-saffron/90 group-hover:bg-gurukul-saffron text-white flex items-center justify-center shadow-xl shadow-amber-900/40 group-hover:scale-110 transition-transform duration-300 border border-white/80 sm:border-2">
            <Play className="w-4 h-4 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Hover zoom effect only, no text overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default GalleryCard;

