import React from 'react';

export const LoadingSpinner = ({
  message = 'पृष्ठ लोड हो रहा है...',
  size = 'md',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-14 h-14 border-4',
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="relative">
        <div
          className={`${sizeClasses[size]} rounded-full border-orange-200 border-t-gurukul-saffron animate-spin`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-serif text-gurukul-saffron font-bold">
          ॐ
        </div>
      </div>
      {message && (
        <p className="text-sm font-medium text-gray-700 font-serif tracking-wide animate-pulse">
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center w-full">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
