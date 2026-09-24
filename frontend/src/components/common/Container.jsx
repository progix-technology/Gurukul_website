import React from 'react';

export const Container = ({ children, className = '', as: Component = 'div', ...props }) => {
  return (
    <Component className={`vedic-container ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Container;
