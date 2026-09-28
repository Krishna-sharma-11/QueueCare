// SafeImage component with automatic error fallback to UI Avatars
import React, { useState } from 'react';

/**
 * Reusable image component with graceful error handling fallback
 * @param {Object} props
 * @param {string} props.src - Image URL
 * @param {string} props.alt - Alternative text
 * @param {string} props.name - Fallback avatar name
 * @param {string} props.className - Tailwind CSS classes
 */
export const SafeImage = ({ src, alt, name = 'Doctor', className = '', ...props }) => {
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0d9488&color=fff&bold=true`;
  const [imgSrc, setImgSrc] = useState(src || fallbackUrl);

  const handleError = () => {
    if (imgSrc !== fallbackUrl) {
      setImgSrc(fallbackUrl);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || name}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};
