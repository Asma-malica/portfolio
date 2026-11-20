import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  Code2, 
  Globe2, 
  Database, 
  Wrench, 
  BrainCircuit, 
  CheckCircle,
  Sparkles
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "sap",
      title: "SAP & Enterprise Architecture",
      subtitle: "Current Core Specialization",
      icon: <Layers className="w-6 h-6 text-[#00a6f4]" />,
      featured: true,
      skills: [
        { name: "SAP ABAP", level: "Expert" },
        { name: "CDS Views", level: "Advanced" },
        { name: "RAP (RESTful App Programming)", level: "Advanced" },
        { name: "OData Services", level: "Advanced" },
        { name: "SAP Fiori / UI5", level: "Proficient" },
        { name: "WRICEF Solutions", level: "Expert" },
        { name: "OOP in ABAP", level: "Advanced" },
        { name: "SAP MM (Procurement)", level: "Working Knowledge" },
        { name: "SAP FI (Financial)", level: "Working Knowledge" },
        { name: "SAP S/4HANA", level: "Advanced" }
      ]
    },
    {
      id: "programming",
      title: "Programming Languages",
      subtitle: "Core Coding & Logic",
      icon: <Code2 className="w-6 h-6 text-[#38bdf8]" />,
      skills: [
        { name: "ABAP", level: "Enterprise" },
        { name: "Java", level: "Proficient" },
        { name: "C Language", level: "Proficient" },
        { name: "Python", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Proficient" }
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack & Web Development",
      subtitle: "Front & Backend Frameworks",
      icon: <Globe2 className="w-6 h-6 text-[#0284c7]" />,
      skills: [
        { name: "Node.js", level: "Full Stack" },
        { name: "Express.js", level: "REST APIs" },
        { name: "MongoDB", level: "NoSQL" },
        { name: "EJS Templates", level: "SSR" },
        { name: "React JS", level: "Components" },
        { name: "HTML5 / CSS3", level: "Responsive" },
        { name: "Tailwind CSS", level: "Styling" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Development IDEs",
      subtitle: "Enterprise & Design Platforms",
      icon: <Wrench className="w-6 h-6 text-cyan-300" />,
      skills: [
        { name: "Eclipse (ADT)", level: "Primary IDE" },
        { name: "SAP GUI", level: "Core Tool" },
        { name: "SAP Business Application Studio", level: "Cloud IDE" },
        { name: "SAP Web IDE", level: "Cloud Tool" },
        { name: "Git & GitHub", level: "Version Control" },
        { name: "Figma", level: "UI/UX Prototyping" },
        { name: "Adobe Illustrator", level: "Vector Graphics" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Cloud Data",
      subtitle: "Data Management & Queries",
      icon: <Database className="w-6 h-6 text-[#00a6f4]" />,
      skills: [
        { name: "SAP HANA DB", level: "Enterprise In-Memory" },
        { name: "MongoDB", level: "Document Store" },
        { name: "MySQL", level: "Relational Queries" },
        { name: "REST APIs", level: "Integration" }
      ]
    },
    {
      id: "ai",
      title: "Machine Learning & AI",
      subtitle: "Hackathons & Smart Systems",
      icon: <BrainCircuit className="w-6 h-6 text-[#38bdf8]" />,
      skills: [
        { name: "Python ML", level: "Applied" },
        { name: "Streamlit", level: "ML Web Apps" },
        { name: "Pandas & NumPy", level: "Data Analytics" },
        { name: "Scikit-Learn", level: "Algorithms" }
      ]
    }
  ];

  const filteredCategories = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
            Technical Proficiency
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Organized across SAP enterprise architecture, programming paradigms, modern full-stack development, and design tools.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]"
                : "glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40"
            }`}
          >
            All Skills
          </button>

          <button
            onClick={() => setActiveCategory("sap")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              activeCategory === "sap"
                ? "bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]"
                : "glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>SAP & Enterprise (Current Status)</span>
          </button>

          <button
            onClick={() => setActiveCategory("programming")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === "programming"
                ? "bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]"
                : "glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40"
            }`}
          >
            Programming
          </button>

          <button
            onClick={() => setActiveCategory("fullstack")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === "fullstack"
                ? "bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]"
                : "glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40"
            }`}
          >
            Full Stack & Web
          </button>

          <button
            onClick={() => setActiveCategory("tools")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === "tools"
                ? "bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.35)]"
                : "glass text-slate-300 hover:text-white hover:border-[#00a6f4]/40"
            }`}
          >
            Tools & IDEs
          </button>
        </div>

        {/* Skill Containers Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                layout
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-6 relative overflow-hidden group flex flex-col justify-between ${
                  category.featured 
                    ? "border-[#00a6f4]/40 ring-1 ring-[#00a6f4]/20 shadow-[0_0_25px_rgba(0,166,244,0.12)]" 
                    : "border-[#00a6f4]/15"
                }`}
              >
                {/* Ambient glow in card corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a6f4]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00a6f4]/20 transition-colors"></div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#00a6f4]/15">
                    <div className="p-3 bg-[#040919] rounded-xl border border-[#00a6f4]/25 shadow-[0_0_10px_rgba(0,166,244,0.15)] group-hover:scale-105 transition-transform">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{category.subtitle}</p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#040919]/80 border border-[#00a6f4]/20 flex items-center gap-2 group-hover:border-[#00a6f4]/40 transition-colors"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#00a6f4]" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {category.featured && (
                  <div className="mt-4 pt-3 border-t border-[#00a6f4]/20 flex items-center justify-between">
                    <span className="text-[11px] text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00a6f4] animate-ping"></span>
                      Primary Professional Focus
                    </span>
                    <span className="text-xs text-slate-400">KaarTech Enterprise</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;