import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, BrainCircuit } from 'lucide-react';

const About = () => {
    const strengths = [
        {
            icon: <Code2 className="w-8 h-8 text-blue-400" />,
            title: "Web Development",
            desc: "Building responsive, performant, and scalable applications."
        },
        {
            icon: <Palette className="w-8 h-8 text-purple-400" />,
            title: "UI/UX Design",
            desc: "Crafting intuitive and visually stunning user interfaces."
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-green-400" />,
            title: "Machine Learning",
            desc: "Exploring AI to predict behavior and personalize experiences."
        }
    ];

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        I am a tech enthusiast merging creativity with engineering to build seamless digital experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            My exploration into technology spans across multiple disciplines. I started with a passion for beautiful design, which naturally evolved into front-end development and a successful internship at The Calibrant.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Now, as a recent Computer Science graduate, I am working as an SAP Consultant at Kaar Technologies. I focus on integrating intelligent algorithms with exceptional user interfaces, striving to stay at the forefront of design trends while employing innovative, data-driven enterprise solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        {strengths.map((item, index) => (
                            <div key={index} className="glass p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors border border-white/5">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
