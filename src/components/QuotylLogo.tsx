import React from 'react';

interface QuotylLogoProps {
  showTagline?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

// Complete logo SVG from provided SVG file
const QuotylLogoSVG: React.FC<{ 
  showTagline?: boolean; 
  width?: number | string;
  height?: number | string;
  className?: string;
}> = ({ showTagline = true, width, height, className = '' }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 777.29 308.88"
      width={width}
      height={height}
      className={className}
      style={{ width: width || 'auto', height: height || 'auto' }}
    >
      <defs>
        <style>
          {`
            .quotyl-cls-1, .quotyl-cls-2 {
              fill: #008d4f;
            }
            .quotyl-cls-2 {
              font-size: 281.65px;
            }
            .quotyl-cls-2, .quotyl-cls-3 {
              font-family: BaskOldFace, 'Baskerville Old Face';
            }
            .quotyl-cls-3 {
              font-size: 28.78px;
              letter-spacing: .2em;
            }
          `}
        </style>
      </defs>
      {/* Q shape */}
      <path
        className="quotyl-cls-1"
        d="M112.02,149.51l57.36-.63-5.97,10.39h-15.07s3.21,3.44,3.97,10.48h16.75l-5.5,9.66h-10.91s-1.1,23.73-29.57,26.46l34.5,49.33h-15.22l-33.06-47.6v-9.43s30.57,4.74,30.96-18.71h-33.93l5.8-9.76,26.79.1s-1.82-9.57-16.46-10.72l-16.14.1,5.71-9.66Z"
      />
      {/* Quotyl text */}
      <text className="quotyl-cls-2" transform="translate(0 234.75)">
        <tspan x="0" y="0">Quotyl</tspan>
      </text>
      {/* Decorative path */}
      <path
        className="quotyl-cls-1"
        d="M125.56,236.4s23.81,43.11,60.35,24.63c0,0-38.97-2.54-39.4-30.83l-20.95,6.19Z"
      />
      {/* Tagline - only show if showTagline is true */}
      {showTagline && (
        <text className="quotyl-cls-3" transform="translate(247.29 279.19)">
          <tspan x="0" y="0">Prompt To Quote</tspan>
        </text>
      )}
    </svg>
  );
};

const QuotylLogo: React.FC<QuotylLogoProps> = ({ 
  showTagline = false, 
  size = 'medium',
  className = '' 
}) => {
  const sizeClasses = {
    small: { width: 200, height: 80 },
    medium: { width: 300, height: 120 },
    large: { width: 400, height: 160 }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <QuotylLogoSVG
        showTagline={showTagline}
        width={currentSize.width}
        height={currentSize.height}
      />
    </div>
  );
};

// Compact version for header/nav (just the wordmark without tagline)
export const QuotylLogoCompact: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <span className={`flex items-center ${className}`}>
      <QuotylLogoSVG
        showTagline={false}
        width={120}
        height={48}
      />
    </span>
  );
};

export default QuotylLogo;

