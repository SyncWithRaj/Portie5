"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Icon Components for Values ---
const StudentIcon = () => <svg className="w-8 h-8 mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v3.422a12.078 12.078 0 01-6.16-3.422" /></svg>;
const InnovationIcon = () => <svg className="w-8 h-8 mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const AccessibilityIcon = () => <svg className="w-8 h-8 mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>;

// --- Animation Variants ---
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// --- Timeline Component ---
const TimelineItem = ({ children, last = false }) => (
    <div className="relative pl-8 md:pl-12 py-6">
        <motion.div
            className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
        />
        {!last && <div className="absolute left-0 top-6 h-full w-0.5 bg-indigo-500/30" />}
        <motion.div
            className="absolute -left-[9px] md:-left-[11px] top-[24px] w-5 h-5 md:w-6 md:h-6 bg-gray-900 border-2 border-indigo-500 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={itemVariants}
        >
            {children}
        </motion.div>
    </div>
);

export default function About() {
    return (
        <div className="font-poppins relative min-h-screen bg-gray-900 text-white p-6 sm:p-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
            </div>

            <main className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <motion.section 
                    className="text-center py-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent" variants={itemVariants}>
                        Our Story
                    </motion.h1>
                    <motion.p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-gray-400" variants={itemVariants}>
                        We believe every student has a unique story of skills, projects, and achievements. Our platform was born from a simple idea: to provide the tools to tell that story beautifully and effectively.
                    </motion.p>
                </motion.section>

                {/* Timeline Section */}
                <div className="max-w-3xl mx-auto">
                    <TimelineItem>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Our Mission</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <p className="text-gray-300 text-lg flex-1">
                                To provide students a platform where they can easily build, customize, and share their digital portfolios. We aim to bridge the gap between talent and opportunity by showcasing skills effectively.
                            </p>
                            <Image src="/about-mission.jpg" alt="Our Mission" width={250} height={200} className="rounded-2xl shadow-lg flex-shrink-0" />
                        </div>
                    </TimelineItem>

                    <TimelineItem>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Our Vision</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                           <Image src="/about-vision.jpg" alt="Our Vision" width={250} height={200} className="rounded-2xl shadow-lg flex-shrink-0 md:order-last" />
                            <p className="text-gray-300 text-lg flex-1">
                                To be the go-to platform for students worldwide to create and maintain professional portfolios. We envision a future where every student can showcase their skills and achievements without barriers.
                            </p>
                        </div>
                    </TimelineItem>

                    <TimelineItem last={true}>
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: <StudentIcon />, title: "Student-Centric", desc: "Our focus is always on creating value and exceptional experiences for students." },
                                { icon: <InnovationIcon />, title: "Innovation", desc: "We continuously innovate to make portfolio building smarter and more intuitive." },
                                { icon: <AccessibilityIcon />, title: "Accessibility", desc: "We are committed to being inclusive and accessible for all students." },
                            ].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    className="p-6 bg-gray-800/50 rounded-2xl ring-1 ring-inset ring-gray-700 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    {value.icon}
                                    <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                                    <p className="text-gray-400 mt-2 text-sm">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </TimelineItem>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full mt-24 py-6 border-t border-gray-800 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Student Portfolio Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}