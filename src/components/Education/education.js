import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      year: "2021-2025",
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Kongu Engineering College, Perundurai",
      score: "CGPA: 8.8",
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      desc: "Specialized in software engineering, algorithms, and web technologies. Actively participated in hackathons and technical symposiums."
    },
    {
      year: "2018-2020",
      degree: "Higher Secondary Education",
      institution: "Vellalar Matriculation Higher Secondary School, Thindal, Erode",
      score: "Percentage: 95%",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      desc: "Focused on Computer Science and Mathematics, building a strong analytical foundation."
    },
    {
      year: "2016-2018",
      degree: "SSLC",
      institution: "Vellalar Matriculation Higher Secondary School, Thindal, Erode",
      score: "Percentage: 93.8%",
      icon: <Award className="w-6 h-6 text-green-400" />,
      desc: "Consistently demonstrated academic excellence and leadership in school activities."
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey and foundational knowledge.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-surface text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-white text-lg">{item.degree}</h3>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                        {item.year}
                    </span>
                </div>
                <div className="text-secondary font-medium mb-3">{item.institution}</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-300">
                  {item.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
