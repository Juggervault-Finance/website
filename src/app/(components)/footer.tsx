'use client'

import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../assets";
import { FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-gray-900 via-diamond-blue-900 to-gray-900 text-white mt-12 md:mt-20 border-t border-tech-cyan-500/30 tech-border relative overflow-hidden">
      {/* Cube Pattern Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, rgba(0, 188, 212, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 188, 212, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 188, 212, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 188, 212, 0.1) 75%)', backgroundSize: '20px 20px' }}></div>
      <div className="w-full px-4 md:px-10 py-12 md:py-16 max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center justify-start gap-2 hover:opacity-80 transition-opacity mb-4 md:mb-6">
              <div className="relative h-8 w-8 md:h-10 md:w-32">
                <Image src={Logo} alt="Juggervault Logo" fill className="object-contain" priority />
              </div>
            </Link>
            <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
              A compliance-first platform for tokenizing, exchanging, and enabling liquidity for real-world assets across Africa and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-tech-cyan-400 transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#platforms" className="text-gray-300 hover:text-tech-cyan-400 transition-colors text-sm md:text-base">
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-300 hover:text-tech-cyan-400 transition-colors text-sm md:text-base">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-tech-cyan-400 transition-colors text-sm md:text-base">
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
                <FaEnvelope className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="mailto:contact@juggervault.finance" 
                  className="text-gray-300 hover:text-tech-cyan-400 transition-colors text-sm md:text-base break-all"
                >
                  contact@juggervault.finance
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://twitter.com/_iamhoc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-diamond-blue-600 hover:to-tech-cyan-600 flex items-center justify-center transition-all group border border-tech-cyan-500/30 hover:border-tech-cyan-400 hover:shadow-cube"
                  aria-label="X (Formerly Twitter)"
                >
                  <FaXTwitter className="text-gray-300 group-hover:text-white" size={18} />
                </a>
                <a 
                  href="https://linkedin.com/company/juggervault" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-diamond-blue-600 hover:to-tech-cyan-600 flex items-center justify-center transition-all group border border-tech-cyan-500/30 hover:border-tech-cyan-400 hover:shadow-cube"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-gray-300 group-hover:text-white" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-tech-cyan-500/20 my-8 md:my-10"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm">
          <p className="text-gray-400">
            &copy; 2024 Juggervault. All rights reserved.
          </p>
          <p className="text-gray-400">
            Made with <span className="text-tech-cyan-400">&#x2764;&#xfe0f;</span> for Africa and the future of asset tokenization
          </p>
        </div>
      </div>
    </footer>
  );
}
