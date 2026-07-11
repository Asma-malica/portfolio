import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "SAP Consultant",
      company: "Kaar Technologies",
      period: "Jan 2025 - Present",
      isCurrent: true,
      desc: [
        "SAP consulting and enterprise solution implementation.",
        "Working with SAP technologies for enterprise clients to optimize business processes.",
        "Requirement analysis and comprehensive solution design.",
        "Integration and customization of SAP modules."
      ]
    },
    {
      role: "Software Intern",
      company: "The Calibrant",
      period: "Sep 2024 - Dec 2024",
      isCurrent: false,
      desc: [
        "Gained hands-on experience in software development and project lifecycle.",
        "Assisted in developing and testing web applications.",
        "Collaborated with senior developers to troubleshoot and resolve issues.",
        "Participated in daily stand-ups and code review sessions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Experience
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-0 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-8 ml-4 md:ml-0">
              <div className={`absolute w-4 h-4 rounded-full -left-[9px] md:-left-[9px] top-1.5 ${exp.isCurrent ? 'bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-gray-600'}`}></div>
              <div className="glass-card p-6 md:p-8 hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-secondary">{exp.company}</h4>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full w-fit mt-2 md:mt-0 ${exp.isCurrent ? 'text-accent bg-accent/10' : 'text-gray-400 bg-white/5'}`}>
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4 marker:text-accent">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
