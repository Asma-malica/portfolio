import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch as GithubIcon, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Todo List',
    description: 'A feature-rich TodoList app using React, emphasizing a responsive design to ensure optimal user experience across various devices. The application showcases dynamic task management.',
    githubLink: 'https://github.com/Asma-malica/TodoList',
    tags: ['React', 'Responsive Design', 'State Management']
  },
  {
    title: 'Spam Alert System',
    description: 'Machine Learning-powered Spam Alert System designed during the Kavach Hackathon, featuring a user-friendly interface created with Streamlit for seamless interaction.',
    githubLink: 'https://github.com/Asma-malica/Spam-Classifier',
    tags: ['Machine Learning', 'Python', 'Streamlit']
  },
  {
    title: 'E-Commerce Website',
    description: 'Responsive e-commerce website with curated collections, user-friendly navigation, and a sleek design for an optimal shopping experience.',
    githubLink: 'https://github.com/Asma-malica/E-CommerceWebsite',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive UI']
  },
  {
    title: "Banker's Algorithm",
    description: 'A simulation of the Banker\'s algorithm for resource allocation in an operating system, providing a visual understanding of deadlock avoidance.',
    githubLink: 'https://github.com/Asma-malica/Bankers-Algorithm',
    tags: ['Python', 'HTML/CSS', 'OS Concepts']
  },
  {
    title: 'Random Password Generator',
    description: 'A desktop application that generates highly secure random passwords with customizable parameters to enhance digital security.',
    githubLink: 'https://github.com/Asma-malica/Password-Generator-using-JavaFX',
    tags: ['Java', 'JavaFX', 'Security']
  },
  {
    title: 'Memory Game',
    description: 'An interactive web-based memory matching game where users attempt to match pairs of cards featuring various icons.',
    githubLink: 'https://github.com/Asma-malica/Game/tree/master/Memory_Game',
    tags: ['JavaScript', 'DOM Manipulation', 'CSS Animations']
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work spanning web development, machine learning, and software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card group flex flex-col h-full hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-8 flex flex-col h-full relative overflow-hidden">
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <Folder className="w-10 h-10 text-accent" strokeWidth={1.5} />
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
        >
            <a
                href="https://github.com/Asma-malica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white hover:underline transition-colors"
            >
                View more on GitHub <ExternalLink className="w-4 h-4" />
            </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
