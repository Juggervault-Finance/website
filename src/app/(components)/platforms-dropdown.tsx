'use client'

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export function PlatformsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const platforms = [
    { name: 'Tokenization', url: 'https://tokenization.juggervault.finance', available: true },
    { name: 'Exchange', url: 'https://exchange.juggervault.finance', available: false },
    { name: 'Stablecoin', url: 'https://stablecoin.juggervault.finance', available: false },
  ];

  const handlePlatformClick = (platform: typeof platforms[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (platform.available) {
      window.open(platform.url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Coming soon! This platform is under development.');
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
      >
        Platforms
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={12} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={(e) => handlePlatformClick(platform, e)}
              className={`w-full text-left px-4 py-3 hover:bg-slate-100 transition-colors font-medium text-sm flex items-center justify-between ${
                platform.available 
                  ? 'text-slate-900 hover:text-blue-600' 
                  : 'text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{platform.name}</span>
              {!platform.available && (
                <span className="text-xs text-slate-400">Coming soon</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

