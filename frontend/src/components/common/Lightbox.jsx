import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

export const Lightbox = ({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  useEffect(() => {
    setIsImageLoading(true);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 40) {
      if (currentIndex < images.length - 1) onNext();
    } else if (touchEndX.current - touchStartX.current > 40) {
      if (currentIndex > 0) onPrev();
    }
  };

  if (!isOpen || !images.length) return null;

  const currentItem = images[currentIndex] || {};

  const lightboxContent = (
    <div
      className="fixed inset-0 top-0 left-0 w-screen h-screen z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-md select-none m-0 p-0 touch-none"
      style={{ margin: 0, padding: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="चित्र दर्शक (Lightbox)"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 sm:top-7 sm:right-7 z-[1000000] p-3 rounded-full bg-white/15 hover:bg-[#C96B25] text-white transition-all border border-white/30 shadow-2xl focus:outline-none"
        aria-label="बंद करें"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Prev button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="fixed left-3 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#C96B25] text-white transition-all border border-white/20 shadow-2xl focus:outline-none"
          aria-label="पिछला चित्र"
        >
          <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
        </button>
      )}

      {/* Next button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="fixed right-3 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#C96B25] text-white transition-all border border-white/20 shadow-2xl focus:outline-none"
          aria-label="अगला चित्र"
        >
          <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
        </button>
      )}

      {/* Full Viewport Image */}
      <div className="relative flex flex-col items-center justify-center w-full h-full max-w-[98vw] max-h-[96vh] pointer-events-none p-2 sm:p-6">
        {/* Loading Spinner for full resolution lightbox image */}
        {isImageLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
            <Loader2 className="w-12 h-12 text-[#C68A32] animate-spin mb-3 drop-shadow-lg" />
            <span className="text-sm font-medium text-amber-200 animate-pulse">चित्र लोड हो रहा है...</span>
          </div>
        )}

        <img
          src={currentItem.fullImage || currentItem.thumbnail}
          alt={currentItem.title || 'गुरुकुल छायाचित्र'}
          loading="lazy"
          onLoad={() => setIsImageLoading(false)}
          className={`max-h-[94vh] max-w-[94vw] w-auto h-auto object-contain rounded-lg shadow-2xl pointer-events-auto select-none transition-all duration-300 ${
            isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        />

        {/* Video action button if video item */}
        {currentItem.isVideo && currentItem.videoUrl && (
          <div className="mt-4 pointer-events-auto">
            <a
              href={currentItem.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gurukul-saffron hover:bg-orange-600 text-white font-bold text-sm shadow-2xl transition-all transform hover:scale-105"
            >
              <span>{currentItem.platformName || 'वीडियो'} पर देखें</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(lightboxContent, document.body);
};

export default Lightbox;
