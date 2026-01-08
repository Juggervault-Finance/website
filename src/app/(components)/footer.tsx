'use client'

import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../assets";
import { FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-12 md:mt-20">
      <div className="w-full px-4 md:px-10 py-12 md:py-16 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center justify-start gap-2 hover:opacity-80 transition-opacity mb-4 md:mb-6">
              <div className="relative h-8 w-8 md:h-10 md:w-32">
                <Image src={Logo} alt="Juggervault Logo" fill className="object-contain" priority />
              </div>
            </Link>
            <p className="text-slate-300 text-sm md:text-base max-w-md leading-relaxed">
              A compliance-first platform for tokenizing, exchanging, and enabling liquidity for real-world assets across Africa and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#platforms" className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base">
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-4 md:mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4 md:space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="mailto:contact@juggervault.finance" 
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base break-all"
                >
                  contact@juggervault.finance
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://twitter.com/juggervault" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                  aria-label="X (Formerly Twitter)"
                >
                  <FaXTwitter className="text-slate-300 group-hover:text-white" size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/juggervault-finance/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-slate-300 group-hover:text-white" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8 md:my-10"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm">
          <p className="text-slate-400">
            &copy; 2024 Juggervault. All rights reserved.
          </p>
          <p className="text-slate-400">
            Made with <span className="text-red-400">&#x2764;&#xfe0f;</span> for Africa and the future of asset tokenization
          </p>
        </div>
      </div>
    </footer>
  );
}
