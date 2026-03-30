import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'default', showTagline = true }) => {
  const sizes = {
    small: 'text-lg',
    default: 'text-2xl',
    large: 'text-3xl md:text-4xl'
  };

  return (
    <Link to="/" className="group relative inline-block">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-gold-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition duration-500" />
      <div className="relative">
        <h1 className={`${sizes[size]} font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-gold-500 bg-clip-text text-transparent group-hover:scale-105 transition`}>
          PHILDEV
        </h1>
        {showTagline && (
          <p className="text-[10px] text-white/40 tracking-wider mt-0.5 text-center">
            Phillip Kerher
          </p>
        )}
      </div>
    </Link>
  );
};

export default Logo;