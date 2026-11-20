import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users, Globe2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      year: "2021 - 2025",
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "Kongu Engineering College, Perundurai",
      score: "CGPA: 8.71 / 10",
      icon: <GraduationCap className="w-6 h-6 text-[#00a6f4]" />,
      desc: "Specialized in software algorithms, enterprise architectures, database systems, and object-oriented programming. Engaged in hackathons, project symposiums, and executive student leadership."
    },
    {
      year: "06/2020 - 04/2021",
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "Vellalar Matriculation Higher Secondary School, Thindal",
      score: "Score: 95%",
      icon: <BookOpen className="w-6 h-6 text-[#38bdf8]" />,
      desc: "Comprehensive coursework in Mathematics and Computer Science, establishing deep analytical and computational foundations."
    },
    {
      year: "06/2018 - 04/2019",
      degree: "Secondary School Leaving Certificate (SSLC - 10th)",
      institution: "Vellalar Matriculation Higher Secondary School, Thindal",
      score: "Score: 93.8%",
      icon: <Award className="w-6 h-6 text-[#0284c7]" />,
      desc: "Outstanding academic performance with sustained recognition in academic clubs and student activities."
    }
  ];

  const memberships = [
    { name: "Cloud Users Group", role: "Executive Member", desc: "Leading workshops and hands-on cloud architecture sessions." },
    { name: "Energy and Environment Club", role: "Executive Member", desc: "Organizing awareness drives and sustainable technology initiatives." },
    { name: "Computer Society of India (CSI)", role: "Member", desc: "Active member participating in technical forums and national symposiums." },
  ];

  const languages = [
    { lang: "English", prof: "Read, Write, Speak" },
    { lang: "Tamil", prof: "Read, Write, Speak" },
    { lang: "Arabic", prof: "Read, Write, Speak" },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">Education & Leadership</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            My academic credentials, university qualifications, and academic community leadership.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#00a6f4]/30 before:to-transparent mb-16">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center justify-between sm:justify-normal ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              } group`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#00a6f4]/50 bg-[#040919] text-white shadow-[0_0_15px_rgba(0,166,244,0.3)] z-10 group-hover:scale-110 group-hover:border-[#38bdf8] transition-transform duration-300">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="ml-14 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] glass-card p-6 sm:p-7 group-hover:border-[#00a6f4]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-cyan-400 bg-[#00a6f4]/10 border border-[#00a6f4]/30 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  <span className="text-xs font-extrabold text-white bg-gradient-to-r from-[#00a6f4] to-[#0284c7] px-3 py-1 rounded-md shadow-[0_0_10px_rgba(0,166,244,0.3)]">
                    {item.score}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg sm:text-xl mb-1 group-hover:text-[#38bdf8] transition-colors">
                  {item.degree}
                </h3>
                <div className="text-slate-400 font-medium text-sm mb-3">
                  {item.institution}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Memberships & Languages Grid Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Memberships */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#00a6f4]/20">
              <div className="p-2.5 rounded-xl bg-[#040919] border border-[#00a6f4]/30 text-[#00a6f4]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Leadership</h3>
                <p className="text-xs text-slate-400">Executive Memberships & Clubs</p>
              </div>
            </div>

            <div className="space-y-4">
              {memberships.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#040919]/70 border border-[#00a6f4]/15 hover:border-[#00a6f4]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white">{m.name}</h4>
                    <span className="text-[11px] font-semibold text-cyan-300 bg-[#00a6f4]/10 px-2 py-0.5 rounded border border-[#00a6f4]/25">
                      {m.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#00a6f4]/20">
              <div className="p-2.5 rounded-xl bg-[#040919] border border-[#00a6f4]/30 text-[#38bdf8]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Languages Known</h3>
                <p className="text-xs text-slate-400">Multilingual Fluency</p>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((l, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#040919]/70 border border-[#00a6f4]/15 flex items-center justify-between hover:border-[#00a6f4]/40 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-white">{l.lang}</h4>
                    <p className="text-xs text-slate-400">{l.prof}</p>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 bg-[#00a6f4]/15 px-3 py-1 rounded-full border border-[#00a6f4]/30">
                    Fluent (R, W, S)
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;