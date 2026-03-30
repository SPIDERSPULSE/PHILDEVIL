import React from 'react';

const FabricTexture = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="fabric" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M0 0 L4 4 M4 0 L0 4" stroke="white" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.05" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#fabric)" />
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default FabricTexture;