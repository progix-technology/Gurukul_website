import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const VARIANTS = {
  primary: 'bg-[#E5832E] hover:bg-[#D97724] text-white shadow-sm hover:shadow focus:ring-[#E5832E]',
  secondary: 'bg-[#241B15] hover:bg-[#19120E] text-white shadow-sm focus:ring-[#241B15]',
  gold: 'bg-[#C68A32] hover:bg-[#B27626] text-white font-bold shadow-sm focus:ring-[#C68A32]',
  outline: 'border border-[#E5832E] text-[#E5832E] hover:bg-[#E5832E] hover:text-white focus:ring-[#E5832E] bg-transparent',
  'outline-white': 'border border-white text-white hover:bg-white hover:text-[#241B15] focus:ring-white bg-transparent',
  ghost: 'text-[#E5832E] hover:bg-orange-50 focus:ring-orange-200 bg-transparent',
};

const SIZES = {
  sm: 'px-3 py-1 text-xs rounded-none gap-1.5 leading-normal',
  md: 'px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-none gap-2 leading-normal',
  lg: 'px-6 py-2 text-sm sm:text-base font-semibold rounded-none gap-2.5 leading-normal',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  isLoading = false,
  loadingText = 'प्रतीक्षा करें...',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center text-center font-sans tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-[0.99] select-none cursor-pointer disabled:opacity-60 disabled:pointer-events-none rounded-none whitespace-nowrap';
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.md;
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  const content = (
    <span className="inline-flex items-center justify-center gap-2.5 leading-none">
      {isLoading && <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />}
      {!isLoading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span className="text-center">{isLoading ? loadingText : children}</span>
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0" />}
    </span>
  );

  if (to && !disabled && !isLoading) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !disabled && !isLoading) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
