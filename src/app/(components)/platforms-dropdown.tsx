'use client'

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface PlatformsDropdownProps {
  buttonStyle?: 'default' | 'primary';
}

export function PlatformsDropdown({ buttonStyle = 'default' }: PlatformsDropdownProps) {
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

  const buttonClasses = buttonStyle === 'primary' 
    ? "rounded-[52px] bg-gradient-to-r from-diamond-blue-600 to-tech-cyan-600 text-white font-semibold px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base hover:shadow-cube-glow transition-all flex items-center gap-2 shadow-cube"
    : "flex items-center gap-2 text-gray-200 font-bold hover:text-tech-cyan-400 transition-colors";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
      >
        Platforms
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={12} />
      </button>
      
      {isOpen && (
        <div className={`absolute ${buttonStyle === 'primary' ? 'right-0' : 'left-0'} top-full mt-2 w-56 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-cube border border-tech-cyan-500/30 py-2 z-50 tech-border`}>
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={(e) => handlePlatformClick(platform, e)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-700/50 transition-colors font-medium text-sm flex items-center justify-between ${
                platform.available 
                  ? 'text-gray-200 hover:text-tech-cyan-400' 
                  : 'text-gray-500 cursor-not-allowed'
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

