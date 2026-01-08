'use client'

import { FaShieldAlt, FaLock, FaGlobe, FaEye, FaHandshake, FaCheckCircle } from "react-icons/fa";

export default function CompliancePage() {
  return (
    <div className="w-full max-w-full py-10 md:py-20 relative z-10">
      {/* Compliance Section */}
      <section className="px-4 md:px-12">
        <div className="w-full max-w-7xl mx-auto py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4 text-gray-100">
              Compliance Is <strong className="bg-gradient-to-r from-tech-cyan-400 to-diamond-blue-400 bg-clip-text text-transparent">Embedded by Design</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Our platform is built from the ground up with compliance at its core, enabling institutional participation while maintaining regulatory alignment.
            </p>
          </div>

          <div className="bg-gradient-to-br from-diamond-blue-600 to-tech-cyan-600 rounded-2xl p-6 md:p-12 text-white text-center mb-10 md:mb-16 shadow-cube-glow">
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
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-tech-cyan-500/30 rounded-2xl p-6 md:p-8 hover:border-tech-cyan-400/50 hover:shadow-cube-glow transition-all tech-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-diamond-blue-500/30 to-tech-cyan-500/30 border border-tech-cyan-500/30 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="text-tech-cyan-400 text-xl md:text-2xl" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-gray-100">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-tech-cyan-500/30 rounded-2xl p-6 md:p-12 mb-10 md:mb-16 tech-border">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-6 md:mb-8 text-center text-gray-100">Compliance Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-gray-100">Identity-Aware Asset Control</h4>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Every transaction requires verified identity, ensuring that only authorized parties can interact with tokenized assets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-200">KYC/AML integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-200">Identity verification at onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-200">Real-time identity validation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-gray-100">Regulatory Reporting</h4>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Comprehensive reporting tools provide regulators with full visibility into platform activity and asset flows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-200">Automated compliance reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-200">Complete audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-tech-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-200">Regulator dashboard access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

