import React, { useState, useEffect } from 'react';

const GlitchText = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
      let newText = '';
      for (let i = 0; i < text.length; i++) {
        if (Math.random() > 0.7) {
          newText += chars[Math.floor(Math.random() * chars.length)];
        } else {
          newText += text[i];
        }
      }
      setGlitchText(newText);
      setTimeout(() => {
        setGlitchText(text);
        setIsGlitching(false);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? 'opacity-50 blur-[1px]' : ''}>{glitchText}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-50 blur-sm" style={{ transform: 'translate(-2px, -1px)' }}>
            {glitchText}
          </span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-50 blur-sm" style={{ transform: 'translate(2px, 1px)' }}>
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;