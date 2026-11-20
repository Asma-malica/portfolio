import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const experiences = [
    {
      id: 'kaartech',
      role: "SAP ABAP Analyst",
      company: "KaarTech (Kaar Technologies)",
      location: "Chennai / Hybrid",
      period: "01/2025 - Present",
      isCurrent: true,
      tag: "Current Status",
      featuredProject: "Royal Commission for Makkah City and Holy Sites (RCMC)",
      skills: ["SAP ABAP", "SAP S/4HANA", "CDS Views", "RAP", "OData Services", "SAP Fiori / UI5", "WRICEF", "MM (Procurement)", "FI (Finance)", "Eclipse (ADT)"],
      desc: [
        "Working on the prestigious Royal Commission for Makkah City and Holy Sites (RCMC) enterprise project as an SAP ABAP Analyst.",
        "Engineered end-to-end SAP ABAP solutions encompassing Reports, Interfaces, Enhancements, Forms, and Workflows (WRICEF).",
        "Designed and developed high-performance CDS Views, OData Services, and RAP (RESTful Application Programming) models on SAP S/4HANA.",
        "Created custom enterprise programs and business logic for Procurement (MM) and Finance (FI) business operations.",
        "Built specialized CDS Views for Supplier Open Item, AP Settlement, and Purchase Order analytics reports.",
        "Developed and optimized OData services and RAP applications powering intuitive SAP Fiori user applications."
      ]
    },
    {
      id: 'calibraint',
      role: "Full Stack Developer",
      company: "Calibraint Technologies",
      location: "Chennai, India",
      period: "06/2024 - 12/2024",
      isCurrent: false,
      tag: "Software Engineering",
      featuredProject: "Enterprise Movie Booking System",
      skills: ["Node.js", "Express.js", "MongoDB", "EJS Templates", "REST APIs", "User Authentication", "JavaScript", "HTML/CSS"],
      desc: [
        "Collaborated on a high-traffic Movie Booking System project, leveraging EJS, Node.js, and MongoDB to deliver a seamless user experience.",
        "Designed dynamic, responsive, and mobile-first views using EJS templates, ensuring scalability and user-friendly interfaces.",
        "Implemented a robust backend server with Node.js and Express, architecting secure RESTful APIs for ticket booking, seat reservation, and user authentication.",
        "Integrated MongoDB database schemas and indexing to efficiently handle user profiles, movie catalog data, and high-frequency booking transactions with optimal performance."
      ]
    }
  ];

  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.id === activeTab);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background cyan ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00a6f4]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
            Career Timeline & Practical Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Detailed breakdown of my current role at KaarTech and software development engineering at Calibraint.
          </p>
        </div>

        {/* Tab Filters / Containers */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Work Experience ({experiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('kaartech')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'kaartech'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a6f4]"></span>
            </span>
            <span>KaarTech (Current Status)</span>
          </button>

          <button
            onClick={() => setActiveTab('calibraint')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'calibraint'
                ? 'bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]'
                : 'glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Calibraint Technologies</span>
          </button>
        </div>

        {/* Experience Cards / Containers */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden ${
                  exp.isCurrent
                    ? 'border-[#00a6f4]/40 shadow-[0_0_30px_rgba(0,166,244,0.15)] ring-1 ring-[#00a6f4]/20'
                    : 'border-[#00a6f4]/15'
                }`}
              >
                {/* Background ambient corner flare */}
                <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${exp.isCurrent ? 'bg-[#00a6f4]/15' : 'bg-[#0284c7]/10'}`}></div>

                {/* Header Container */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#00a6f4]/15">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00a6f4]/20 text-cyan-300 border border-[#00a6f4]/50 shadow-[0_0_10px_rgba(0,166,244,0.3)]">
                          <span className="w-2 h-2 rounded-full bg-[#00a6f4] animate-ping"></span>
                          CURRENT ACTIVE STATUS
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                          COMPLETED
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm sm:text-base">
                      <span className="flex items-center gap-1.5 font-bold text-[#38bdf8]">
                        <Building2 className="w-4 h-4 text-[#00a6f4]" />
                        {exp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlighted Project Badge */}
                  <div className="p-3.5 rounded-xl bg-[#040919] border border-[#00a6f4]/30 lg:text-right shrink-0">
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                      Key Client / Project
                    </span>
                    <span className="text-sm font-bold text-white flex items-center lg:justify-end gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#00a6f4]" />
                      {exp.featuredProject}
                    </span>
                  </div>
                </div>

                {/* Key Achievements & Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00a6f4]" />
                    Core Deliverables & Contributions
                  </h4>
                  <ul className="grid gap-3">
                    {exp.desc.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#00a6f4] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Arsenal Tags */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Technologies & Modules Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#00a6f4]/10 text-cyan-200 border border-[#00a6f4]/25 hover:border-[#00a6f4]/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;