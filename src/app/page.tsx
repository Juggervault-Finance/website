'use client'

import Image from "next/image";
import Link from "next/link";
import { FancyButton } from "./(components)/fancy-button";
import { FaArrowRight, FaBuilding, FaIndustry, FaLandmark, FaGlobe, FaShieldAlt, FaLock, FaExchangeAlt, FaNetworkWired, FaHandshake, FaCheckCircle, FaClipboardCheck, FaProjectDiagram, FaBolt, FaOilCan, FaChartLine, FaMoneyBillWave, FaEye, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCode, FaFileContract, FaLinkedin, FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import {
  MoneyManLarge,
  HeroImage,
  AssetRegistrationVisual,
  DigitalAssetLifecycle,
  MarketAccess,
  ComplianceVerification,
  AfricaInfrastructureMap,
  founderImage,
  Logo,
  PexelsPixabay459728,
  PexelsPixabay46169,
  EllipseLockFrame
} from "../assets";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full py-10 md:py-20">
      {/* Hero Section */}
      <header id="home" className="px-4 md:px-12">
        <div className="w-full">
          <div className="mx-auto w-fit">
            <FancyButton label="Digital Infrastructure for Real-World Assets" />
          </div>

          <div className="mt-6 md:mt-8 max-w-5xl mx-auto text-center">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
              Digitizing Real-World Assets for <strong className="text-blue-400">Global Capital Access</strong>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              A compliance-first infrastructure for transforming physical assets into digitally interoperable financial instruments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-10 px-4">
            <a 
              href="https://tokenization.juggervault.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-[52px] bg-blue-600 text-white font-semibold px-6 py-3 flex items-center justify-center gap-3 shadow-shadowin hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Tokenize Assets
              <FaArrowRight size={16} />
            </a>
            <button
              onClick={() => scrollToSection('platforms')}
              className="w-full sm:w-auto rounded-[52px] bg-white border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base"
            >
              Explore the Platform
            </button>
            <Link
              href="/demo"
              className="w-full sm:w-auto rounded-[52px] bg-white border-2 border-slate-200 text-slate-900 font-semibold px-6 py-3 hover:border-blue-600 hover:text-blue-600 transition-colors text-sm sm:text-base inline-block text-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-20">
          <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[595px]">
            <Image src={HeroImage} alt="Juggervault digital infrastructure" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </header>

      {/* Three Pillars Section */}
      <section id="what-we-provide" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">What We Provide</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Three foundational pillars enabling real-world asset digitization
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-3">
            {/* Tokenization Infrastructure */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center mb-6">
                <FaNetworkWired className="text-white text-2xl" />
              </div>
              <h3 className="font-semibold text-2xl mb-4">Tokenization Infrastructure</h3>
              <p className="text-slate-600">
                Convert verified physical assets into compliant digital representations.
              </p>
            </div>

            {/* Regulated Exchange */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center mb-6">
                <FaExchangeAlt className="text-white text-2xl" />
              </div>
              <h3 className="font-semibold text-2xl mb-4">Regulated Exchange</h3>
              <p className="text-slate-600">
                Enable secure and permissioned asset transfers within controlled markets.
              </p>
            </div>

            {/* Liquidity Enablement */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center mb-6">
                <FaLock className="text-white text-2xl" />
              </div>
              <h3 className="font-semibold text-2xl mb-4">Liquidity Enablement</h3>
              <p className="text-slate-600">
                Position tokenized assets for structured access to capital and financial utility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Who It's For</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Built for organizations that need compliant, institutional-grade asset digitization
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FaIndustry className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Energy & Industrial Companies</h3>
                <p className="text-slate-600 text-sm">Unlock liquidity from capital-intensive assets</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FaBuilding className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Commodity Producers</h3>
                <p className="text-slate-600 text-sm">Transform physical commodities into tradeable digital assets</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FaGlobe className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Institutional Investors</h3>
                <p className="text-slate-600 text-sm">Access new asset classes with compliance-first infrastructure</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FaLandmark className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Governments & Regulators</h3>
                <p className="text-slate-600 text-sm">Enable transparent, compliant asset digitization</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Infrastructure Operators</h3>
                <p className="text-slate-600 text-sm">Maximize value from long-term infrastructure assets</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FaBuilding className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Asset Owners</h3>
                <p className="text-slate-600 text-sm">Access global capital markets through digitization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-it-matters" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Why It Matters</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg md:text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">Illiquid Assets Limit Growth</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Physical assets remain locked, preventing access to capital and limiting expansion opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg md:text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">Traditional Financing is Slow and Restrictive</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Legacy systems create barriers to entry, lengthy processes, and limited accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg md:text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">Digital Asset Infrastructure Increases Efficiency</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Blockchain technology enables transparent, efficient, and scalable asset management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg md:text-xl">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">Compliance-First Design Enables Institutional Participation</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Built for regulators, not against them. Institutional-grade compliance opens new markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
              One Infrastructure. <strong className="text-blue-400">Multiple Asset Pathways.</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Three integrated platforms working together to enable complete asset digitization, exchange, and liquidity enablement.
            </p>
          </div>

          <div className="space-y-12 md:space-y-20">
            {[
              { name: "Tokenization", icon: FaNetworkWired, purpose: "Create compliant digital representations of real-world assets.", capabilities: ["Asset digitization using open standards", "Embedded compliance controls", "Identity-restricted participation", "Audit and reporting tooling"], image: AssetRegistrationVisual, available: true, url: "https://tokenization.juggervault.finance" },
              { name: "Exchange", icon: FaExchangeAlt, purpose: "Enable compliant secondary activity for tokenized assets.", capabilities: ["Permissioned transfers", "Controlled market participation", "Institutional settlement standards"], image: MarketAccess, available: false, url: "https://exchange.juggervault.finance" },
              { name: "Liquidity Infrastructure", icon: FaLock, purpose: "Enable tokenized assets to participate in broader financial ecosystems.", capabilities: ["Asset positioning for capital access", "Risk-managed financial workflows", "Governance-driven controls"], image: MoneyManLarge, available: false, url: "https://stablecoin.juggervault.finance" },
            ].map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={platform.name} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white text-xl md:text-2xl" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm text-slate-600">Platform {index + 1}</span>
                        <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">{platform.name}</h3>
                      </div>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-slate-600">Purpose</h4>
                      <p className="text-base md:text-lg text-slate-900">{platform.purpose}</p>
                    </div>
                    <div className="mb-6 md:mb-8">
                      <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-slate-600">Capabilities</h4>
                      <ul className="space-y-2 md:space-y-3">
                        {platform.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 md:gap-3">
                            <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                            <span className="text-sm md:text-base text-slate-900">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => platform.available ? window.open(platform.url, '_blank') : alert('Coming soon!')}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-[52px] font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base transition-colors ${
                        platform.available ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-300 text-slate-600 cursor-not-allowed opacity-60'
                      }`}
                      disabled={!platform.available}
                    >
                      {platform.available ? (
                        <>Enter {platform.name} Platform <FaArrowRight size={16} /></>
                      ) : (
                        <>Coming Soon <span className="text-xs ml-1">(Under Development)</span></>
                      )}
                    </button>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-slate-200">
                      <Image src={platform.image} alt={platform.name} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
              How <strong className="text-blue-400">Juggervault</strong> Works
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              A streamlined, compliance-first process for transforming real-world assets into digitally interoperable financial instruments.
            </p>
          </div>

          <div className="space-y-12 md:space-y-20">
            {[
              { number: "1", title: "Asset Verification and Onboarding", description: "Comprehensive verification of physical assets, including legal documentation, valuation, and compliance checks.", icon: FaClipboardCheck, image: PexelsPixabay459728 },
              { number: "2", title: "Digital Representation with Embedded Compliance", description: "Creation of compliant digital tokens representing asset ownership, with built-in regulatory controls and identity verification.", icon: FaNetworkWired, image: PexelsPixabay46169 },
              { number: "3", title: "Exchange Within Regulated Environments", description: "Secure trading and transfer of tokenized assets within permissioned markets, maintaining full compliance throughout.", icon: FaExchangeAlt, image: EllipseLockFrame },
              { number: "4", title: "Integration Into Structured Financial Workflows", description: "Seamless integration with broader financial ecosystems, enabling capital access and liquidity optimization.", icon: FaProjectDiagram, image: ComplianceVerification },
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
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start gap-2 md:gap-3">
                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base text-slate-900">Compliance-first approach at every stage</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base text-slate-900">Institutional-grade security and verification</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base text-slate-900">Transparent and auditable processes</span>
                      </li>
                    </ul>
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
        </div>
      </section>

      {/* Industry Section */}
      <section id="industry" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
              Digital Infrastructure for <strong className="text-blue-400">Africa's Asset Economy</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Enabling capital access for industrial assets, bridging physical resources and global markets.
            </p>
          </div>

          {/* Why Energy Section */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <FaBolt className="text-blue-400 text-2xl md:text-3xl" />
                <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">Why Energy</h3>
              </div>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
                Energy assets represent some of the most capital-intensive and strategically important assets, 
                making them ideal candidates for tokenization and liquidity optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              { icon: FaMoneyBillWave, title: "Capital-Intensive Assets", description: "Energy infrastructure requires significant capital investment, making liquidity access critical for growth and development." },
              { icon: FaChartLine, title: "Long Settlement Cycles", description: "Traditional energy asset transactions involve lengthy settlement periods. Tokenization accelerates and streamlines these processes." },
              { icon: FaBolt, title: "Inefficient Collateral Utilization", description: "Energy assets are often underutilized as collateral. Tokenization unlocks their value for capital access and financial utility." },
            ].map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="text-blue-600 text-xl md:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">{reason.title}</h4>
                  <p className="text-sm md:text-base text-slate-600">{reason.description}</p>
                </div>
              );
            })}
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-slate-200">
              <Image src={AfricaInfrastructureMap} alt="Energy assets" fill className="object-cover" />
            </div>
          </div>

          {/* Why Africa Section */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <FaGlobe className="text-blue-400 text-2xl md:text-3xl" />
                <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">Why Africa</h3>
              </div>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
                Africa's energy sector presents unique opportunities and challenges that align perfectly with tokenization solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {[
                { icon: FaGlobe, title: "Resource-Rich Economies", description: "Africa is home to abundant energy resources, but traditional financing models limit access to capital for development." },
                { icon: FaChartLine, title: "Structural Capital Access Gaps", description: "Many African energy projects face financing challenges. Tokenization provides new pathways to global capital markets." },
                { icon: FaIndustry, title: "Rapid Regulatory Modernization", description: "African regulators are embracing digital innovation, creating opportunities for compliant blockchain infrastructure." },
              ].map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center mb-4 md:mb-6">
                      <Icon className="text-blue-600 text-xl md:text-2xl" />
                    </div>
                    <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">{reason.title}</h4>
                    <p className="text-sm md:text-base text-slate-600">{reason.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-white mb-8 md:mb-12">
              <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-center px-4">Infrastructure Built for African Growth</h3>
              <p className="text-base md:text-lg lg:text-xl text-blue-50 max-w-3xl mx-auto text-center leading-relaxed px-4">
                Juggervault is designed specifically to address the unique challenges and opportunities in Africa's energy sector. 
                By combining compliance-first architecture with blockchain innovation, we create pathways for African energy assets 
                to access global capital markets while maintaining regulatory alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
              Compliance Is <strong className="text-blue-400">Embedded by Design</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Our platform is built from the ground up with compliance at its core, enabling institutional participation while maintaining regulatory alignment.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-white text-center mb-10 md:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed px-4">
              Built for <strong>collaboration with regulators</strong>, not circumvention. We enable compliant digital asset infrastructure that meets institutional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
            {[
              { icon: FaShieldAlt, title: "Permissioned Token Standards", description: "Built on open standards with embedded permission controls, ensuring only verified participants can interact with tokenized assets." },
              { icon: FaLock, title: "Identity-Linked Asset Ownership", description: "Every asset token is linked to verified identities, creating an auditable trail and preventing unauthorized transfers." },
              { icon: FaGlobe, title: "Jurisdiction-Aware Controls", description: "Platform automatically enforces jurisdiction-specific regulations, ensuring compliance across different legal frameworks." },
              { icon: FaEye, title: "Regulator-Aligned Transparency", description: "Comprehensive reporting and audit trails provide regulators with full visibility into asset activity and ownership." },
              { icon: FaHandshake, title: "Built for Collaboration", description: "Designed for collaboration with regulators, not circumvention. We work with regulatory bodies to ensure compliance." },
              { icon: FaCheckCircle, title: "Institutional-Grade Compliance", description: "Enterprise-level compliance controls that meet the standards expected by institutional investors and regulators." },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="text-blue-600 text-xl md:text-2xl" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12 mb-10 md:mb-16">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-6 md:mb-8 text-center">Compliance Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">Identity-Aware Asset Control</h4>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                  Every transaction requires verified identity, ensuring that only authorized parties can interact with tokenized assets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-slate-900">KYC/AML integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-slate-900">Identity verification at onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-slate-900">Real-time identity validation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">Regulatory Reporting</h4>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                  Comprehensive reporting tools provide regulators with full visibility into platform activity and asset flows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-slate-900">Automated compliance reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-slate-900">Complete audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-slate-900">Regulator dashboard access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
              Our <strong className="text-blue-400">Partners</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Juggervault partners with leading organizations across finance, technology, and regulation 
              to enable compliant asset tokenization and digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
            {[
              { icon: FaBuilding, title: "Institutional Partners", description: "Leading financial institutions and asset managers" },
              { icon: FaHandshake, title: "Technology Partners", description: "Blockchain infrastructure and security providers" },
              { icon: FaGlobe, title: "Regulatory Partners", description: "Compliance and regulatory advisory organizations" },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Icon className="text-white text-xl md:text-2xl" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">{category.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{category.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12 text-center mb-10 md:mb-16">
            <div className="max-w-2xl mx-auto">
              <FaHandshake className="text-blue-400 text-4xl md:text-6xl mx-auto mb-4 md:mb-6" />
              <h3 className="font-semibold text-2xl sm:text-3xl mb-3 md:mb-4">Partner With Us</h3>
              <p className="text-slate-600 text-base md:text-lg mb-6 md:mb-8 px-4">
                We're actively building partnerships with leading organizations across finance, 
                technology, and regulation. Partner information will be added here soon.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto rounded-[52px] bg-blue-600 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:bg-blue-700 transition-colors text-center inline-block"
                >
                  Become a Partner
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto rounded-[52px] bg-white border-2 border-slate-200 text-slate-900 font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:border-blue-600 hover:text-blue-600 transition-colors text-center inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-white mb-10 md:mb-16">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-6 md:mb-8 text-center">Benefits of Partnering</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Access to Innovation", description: "Leverage cutting-edge blockchain technology for asset tokenization" },
                { title: "Compliance-First Approach", description: "Built-in regulatory compliance and institutional-grade security" },
                { title: "Market Expansion", description: "Reach new markets and unlock value from tokenized assets" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  <FaCheckCircle className="text-blue-50 text-xl md:text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-2">{benefit.title}</h4>
                    <p className="text-sm md:text-base text-blue-50">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section id="about" className="mt-12 md:mt-20 px-4 md:px-12 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
              Meet the <strong className="text-blue-400">Founder</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Learn about the visionary behind Juggervault and the expertise driving compliant digital infrastructure for real-world assets.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12 mb-10 md:mb-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-shrink-0 w-full sm:w-auto flex justify-center md:justify-start">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-100">
                  <Image src={founderImage} alt="Henry Onyebuchi" width={256} height={256} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Henry Onyebuchi</h3>
                <p className="text-lg md:text-xl text-slate-600 mb-4 md:mb-6">Founder & Chief Infrastructure Architect</p>
                <p className="text-base md:text-lg text-slate-900 leading-relaxed mb-4 md:mb-6">
                  Henry Onyebuchi is a blockchain infrastructure and security expert with extensive experience in designing 
                  compliant digital systems for real-world assets. As a decentralized finance expert and security engineer, 
                  he brings a unique combination of technical depth and regulatory understanding to the challenge of bridging 
                  physical assets with digital financial infrastructure.
                </p>
                <p className="text-base md:text-lg text-slate-900 leading-relaxed mb-4 md:mb-6">
                  With a deep understanding of both blockchain technology and regulatory frameworks, Henry founded Juggervault 
                  to create compliant, institutional-grade infrastructure that enables real-world assets to access global capital 
                  markets while maintaining regulatory alignment.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://linkedin.com/in/henry-onyebuchi-c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-600" />
                  </a>
                  <a
                    href="https://github.com/hendobox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 md:mb-16">
            <h3 className="font-semibold text-2xl sm:text-3xl text-center mb-8 md:mb-12">Background & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: FaCode, title: "Blockchain Infrastructure", description: "Extensive experience in designing and implementing enterprise-grade blockchain infrastructure with a focus on security and scalability." },
                { icon: FaShieldAlt, title: "Security Engineering", description: "Deep expertise in security-first design principles, conducting comprehensive audits and ensuring institutional-grade protection." },
                { icon: FaFileContract, title: "Regulatory Compliance", description: "Strong understanding of regulatory frameworks and experience building compliant systems that meet institutional standards." },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 bg-opacity-20 flex items-center justify-center mb-4 md:mb-6">
                      <Icon className="text-blue-600 text-xl md:text-2xl" />
                    </div>
                    <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">{item.title}</h4>
                    <p className="text-sm md:text-base text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-white mb-10 md:mb-16">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-4 md:mb-6 text-center px-4">Vision for Juggervault</h3>
            <p className="text-base md:text-lg lg:text-xl text-blue-50 max-w-3xl mx-auto text-center leading-relaxed px-4">
              Henry founded Juggervault with the vision of creating compliant digital infrastructure that enables real-world assets 
              to access global capital markets. By combining deep technical expertise with regulatory understanding, Juggervault 
              bridges the gap between physical assets and digital financial systems, unlocking unprecedented value for asset owners, 
              investors, and economies around the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 md:mt-20 px-4 md:px-12">
        <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 md:p-12 text-center text-white">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 px-4">Ready to Transform Your Assets?</h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-blue-50 max-w-2xl mx-auto px-4">
            Join the future of asset digitization. Get started with Juggervault today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button
              onClick={() => scrollToSection('platforms')}
              className="w-full sm:w-auto rounded-[52px] bg-white text-blue-600 font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:bg-blue-50 transition-colors"
            >
              Explore Platforms
            </button>
            <Link
              href="/demo"
              className="w-full sm:w-auto rounded-[52px] bg-transparent border-2 border-white text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:bg-white hover:text-blue-600 transition-colors text-center inline-block"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full bg-white mt-12 md:mt-20">
        <div className="w-full px-4 md:px-10 py-8 md:py-10 max-w-3xl mx-auto">
          <div className="mx-auto w-fit">
            <Link href="/demo" className="py-2.5 md:py-3 px-3 md:px-4 rounded-[32px] bg-white border border-slate-200 flex items-center justify-evenly font-medium text-blue-500 text-sm md:text-base inline-block">
              <GoDotFill className="text-blue-500" size={18} />
              Get early access
            </Link>
          </div>

          <div className="mt-6 md:mt-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl mx-auto w-fit font-medium text-slate-900 text-center px-4">Transform Your Assets Today</h3>
          </div>

          <form className="mt-6 md:mt-8">
            <div className="bg-white w-full max-w-md mx-auto rounded-[49px] flex flex-col sm:flex-row items-stretch sm:items-center border border-slate-200 px-4 py-2 shadow-[csbtn] gap-2">
              <div className="flex-1">
                <input type="email" name="email" id="footerEmail" placeholder="Enter your email" className="w-full border-none outline-none text-sm md:text-base px-2" />
              </div>
              <Link
                href="/demo"
                className="rounded-[52px] bg-blue-600 text-white font-semibold px-4 md:px-6 py-2.5 md:py-3 hover:bg-blue-700 transition-colors text-sm md:text-base whitespace-nowrap inline-block"
              >
                Request Demo
              </Link>
            </div>
          </form>

          <div className="mt-10 md:mt-14">
            <nav className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
              <ul className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6">
                <li className="w-full md:w-auto flex justify-center md:justify-start mb-2 md:mb-0">
                  <Link href="/" className="flex items-center justify-start gap-2 hover:opacity-80 transition-opacity">
                    <div className="relative h-6 w-6 md:h-8 md:w-28">
                      <Image src={Logo} alt="Juggervault Logo" fill className="object-contain" priority />
                    </div>
                  </Link>
                </li>
                <li><button onClick={() => scrollToSection('platforms')} className="hover:text-blue-600 transition-colors text-slate-700 text-sm md:text-base">Platforms</button></li>
                <li><Link href="/demo" className="hover:text-blue-600 transition-colors text-slate-700 text-sm md:text-base">Demo</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-colors text-slate-700 text-sm md:text-base">Contact</Link></li>
              </ul>

              <ul className="flex items-center justify-center md:justify-end gap-4">
                <li>
                  <a href="https://twitter.com/juggervault" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="X (Formerly Twitter)">
                    <FaXTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/juggervault" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm gap-2">
              <p>Made with <em className="hidden">Love</em> &#x2764;&#xfe0f;</p>
              <p>&copy; 2024 Juggervault. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
