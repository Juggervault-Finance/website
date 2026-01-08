'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PlatformsDropdown } from "./platforms-dropdown";
import { Logo } from "../../assets";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="w-full">
        <div className="h-16 md:h-24">
          <div className="px-4 md:px-12 py-3 md:py-4 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center justify-start gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="relative h-8 w-8 md:h-10 md:w-32">
                  <Image 
                    src={Logo} 
                    alt="Juggervault Logo" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:block flex-1 flex justify-center">
              <ul className="flex items-center justify-center gap-6 xl:gap-10 text-slate-900 font-bold text-sm xl:text-base">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-blue-600 transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Platforms Button - Right Side */}
            <div className="hidden lg:block flex-shrink-0">
              <PlatformsDropdown buttonStyle="primary" />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 hover:text-blue-600 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 bg-white">
              <nav className="px-4 py-4">
                <ul className="flex flex-col gap-4 text-slate-900 font-bold">
                  <li>
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors w-full text-left py-2 block">
                      Home
                    </Link>
                  </li>
                  <li><PlatformsDropdown /></li>
                  <li>
                    <Link href="/compliance" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors w-full text-left py-2 block">
                      Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors w-full text-left py-2 block">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
