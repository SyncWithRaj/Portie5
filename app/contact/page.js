"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    UserIcon,
    EnvelopeIcon,
    ChatBubbleLeftRightIcon,
    PaperAirplaneIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/24/solid";

// --- Reusable UI Components ---

const AnimatedCheckmark = () => (
    <svg className="w-24 h-24 text-green-500" viewBox="0 0 52 52">
        <motion.circle
            cx="26" cy="26" r="25"
            fill="none"
            strokeWidth="3"
            strokeDasharray="157"
            strokeDashoffset="157"
            stroke="#4ade80"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.path
            d="M14 27l5 5 16-16"
            fill="none"
            strokeWidth="4"
            strokeDasharray="30"
            strokeDashoffset="30"
            stroke="#4ade80"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
        />
    </svg>
);

const ContactItem = ({ icon, title, children }) => (
    <div className="flex items-start gap-5">
        <div className="flex-shrink-0 p-3 bg-indigo-500/10 rounded-full">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <div className="text-indigo-300 hover:text-indigo-200 transition-colors">
                {children}
            </div>
        </div>
    </div>
);

// --- Animation Variants ---
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// --- Main Component ---
export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", form);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="font-poppins relative min-h-screen bg-gray-900 text-gray-200 overflow-hidden -mt-18">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-900/50 to-transparent filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-indigo-900/50 to-transparent filter blur-3xl opacity-30"></div>
            </div>

            <main className="container mx-auto px-6 py-24 sm:py-32">
                <motion.div
                    className="text-center mb-16 sm:mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl mx-auto mt-6 text-lg text-gray-400"
                        variants={itemVariants}
                    >
                        Have a question, a project idea, or just want to say hello? We'd love to hear from you.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-5 lg:gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        className="lg:col-span-2 flex flex-col space-y-6 mb-12 lg:mb-0"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Email Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gray-800/60 rounded-2xl p-6 flex items-start gap-4 shadow-lg ring-1 ring-white/10 hover:ring-indigo-400/40 transition"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600">
                                <EnvelopeIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Email</h4>
                                <a
                                    href="mailto:support@studentportfolio.com"
                                    className="text-gray-300 hover:underline text-sm sm:text-base"
                                >
                                    support@studentportfolio.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gray-800/60 rounded-2xl p-6 flex items-start gap-4 shadow-lg ring-1 ring-white/10 hover:ring-indigo-400/40 transition"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600">
                                <PhoneIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Phone</h4>
                                <a
                                    href="tel:+911234567890"
                                    className="text-gray-300 hover:underline text-sm sm:text-base"
                                >
                                    +91 12345 67890
                                </a>
                            </div>
                        </motion.div>

                        {/* Office Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gray-800/60 rounded-2xl p-6 flex items-start gap-4 shadow-lg ring-1 ring-white/10 hover:ring-indigo-400/40 transition"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600">
                                <MapPinIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Office</h4>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    123 Tech Park, Bangalore, India
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        className="lg:col-span-3 bg-gray-800/50 rounded-3xl shadow-2xl p-8 backdrop-blur-sm ring-1 ring-white/10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center h-full text-center py-10 min-h-[450px]"
                                >
                                    <AnimatedCheckmark />
                                    <h2 className="text-2xl font-bold mt-6">Thank You!</h2>
                                    <p className="mt-2 text-gray-400">
                                        Your message has been sent. We'll be in touch soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <UserIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-4 z-10" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={form.name}
                                                onChange={handleChange}
                                                className="form-input"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-4 z-10" />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className="form-input"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-4 z-10" />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows="6"
                                            value={form.message}
                                            onChange={handleChange}
                                            className="form-input resize-none pl-4"
                                            required
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg disabled:opacity-50"
                                        whileHover={{
                                            scale: 1.03,
                                            y: -2,
                                            boxShadow: "0 10px 20px rgba(99, 102, 241, 0.4)",
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <PaperAirplaneIcon className="h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </main>
            <style jsx global>{`
                .form-input {
                    width: 100%;
                    position: relative;
                    background-color: rgba(31, 41, 55, 0.5); /* bg-gray-800 with opacity */
                    border-width: 1px;
                    border-color: transparent;
                    border-bottom-color: #4b5563; /* border-b-gray-600 */
                    border-radius: 0.5rem;
                    padding: 0.75rem 0.75rem 0.75rem 3rem; /* pl-12 for icon */
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                .form-input:focus {
                    outline: none;
                    border-color: #6366f1; /* focus:border-indigo-500 */
                    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.4);
                }
                .form-input.resize-none {
                    padding-left: 1rem; /* Adjust padding for textarea without icon */
                }
            `}</style>
        </div>
    );
}