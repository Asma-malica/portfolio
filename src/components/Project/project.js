import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder, Layers, Sparkles, Building2 } from 'lucide-react';
import { GithubIcon } from '../Common/BrandIcons';

const projects = [
  {
    title: 'RCMC Enterprise Solution (KaarTech)',
    subtitle: 'Current Enterprise Work',
    category: 'enterprise',
    isCurrent: true,
    description: 'Designed and implemented SAP ABAP WRICEF objects, CDS Views, RAP applications, and OData services for Royal Commission for Makkah City and Holy Sites (RCMC). Engineered custom MM & FI business logic for Supplier Open Items, AP Settlement, and PO analytics.',
    githubLink: 'https://www.linkedin.com/in/Asma-malica/',
    tags: ['SAP ABAP', 'S/4HANA', 'CDS Views', 'RAP', 'OData', 'SAP Fiori', 'MM & FI']
  },
  {
    title: 'Movie Booking System (Calibraint)',
    subtitle: 'Full Stack Engineering',
    category: 'web',
    isCurrent: false,
    description: 'Collaborative Movie Booking System built with Node.js, Express, EJS, and MongoDB. Handled dynamic seat selection, user authentication, high-throughput RESTful ticket booking APIs, and optimized MongoDB data storage.',
    githubLink: 'https://github.com/Asma-malica',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'REST APIs', 'Auth']
  },
  {
    title: 'Spam Alert System',
    subtitle: 'Kavach Hackathon',
    category: 'systems',
    isCurrent: false,
    description: 'Machine Learning-powered Spam Alert System developed during the nationwide Kavach Hackathon. Built with Python and Scikit-Learn algorithms, featuring an interactive web interface in Streamlit.',
    githubLink: 'https://github.com/Asma-malica/Spam-Classifier',
    tags: ['Machine Learning', 'Python', 'Streamlit', 'NLP']
  },
  {
    title: 'Todo List App',
    subtitle: 'Dynamic Task Platform',
    category: 'web',
    isCurrent: false,
    description: 'A feature-rich TodoList application built using React, emphasizing a responsive design to ensure optimal user experience across various devices. The application showcases dynamic state management and persistent tasks.',
    githubLink: 'https://github.com/Asma-malica/TodoList',
    tags: ['React', 'Responsive Design', 'State Management']
  },
  {
    title: 'E-Commerce Website',
    subtitle: 'Online Retail Storefront',
    category: 'web',
    isCurrent: false,
    description: 'Responsive e-commerce website with curated product collections, user-friendly navigation, seamless catalog browsing, and a sleek design for an optimal shopping experience.',
    githubLink: 'https://github.com/Asma-malica/E-CommerceWebsite',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive UI']
  },
  {
    title: "Banker's Algorithm Simulator",
    subtitle: 'Operating System Simulation',
    category: 'systems',
    isCurrent: false,
    description: 'Simulation of the classic Banker\'s algorithm for resource allocation in an operating system, providing a visual understanding of deadlock avoidance and safe process sequences.',
    githubLink: 'https://github.com/Asma-malica/Bankers-Algorithm',
    tags: ['Python', 'HTML/CSS', 'OS Concepts']
  },
  {
    title: 'Random Password Generator',
    subtitle: 'Desktop Security Tool',
    category: 'systems',
    isCurrent: false,
    description: 'A Java desktop application that generates highly secure, cryptographically random passwords with customizable parameters to enhance digital credential safety.',
    githubLink: 'https://github.com/Asma-malica/Password-Generator-using-JavaFX',
    tags: ['Java', 'JavaFX', 'Security']
  },
  {
    title: 'Memory Game',
    subtitle: 'Interactive Frontend Game',
    category: 'web',
    isCurrent: false,
    description: 'An interactive web-based memory matching game where users attempt to match pairs of cards featuring various icons with responsive card flips and CSS animations.',
    githubLink: 'https://github.com/Asma-malica/Game/tree/master/Memory_Game',
    tags: ['JavaScript', 'DOM Manipulation', 'CSS Animations']
  },
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
            Featured Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
            Projects & Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive showcase encompassing my enterprise SAP deliverables, full-stack applications, and academic software engineering.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('enterprise')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              activeFilter === 'enterprise'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Enterprise & SAP (Current Status)</span>
          </button>

          <button
            onClick={() => setActiveFilter('web')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeFilter === 'web'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            Full Stack & Web
          </button>

          <button
            onClick={() => setActiveFilter('systems')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeFilter === 'systems'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            ML, Systems & Security
          </button>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card group flex flex-col h-full relative overflow-hidden ${
                  project.isCurrent
                    ? 'border-[#00a6f4]/40 ring-1 ring-[#00a6f4]/25 shadow-[0_0_25px_rgba(0,166,244,0.15)]'
                    : 'border-[#00a6f4]/15'
                }`}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a6f4]/10 via-[#0284c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="p-6 sm:p-8 flex flex-col h-full relative z-10 justify-between">
                  <div>
                    {/* Header: Folder Icon + External Links */}
                    <div className="flex justify-between items-start mb-5">
                      <div className="p-3 bg-[#040919] rounded-xl border border-[#00a6f4]/25 shadow-[0_0_10px_rgba(0,166,244,0.15)]">
                        {project.isCurrent ? (
                          <Building2 className="w-6 h-6 text-[#00a6f4]" />
                        ) : (
                          <Folder className="w-6 h-6 text-[#00a6f4]" />
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.isCurrent && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#00a6f4]/20 text-cyan-300 border border-[#00a6f4]/40">
                            Active Role
                          </span>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-[#040919] border border-[#00a6f4]/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_10px_rgba(0,166,244,0.3)] transition-all"
                          aria-label={`View ${project.title}`}
                        >
                          {project.isCurrent ? (
                            <ExternalLink className="w-4 h-4" />
                          ) : (
                            <GithubIcon className="w-4 h-4" />
                          )}
                        </a>
                      </div>
                    </div>

                    {/* Subtitle & Title */}
                    <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#00a6f4]/15">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold text-cyan-200 bg-[#00a6f4]/10 border border-[#00a6f4]/20 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Asma-malica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#081226] border border-[#00a6f4]/30 text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_15px_rgba(0,166,244,0.25)] transition-all"
          >
            <GithubIcon className="w-4 h-4 text-[#00a6f4]" />
            <span>Explore all repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;