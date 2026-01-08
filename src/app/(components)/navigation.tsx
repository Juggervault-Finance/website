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

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center justify-center gap-6 xl:gap-10 text-slate-900 font-bold text-sm xl:text-base">
                <li><PlatformsDropdown /></li>
                <li>
                  <Link href="/demo" className="hover:text-blue-600 transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <Link
                href="/demo"
                className="hidden sm:block rounded-[52px] bg-blue-600 text-white font-semibold px-4 py-2 text-sm hover:bg-blue-700 transition-colors"
              >
                Request Demo
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 hover:text-blue-600 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/demo"
                className="rounded-[52px] bg-blue-600 text-white font-semibold px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base hover:bg-blue-700 transition-colors inline-block"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 bg-white">
              <nav className="px-4 py-4">
                <ul className="flex flex-col gap-4 text-slate-900 font-bold">
                  <li><PlatformsDropdown /></li>
                  <li>
                    <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors w-full text-left py-2 block">
                      Demo
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors w-full text-left py-2 block">
                      Contact
                    </Link>
                  </li>
                  <li className="pt-2 border-t border-slate-200">
                    <Link
                      href="/demo"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full rounded-[52px] bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition-colors text-center inline-block"
                    >
                      Request Demo
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
