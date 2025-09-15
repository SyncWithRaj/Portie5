"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon Components ---
const CheckIcon = () => <svg className="w-5 h-5 mr-2 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>;
const AlertIcon = () => <svg className="w-5 h-5 mr-2 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm0-8c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1z"></path></svg>;
const Spinner = () => <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>;

// --- Template Data ---
const templates = [
    { id: 1, name: "Clean & Light Portfolio", key: 'one' },
    { id: 2, name: "Modern Tech Portfolio", key: 'two' },
    { id: 3, name: "Cybersecurity Theme", key: 'three' },
    { id: 4, name: "AI-Themed Portfolio", key: 'four' },
    { id: 5, name: "Full-Stack Developer", key: 'five' },
    { id: 6, name: "Elegant Dark Portfolio", key: 'six' },
    { id: 7, name: "Academic Profile", key: 'seven' },
    { id: 8, name: "Design Portfolio", key: 'eight' },
    { id: 9, name: "Startup Founder", key: 'nine' },
];

// --- Animation Variants ---
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function TemplatesPage() {
    const { user } = useUser();
    const router = useRouter();
    const [loadingTemplate, setLoadingTemplate] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSelectTemplate = async (templateKey) => {
        if (!user) {
            setErrorMessage("Please sign in to select a template.");
            return;
        }
        setLoadingTemplate(templateKey);
        setSuccessMessage('');
        setErrorMessage('');
        try {
            const response = await fetch('/api/user/select-template', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ templateKey }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'An unknown error occurred.');
            setSuccessMessage("Template selected successfully! Your portfolio is now live.");
            router.refresh();
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setLoadingTemplate(null);
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-900 text-white px-6 sm:px-12 py-30 overflow-hidden -mt-18 ">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent mb-4 pb-2"
                        variants={itemVariants}
                    >
                        Choose Your Signature Style
                    </motion.h1>
                    <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
                        Select a design that best represents your professional brand. Click a card to preview or select to get started.
                    </motion.p>
                </motion.div>

                <AnimatePresence>
                    {successMessage && (
                        <motion.div 
                            className="max-w-6xl mx-auto mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center"
                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        >
                            <p><CheckIcon />{successMessage}</p>
                            {user && (
                                <a href={`/templates/${user.id}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-purple-400 hover:text-purple-300 underline">
                                    View Your Live Portfolio &rarr;
                                </a>
                            )}
                        </motion.div>
                    )}
                    {errorMessage && (
                        <motion.div 
                            className="max-w-6xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center"
                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        >
                           <p><AlertIcon />{errorMessage}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {templates.map((tpl) => (
                        <motion.div
                            key={tpl.id}
                            className="group relative bg-gray-800 rounded-2xl shadow-lg border border-gray-700/50 flex flex-col overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 0 15px rgba(139, 92, 246, 0.3)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative w-full h-56 bg-gray-700">
                                <img 
                                    src={`https://placehold.co/600x400/111827/a78bfa?text=${encodeURIComponent(tpl.name)}`} 
                                    alt={tpl.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 gap-4">
                                    <Link href={`/templates/pages/${tpl.key}`} target="_blank" className="w-full text-center px-6 py-2.5 font-semibold rounded-lg bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                        Preview
                                    </Link>
                                    <button 
                                        onClick={() => handleSelectTemplate(tpl.key)}
                                        disabled={loadingTemplate === tpl.key}
                                        className="w-full px-6 py-2.5 font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:from-gray-600 disabled:cursor-not-allowed"
                                    >
                                        {loadingTemplate === tpl.key ? <><Spinner /> Saving...</> : 'Use This Template'}
                                    </button>
                                </div>
                            </div>
                            <h2 className="mt-auto p-4 text-lg font-semibold text-gray-200 text-center">
                                {tpl.name}
                            </h2>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}