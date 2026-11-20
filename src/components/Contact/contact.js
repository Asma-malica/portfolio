import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Copy, Check, Calendar, ExternalLink, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    your_name: '',
    your_email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = "asmamalica07@gmail.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.your_name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Asma,\n\n${formData.message || ''}\n\nBest regards,\n${formData.your_name || ''}\nEmail: ${formData.your_email || ''}`
    );
    return `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // Comprehensive parameter aliases so whatever field names the EmailJS template expects will match
    const emailTemplateParams = {
      name: formData.your_name,
      user_name: formData.your_name,
      from_name: formData.your_name,
      your_name: formData.your_name,

      email: formData.your_email,
      user_email: formData.your_email,
      from_email: formData.your_email,
      your_email: formData.your_email,
      reply_to: formData.your_email,

      subject: formData.subject || 'Portfolio Contact Message',
      message: formData.message,
      to_name: 'Asma Malica',
    };

    try {
      // Use @emailjs/browser with configured keys
      const serviceId = 'service_583ii9c';
      const templateId = 'template_s8c8eoj';
      const publicKey = '7u7x6KmkbzUYjv6nf';

      await emailjs.send(serviceId, templateId, emailTemplateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ your_name: '', your_email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error?.text || error?.message || 'Email delivery service is currently unavailable. Please use the direct mail or Topmate option below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background cyan glows */}
      <div className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] bg-[#00a6f4]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#0284c7]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Have an enterprise SAP requirement, full stack opportunity, or mentorship session in mind? Reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Topmate Container */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Topmate Highlight Card */}
            <div className="glass-card p-6 sm:p-7 border-[#00a6f4]/40 bg-gradient-to-br from-[#081226] via-[#040919] to-[#081226] relative overflow-hidden shadow-[0_0_25px_rgba(0,166,244,0.15)] group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a6f4]/15 rounded-bl-full pointer-events-none group-hover:bg-[#00a6f4]/25 transition-colors"></div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#00a6f4]/20 border border-[#00a6f4]/40 text-cyan-300">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">1:1 Mentorship & Consulting</span>
                  <h3 className="text-lg font-bold text-white">Book a Call on Topmate</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Looking for guidance on SAP ABAP, S/4HANA transitions, full stack career roadmaps, or technical consultations? Book an instant 1-on-1 session directly.
              </p>

              <a
                href="https://topmate.io/asma_malica_j/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white hover:from-[#38bdf8] hover:to-[#00a6f4] shadow-[0_0_15px_rgba(0,166,244,0.3)] transition-all duration-300"
              >
                <span>Schedule a Session on Topmate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact Card */}
            <div className="glass-card p-6 sm:p-7 space-y-5">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-[#00a6f4]/15">
                Contact Channels
              </h3>

              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#040919]/70 border border-[#00a6f4]/20">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#00a6f4]/10 border border-[#00a6f4]/25 flex items-center justify-center text-[#00a6f4] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-slate-400 font-medium">Direct Email</p>
                    <a href={`mailto:${myEmail}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 truncate block transition-colors">
                      {myEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#00a6f4]/10 border border-[#00a6f4]/25 text-slate-300 hover:text-white hover:bg-[#00a6f4]/20 transition-all shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-cyan-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#040919]/70 border border-[#00a6f4]/20">
                <div className="w-10 h-10 rounded-lg bg-[#00a6f4]/10 border border-[#00a6f4]/25 flex items-center justify-center text-[#00a6f4] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    166, Valayakkara Street, Erode - 1, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Profiles Row */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Professional Profiles
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://www.linkedin.com/in/Asma-malica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#040919] border border-[#00a6f4]/20 text-slate-300 hover:text-white hover:border-[#00a6f4] flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>

                  <a
                    href="https://github.com/Asma-malica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#040919] border border-[#00a6f4]/20 text-slate-300 hover:text-white hover:border-[#00a6f4] flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>

                  <a
                    href="https://leetcode.com/u/Asma-malica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#040919] border border-[#00a6f4]/20 text-slate-300 hover:text-white hover:border-[#00a6f4] flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">LeetCode</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>

                  <a
                    href="https://topmate.io/asma_malica_j/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#040919] border border-[#00a6f4]/20 text-cyan-300 hover:text-white hover:border-[#00a6f4] flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">Topmate 1:1</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Direct Fallback Container */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Messages are routed directly to <span className="text-cyan-300 font-medium">{myEmail}</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="your_name" className="text-xs font-semibold text-slate-300 block">
                    Your Name <span className="text-[#00a6f4]">*</span>
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    name="your_name"
                    value={formData.your_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#040919] border border-[#00a6f4]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00a6f4]/50 focus:border-[#00a6f4] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="your_email" className="text-xs font-semibold text-slate-300 block">
                    Your Email <span className="text-[#00a6f4]">*</span>
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    name="your_email"
                    value={formData.your_email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#040919] border border-[#00a6f4]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00a6f4]/50 focus:border-[#00a6f4] transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-300 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#040919] border border-[#00a6f4]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00a6f4]/50 focus:border-[#00a6f4] transition-all"
                  placeholder="e.g. SAP Consulting / Project Collaboration"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 block">
                  Message <span className="text-[#00a6f4]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#040919] border border-[#00a6f4]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00a6f4]/50 focus:border-[#00a6f4] transition-all resize-none"
                  placeholder="Share details of your message or project..."
                ></textarea>
              </div>

              {/* Submit Button & Direct Mail Alternative */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white font-bold py-3.5 px-6 rounded-xl hover:from-[#38bdf8] hover:to-[#00a6f4] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,166,244,0.3)] hover:shadow-[0_0_25px_rgba(0,166,244,0.5)] group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 text-sm">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Delivering Message...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center gap-2 text-sm text-white font-bold">
                      <CheckCircle2 size={18} className="text-white" />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-sm">
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </button>

                {/* Instant Mail Client Fallback Button */}
                <a
                  href={generateMailtoLink()}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00a6f4]/40 hover:bg-[#00a6f4]/10 text-xs text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Mail size={14} className="text-[#00a6f4]" />
                  <span>Prefer sending directly from your email app? Click here</span>
                </a>
              </div>

              {/* Status Notifications */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
                  <span>Thank you! Your message has been dispatched to Asma Malica. I will respond promptly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="shrink-0 text-rose-400" />
                    <span>Email service alert: {errorMessage}</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center gap-1.5 font-bold text-white underline hover:text-cyan-300"
                    >
                      Click here to send immediately via your default mail application
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;