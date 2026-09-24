import React, { useState, useEffect, useRef } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

export const ImageWithFallback = ({
  src,
  alt = 'गुरुकुल चित्र',
  fallbackSrc,
  className = '',
  aspectRatio = '',
  loading = 'lazy',
  fetchPriority,
  width,
  height,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Check if image is already cached/complete on mount or src update
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
    setHasError(false);
  }, [src]);

  const defaultPlaceholder = 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80';

  const handleError = () => {
    if (!hasError && fallbackSrc && src !== fallbackSrc) {
      // fallback
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#F2EBDA] ${aspectRatio} ${className}`}>
      {/* Lightweight Non-blocking Shimmer Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-r from-[#EDE7D4] via-[#F8F4EA] to-[#EDE7D4] animate-pulse">
          <Loader2 className="w-6 h-6 text-[#C96B25]/60 animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-50/90 text-orange-400 p-4 text-center z-10">
          <ImageOff className="w-7 h-7 mb-1 text-orange-300" />
          <span className="text-[11px] font-medium text-gray-500">चित्र उपलब्ध नहीं है</span>
        </div>
      ) : (
        <img
          ref={(el) => {
            imgRef.current = el;
            if (el && el.complete && el.naturalWidth > 0 && !isLoaded) {
              setIsLoaded(true);
            }
          }}
          src={src || defaultPlaceholder}
          alt={alt}
          loading={loading}
          fetchpriority={fetchPriority}
          decoding="async"
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`relative z-10 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
