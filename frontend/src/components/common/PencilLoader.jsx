import React from 'react';

export const PencilLoader = ({ fullScreen = false, className = '' }) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center select-none ${
        fullScreen ? 'min-h-[100dvh] -mt-16 sm:-mt-20 pt-16 sm:pt-20 pb-16' : 'py-8 sm:py-12'
      } ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="pencil w-28 h-28 sm:w-36 sm:h-36 max-w-full"
      >
        <defs>
          <clipPath id="pencil-eraser">
            <rect height="30" width="30" ry="5" rx="5" />
          </clipPath>
        </defs>
        <circle
          transform="rotate(-113,100,100)"
          strokeLinecap="round"
          strokeDashoffset="439.82"
          strokeDasharray="439.82 439.82"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          r="70"
          className="pencil__stroke"
        />
        <g transform="translate(100,100)" className="pencil__rotate">
          <g fill="none">
            {/* Middle Main Body (Orange) */}
            <circle
              transform="rotate(-90)"
              strokeDashoffset="402"
              strokeDasharray="402.12 402.12"
              strokeWidth="30"
              stroke="#F97316"
              r="64"
              className="pencil__body1"
            />
            {/* Outer Side Body (Dark Orange) */}
            <circle
              transform="rotate(-90)"
              strokeDashoffset="465"
              strokeDasharray="464.96 464.96"
              strokeWidth="10"
              stroke="#C2410C"
              r="74"
              className="pencil__body2"
            />
            {/* Inner Side Body (Dark Orange) */}
            <circle
              transform="rotate(-90)"
              strokeDashoffset="339"
              strokeDasharray="339.29 339.29"
              strokeWidth="10"
              stroke="#C2410C"
              r="54"
              className="pencil__body3"
            />
          </g>
          {/* Eraser */}
          <g transform="rotate(-90) translate(49,0)" className="pencil__eraser">
            <g className="pencil__eraser-skew">
              <rect height="30" width="30" ry="5" rx="5" fill="#60A5FA" />
              <rect clipPath="url(#pencil-eraser)" height="30" width="5" fill="#3B82F6" />
              <rect height="20" width="30" fill="hsl(223,10%,90%)" />
              <rect height="20" width="15" fill="hsl(223,10%,70%)" />
              <rect height="20" width="5" fill="hsl(223,10%,80%)" />
              <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)" />
              <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)" />
            </g>
          </g>
          {/* Pencil Point */}
          <g transform="rotate(-90) translate(49,-30)" className="pencil__point">
            <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)" />
            <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)" />
            <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PencilLoader;
