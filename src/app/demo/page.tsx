'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaClipboardCheck, FaNetworkWired, FaShieldAlt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import {
  PexelsPixabay459728,
  PexelsPixabay46169,
  EllipseLockFrame
} from "../../assets";

export default function DemoPage() {
  return (
    <div className="w-full py-10 md:py-20 px-4 md:px-12">
      <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
            Live Asset Tokenization <strong className="text-blue-400">Demonstration</strong>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Experience Juggervault's platform in action. See step-by-step how we transform real-world assets into compliant digital representations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-white mb-10 md:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-4 md:mb-6 px-4">What You'll See</h3>
            <p className="text-base md:text-lg lg:text-xl text-blue-50 mb-6 md:mb-8 leading-relaxed px-4">
              Our interactive demonstration walks you through the complete asset tokenization process, from initial 
              asset verification to on-chain issuance. See compliance controls in action and understand how our platform 
              ensures regulatory alignment at every step.
            </p>
          </div>
        </div>

        <div className="space-y-12 md:space-y-20 mb-10 md:mb-16">
          {[
            { number: "1", title: "Asset Onboarding & Verification", description: "See how we verify physical assets, including documentation review, valuation, and compliance checks.", icon: FaClipboardCheck, image: PexelsPixabay459728, details: ["Upload asset documentation", "Automated compliance screening", "Third-party valuation integration", "Identity verification"] },
            { number: "2", title: "Digital Representation Creation", description: "Watch as verified assets are transformed into compliant digital tokens with embedded regulatory controls.", icon: FaNetworkWired, image: PexelsPixabay46169, details: ["Token specification and design", "Compliance parameter configuration", "Identity-linked ownership setup", "On-chain issuance preview"] },
            { number: "3", title: "Compliance Checkpoints", description: "Understand how compliance is enforced at every stage, ensuring regulatory alignment throughout the process.", icon: FaShieldAlt, image: EllipseLockFrame, details: ["Real-time compliance monitoring", "Regulatory reporting generation", "Audit trail creation", "Identity verification checkpoints"] },
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl md:text-3xl">{step.number}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Icon className="text-blue-600 text-xl md:text-2xl" />
                      <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-slate-900 leading-relaxed mb-4 md:mb-6">{step.description}</p>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6">
                    <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">You'll Experience:</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                          <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                          <span className="text-sm md:text-base text-slate-900">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 bg-white p-4">
                    <Image src={step.image} alt={step.title} fill className="object-contain" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12 mb-10 md:mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="font-semibold text-2xl sm:text-3xl mb-3 md:mb-4">Request Full Platform Walkthrough</h3>
              <p className="text-sm md:text-base text-slate-600 px-4">
                Schedule a personalized demonstration with our team. We'll show you exactly how Juggervault can transform your assets.
              </p>
            </div>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="demoFirstName" className="block text-sm font-medium text-slate-900 mb-2">First Name</label>
                  <input type="text" id="demoFirstName" name="firstName" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="demoLastName" className="block text-sm font-medium text-slate-900 mb-2">Last Name</label>
                  <input type="text" id="demoLastName" name="lastName" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="demoEmail" className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                <input type="email" id="demoEmail" name="email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="john@company.com" required />
              </div>
              <div>
                <label htmlFor="demoCompany" className="block text-sm font-medium text-slate-900 mb-2">Company</label>
                <input type="text" id="demoCompany" name="company" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="Company Name" />
              </div>
              <div>
                <label htmlFor="demoMessage" className="block text-sm font-medium text-slate-900 mb-2">Tell us about your assets (optional)</label>
                <textarea id="demoMessage" name="message" rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-sm md:text-base" placeholder="What types of assets are you looking to tokenize?" />
              </div>
              <button type="submit" className="w-full rounded-[52px] bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 text-sm md:text-base">
                Request Full Platform Walkthrough
                <FaArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12">
            <h3 className="font-semibold text-xl sm:text-2xl mb-3 md:mb-4">Prefer to Explore on Your Own?</h3>
            <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 max-w-2xl mx-auto px-4">
              You can also access our tokenization platform directly to see the interface in action.
            </p>
            <a
              href="https://tokenization.juggervault.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[52px] bg-blue-600 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:bg-blue-700 transition-colors"
            >
              Explore Tokenization Platform
              <FaArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

