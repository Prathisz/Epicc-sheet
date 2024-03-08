// Add this to the HeroSection.js file or create a new SVG component
import React from 'react';

const SVGAnimation = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
      <circle cx="50" cy="50" r="30" fill="#2196F3">
        <animate
          attributeName="r"
          values="30;15;30"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default SVGAnimation;
