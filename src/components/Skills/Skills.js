import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, PenTool, Cpu, Terminal, } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["C", "Python", "Java"]
    },
    {
      title: "Web Development",
      icon: <Layout className="w-6 h-6 text-green-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React JS"]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      skills: ["Numpy", "Pandas", "Seaborn"]
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="w-6 h-6 text-pink-400" />,
      skills: ["Figma", "Adobe Illustrator", "Design Principles"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-yellow-400" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & Version Control",
      icon: <Terminal className="w-6 h-6 text-gray-400" />,
      skills: ["Git", "GitHub"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit that enables me to build end-to-end solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
