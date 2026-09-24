import React from 'react';

export const Skeleton = ({
  className = '',
  variant = 'text', // 'text' | 'rectangular' | 'circular'
  width,
  height,
}) => {
  const variantClasses = {
    text: 'rounded h-4 my-1',
    rectangular: 'rounded-xl',
    circular: 'rounded-full',
  };

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      style={style}
      className={`bg-gradient-to-r from-orange-100/70 via-amber-50 to-orange-100/70 animate-pulse ${variantClasses[variant]} ${className}`}
    />
  );
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-orange-100 p-6 shadow-sm space-y-4">
    <Skeleton variant="rectangular" className="w-full h-48 mb-4" />
    <Skeleton variant="text" className="w-3/4 h-6" />
    <Skeleton variant="text" className="w-full h-4" />
    <Skeleton variant="text" className="w-5/6 h-4" />
    <div className="pt-2 flex justify-between items-center">
      <Skeleton variant="rectangular" className="w-24 h-8" />
      <Skeleton variant="rectangular" className="w-20 h-6" />
    </div>
  </div>
);

export default Skeleton;
