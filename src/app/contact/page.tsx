'use client'

import { useState, FormEvent } from 'react';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || 'Failed to send message. Please try again later.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-full py-6 md:py-12 px-4 md:px-8 relative z-10">
      <div className="w-full max-w-6xl mx-auto py-6 md:py-12">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 leading-tight px-4 text-gray-100">
            Get in <strong className="bg-gradient-to-r from-tech-cyan-400 to-diamond-blue-400 bg-clip-text text-transparent">Touch</strong>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Have questions about Juggervault? Want to request a demo or discuss how we can help transform your assets? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-tech-cyan-500/30 rounded-2xl p-5 md:p-8 tech-border">
            <h3 className="font-semibold text-xl sm:text-2xl mb-4 md:mb-5 text-gray-100">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              {submitStatus.type && (
                <div className={`p-4 rounded-lg border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/30 border-green-500/50 text-green-200' 
                    : 'bg-red-900/30 border-red-500/50 text-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="contactFirstName" className="block text-sm font-medium text-gray-200 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="contactFirstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-gray-700/50 border border-tech-cyan-500/30 rounded-lg focus:outline-none focus:border-tech-cyan-400 text-gray-200 placeholder-gray-400 text-sm" 
                    placeholder="John" 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="contactLastName" className="block text-sm font-medium text-gray-200 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="contactLastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-gray-700/50 border border-tech-cyan-500/30 rounded-lg focus:outline-none focus:border-tech-cyan-400 text-gray-200 placeholder-gray-400 text-sm" 
                    placeholder="Doe" 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                <input 
                  type="email" 
                  id="contactEmail" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-tech-cyan-500/30 rounded-lg focus:outline-none focus:border-tech-cyan-400 text-gray-200 placeholder-gray-400 text-sm md:text-base" 
                  placeholder="john@company.com" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="contactCompany" className="block text-sm font-medium text-gray-200 mb-2">Company</label>
                <input 
                  type="text" 
                  id="contactCompany" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-tech-cyan-500/30 rounded-lg focus:outline-none focus:border-tech-cyan-400 text-gray-200 placeholder-gray-400 text-sm md:text-base" 
                  placeholder="Company Name" 
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="contactSubject" className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                <select 
                  id="contactSubject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-700/50 border border-tech-cyan-500/30 rounded-lg focus:outline-none focus:border-tech-cyan-400 text-gray-200 text-sm" 
                  required 
                  disabled={isSubmitting}
                >
                  <option value="">Select a subject</option>
                  <option value="demo">Request a Demo</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="compliance">Compliance Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea 
                  id="contactMessage" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-tech-cyan-500/30 rounded-lg focus:outline-none focus:border-tech-cyan-400 text-gray-200 placeholder-gray-400 text-sm md:text-base" 
                  placeholder="Tell us how we can help..." 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-[52px] bg-gradient-to-r from-diamond-blue-600 to-tech-cyan-600 text-white font-semibold px-5 py-2.5 hover:shadow-cube-glow transition-all flex items-center justify-center gap-2 text-sm shadow-cube disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane size={16} />
              </button>
            </form>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-tech-cyan-500/30 rounded-2xl p-5 md:p-8 tech-border">
              <h3 className="font-semibold text-xl sm:text-2xl mb-4 md:mb-5 text-gray-100">Contact Information</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-diamond-blue-500/30 to-tech-cyan-500/30 border border-tech-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-tech-cyan-400 text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 text-gray-100">Email</h4>
                    <a href="mailto:contact@juggervault.finance" className="text-sm text-tech-cyan-400 hover:text-tech-cyan-300 hover:underline break-all transition-colors">
                      contact@juggervault.finance
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-diamond-blue-600 to-tech-cyan-600 rounded-2xl p-5 md:p-8 text-white shadow-cube-glow">
              <h3 className="font-semibold text-lg sm:text-xl mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/#platforms" className="hover:underline flex items-center gap-2 text-sm md:text-base text-gray-100 hover:text-white transition-colors">
                    <FaPaperPlane size={14} />
                    Explore Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline flex items-center gap-2 text-sm md:text-base text-gray-100 hover:text-white transition-colors">
                    <FaPaperPlane size={14} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:underline flex items-center gap-2 text-sm md:text-base text-gray-100 hover:text-white transition-colors">
                    <FaPaperPlane size={14} />
                    Compliance
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

