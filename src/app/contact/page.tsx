'use client'

import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full py-10 md:py-20 px-4 md:px-12">
      <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
            Get in <strong className="text-blue-400">Touch</strong>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Have questions about Juggervault? Want to request a demo or discuss how we can help transform your assets? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-4 md:mb-6">Send us a Message</h3>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="contactFirstName" className="block text-sm font-medium text-slate-900 mb-2">First Name</label>
                  <input type="text" id="contactFirstName" name="firstName" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="contactLastName" className="block text-sm font-medium text-slate-900 mb-2">Last Name</label>
                  <input type="text" id="contactLastName" name="lastName" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="Doe" required />
                </div>
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                <input type="email" id="contactEmail" name="email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="john@company.com" required />
              </div>
              <div>
                <label htmlFor="contactCompany" className="block text-sm font-medium text-slate-900 mb-2">Company</label>
                <input type="text" id="contactCompany" name="company" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="Company Name" />
              </div>
              <div>
                <label htmlFor="contactSubject" className="block text-sm font-medium text-slate-900 mb-2">Subject</label>
                <select id="contactSubject" name="subject" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" required>
                  <option value="">Select a subject</option>
                  <option value="demo">Request a Demo</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="compliance">Compliance Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contactMessage" className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                <textarea id="contactMessage" name="message" rows={6} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="Tell us how we can help..." required />
              </div>
              <button type="submit" className="w-full rounded-[52px] bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 text-sm md:text-base">
                Send Message
                <FaPaperPlane size={16} />
              </button>
            </form>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12">
              <h3 className="font-semibold text-2xl sm:text-3xl mb-6 md:mb-8">Contact Information</h3>
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-blue-600 text-lg md:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Email</h4>
                    <a href="mailto:contact@juggervault.finance" className="text-sm md:text-base text-blue-600 hover:underline break-all">
                      contact@juggervault.finance
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-blue-600 text-lg md:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Phone</h4>
                    <a href="tel:+2347033094100" className="text-sm md:text-base text-blue-600 hover:underline">
                      +2347033094100
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-600 text-lg md:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Office</h4>
                    <p className="text-sm md:text-base text-slate-600">
                      123 Blockchain Avenue<br />
                      Lagos, Nigeria<br />
                      West Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-white">
              <h3 className="font-semibold text-xl sm:text-2xl mb-4 md:mb-6">Quick Links</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link href="/#platforms" className="hover:underline flex items-center gap-2 text-sm md:text-base">
                    <FaPaperPlane size={14} />
                    Explore Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/#platforms" className="hover:underline flex items-center gap-2 text-sm md:text-base">
                    <FaPaperPlane size={14} />
                    Explore Platforms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

