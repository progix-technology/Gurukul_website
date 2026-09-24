import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-none text-xs font-serif font-bold uppercase tracking-wider mb-3.5 shadow-sm ${
            light
              ? 'bg-[#C96B25] text-white border border-amber-200/30'
              : 'bg-[#FFF2DE] text-[#B35614] border border-[#E9BF8C]'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-none ${light ? 'bg-amber-200' : 'bg-[#C96B25]'}`}></span>
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-serif leading-tight mb-4 ${
          light ? 'text-[#F8F4EA]' : 'text-[#241B15]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#F8F4EA]/80' : 'text-[#241B15]/80'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Traditional Star Divider */}
      <div className={`flex items-center gap-3 mt-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`h-px w-12 ${light ? 'bg-[#C68A32]' : 'bg-[#C68A32]'}`}></span>
        <span className={`text-base font-serif font-bold ${light ? 'text-[#C68A32]' : 'text-[#C96B25]'}`}>✦</span>
        <span className={`h-px w-12 ${light ? 'bg-[#C68A32]' : 'bg-[#C68A32]'}`}></span>
      </div>
    </div>
  );
};

export default SectionHeading;
