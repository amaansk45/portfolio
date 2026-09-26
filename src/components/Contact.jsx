import React, { useState } from 'react';
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaCopy,
  FaTerminal,
  FaCircleCheck,
} from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please add a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please type a brief message or project inquiry.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Success simulation
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FaTerminal className="w-3 h-3" />
            <span>07 // Contact & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Looking for a dedicated Python Full Stack Developer or Django engineer? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800/80">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I am actively reviewing opportunities for software engineering roles, internships, and collaborative development.
              </p>

              <div className="space-y-4">
                
                {/* Email Box with Copy Button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center gap-1">
                        <FaCheck className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <FaCopy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <FaLocationDot className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  Professional Profiles:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below and I will respond to your inquiry promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center gap-3 animate-fadeIn">
                  <FaCircleCheck className="w-5 h-5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Thank you for reaching out!</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Your message has been received. I look forward to connecting with you.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/80 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                        formErrors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700/80'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-rose-500 font-medium">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/80 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                        formErrors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700/80'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-[11px] text-rose-500 font-medium">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Python / Django Developer Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/80 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                      formErrors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700/80'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-[11px] text-rose-500 font-medium">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, project specifications, or job role details..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/80 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors resize-none ${
                      formErrors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700/80'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11px] text-rose-500 font-medium">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
