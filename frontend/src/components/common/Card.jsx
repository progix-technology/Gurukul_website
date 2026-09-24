import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border-[#C68A32]/30 text-[#241B15]',
    cream: 'bg-[#F2EBDA] border-[#C68A32]/40 text-[#241B15]',
    saffron: 'bg-[#C96B25] text-white border-[#974514]',
    dark: 'bg-[#241B15] text-[#F8F4EA] border-[#C68A32]/40',
  };

  const hoverStyle = hoverEffect
    ? 'hover:-translate-y-0.5 hover:shadow-vedic transition-all duration-300'
    : '';

  return (
    <div
      className={`rounded-none border p-6 shadow-sm ${variantStyles[variant] || variantStyles.default} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
