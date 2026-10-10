import React, { useState } from 'react';

export default function Logo({ className = "h-12 sm:h-14 w-auto", showText = true, isWhite = false }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex items-center gap-3 group">
      {/* Real Uploaded Brand Logo */}
      {!imageError ? (
        <div className="relative flex-shrink-0">
          <img
            src="/logo.jpeg"
            alt="Harinee Catering - Feel The Taste"
            onError={() => setImageError(true)}
            className={`${className} object-contain rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105`}
          />
        </div>
      ) : (
        <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-crimson-50 border-2 border-crimson-800 flex items-center justify-center p-1 shadow-sm">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#FFFDFB" stroke="#8A101C" strokeWidth="3" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#CA8A04" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M30 42 C 34 26, 62 24, 68 44 C 72 58, 48 66, 36 54 Z" fill="#8A101C" />
            <path d="M42 42 C 46 32, 58 32, 60 44 C 60 52, 48 56, 44 48 Z" fill="#E12A3A" />
            <path d="M48 24 C 58 20, 68 30, 56 42 C 48 34, 46 28, 48 24 Z" fill="#15803D" />
            <path d="M34 50 Q 50 78 70 80" stroke="#CA8A04" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="88" r="3" fill="#8A101C" />
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif text-lg sm:text-xl font-black tracking-tight leading-none ${
              isWhite ? 'text-white' : 'text-crimson-950'
            }`}>
              HARINEE
            </span>
            <span className="text-[10px] font-extrabold text-leaf-700 uppercase tracking-wider bg-leaf-100 px-1.5 py-0.5 rounded border border-leaf-300">
              VEG
            </span>
          </div>
          <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${
            isWhite ? 'text-gold-300' : 'text-amber-800'
          }`}>
            Catering • Feel The Taste
          </span>
          <span className={`text-[9px] font-tamil -mt-0.5 sm:block hidden ${
            isWhite ? 'text-stone-300' : 'text-stone-500'
          }`}>
            ஹரிணி கேட்டரிங் சர்வீஸ்
          </span>
        </div>
      )}
    </div>
  );
}
