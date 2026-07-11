import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    your_name: '',
    your_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailTemplateParams = {
      your_name: formData.your_name,
      your_email: formData.your_email, 
      message: formData.message,
      from_email: formData.your_email, 
    };
  
    emailjs
      .send(
        'service_583ii9c', // Retained existing keys
        'template_s8c8eoj',
        emailTemplateParams,
        '7u7x6KmkbzUYjv6nf'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setSubmitStatus('success');
          setIsSubmitting(false);
          setFormData({ your_name: '', your_email: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('Error sending email:', error);
          setSubmitStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 glass-card p-8 md:p-12">

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Fill out the form and I will get back to you as soon as possible.
              </p>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent">
                    <Mail size={20} />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:asmamalica07@gmail.com" className="hover:text-accent transition-colors">
                        asmamalica07@gmail.com
                    </a>
                </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Social Profiles</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/Asma-malica/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <span className="text-xs font-bold">IN</span>
                </a>
                <a href="https://github.com/Asma-malica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <span className="text-xs font-bold">GH</span>
                </a>
                <a href="https://twitter.com/asma_malica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <span className="text-xs font-bold">TW</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="your_name" className="text-sm font-medium text-gray-300 block">Your Name</label>
                <input
                  type="text"
                  id="your_name"
                  name="your_name"
                  value={formData.your_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="your_email" className="text-sm font-medium text-gray-300 block">Your Email</label>
                <input
                  type="email"
                  id="your_email"
                  name="your_email"
                  value={formData.your_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center gap-2 text-green-600">
                    <CheckCircle size={20} />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
