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
    <div className={`relative overflow-hidden bg-[#F8F5EE] ${aspectRatio} ${className}`}>
      {/* Light Elegant Image Skeleton Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#F8F5EE] animate-pulse">
          <svg
            className="w-9 h-9 sm:w-11 sm:h-11 text-[#DCD4C4]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.175 2.899 1.35-1.8a1 1 0 0 1 1.622-.056l3.5 4.5a1 1 0 0 1 .129.938Z" />
          </svg>
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8F5EE] text-[#C96B25]/60 p-4 text-center z-10">
          <ImageOff className="w-7 h-7 mb-1 text-[#DCD4C4]" />
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
