"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Reusable animation variants
const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <div className="font-poppins bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden -mt-18">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-300/40 dark:bg-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-300/40 dark:bg-indigo-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Hero Section */}
        <motion.main
          className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                ✨ Create, Showcase, Succeed
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
              variants={fadeUp}
            >
              The Ultimate Student Portfolio.
            </motion.h1>
            <motion.p className="max-w-lg mx-auto lg:mx-0 text-lg text-gray-600 dark:text-gray-400" variants={fadeUp}>
              Your work deserves a spotlight. Our platform provides the tools, templates, and AI magic to build a stunning portfolio in minutes, not hours.
            </motion.p>
            <motion.div className="flex gap-4 mt-4 flex-col sm:flex-row justify-center lg:justify-start" variants={fadeUp}>
              <motion.a
                href="/editor"
                className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3 shadow-lg shadow-indigo-500/20 transform transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.4)" }}
              >
                Portie5 Studio
              </motion.a>
              <motion.a
                href="/templates"
                className="rounded-full font-semibold px-8 py-3 ring-1 ring-inset ring-gray-300 dark:ring-gray-700"
                whileHover={{ scale: 1.05, y: -3, backgroundColor: 'rgba(255, 255, 255, 0.1)', ringColor: '#818cf8' }}
              >
                Explore Templates
              </motion.a>
            </motion.div>
          </div>
          <motion.div className="hidden lg:block" variants={fadeUp}>
            <Image
              src="/home.png" // Replace with a visually appealing mockup image
              alt="Portfolio Mockup"
              width={1200}
              height={900}
              className="rounded-2xl shadow-2xl animate-float"
            />
          </motion.div>
        </motion.main>

        {/* Features Section */}
        <motion.section 
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold">Everything You Need to Shine</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-500 dark:text-gray-400">
              From effortless editing to powerful analytics, our features are designed for impact.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div className="p-8 bg-white/50 dark:bg-gray-800/50 rounded-2xl ring-1 ring-inset ring-gray-200 dark:ring-gray-700" variants={fadeUp}>
              <div className="inline-block p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900 mb-4">{/* Icon */} <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div>
              <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
              <p className="text-gray-600 dark:text-gray-400">Pick a template and make it your own with our intuitive drag-and-drop editor.</p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div className="p-8 bg-white/50 dark:bg-gray-800/50 rounded-2xl ring-1 ring-inset ring-gray-200 dark:ring-gray-700" variants={fadeUp}>
              <div className="inline-block p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900 mb-4">{/* Icon */} <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Assistance</h3>
              <p className="text-gray-600 dark:text-gray-400">Generate compelling project descriptions and skill summaries in seconds.</p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div className="p-8 bg-white/50 dark:bg-gray-800/50 rounded-2xl ring-1 ring-inset ring-gray-200 dark:ring-gray-700" variants={fadeUp}>
              <div className="inline-block p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900 mb-4">{/* Icon */} <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div>
              <h3 className="text-xl font-semibold mb-2">Instant Sharing</h3>
              <p className="text-gray-600 dark:text-gray-400">Get a unique URL to share your portfolio with recruiters and mentors effortlessly.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Popular Templates Section */}
        <motion.section 
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Start with a Stunning Design
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Our templates are professionally designed to make your projects stand out.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Modern Portfolio", img: "/template3.jpg", slug: "one" },
              { name: "Creative Showcase", img: "/template2.jpg", slug: "two" },
              { name: "Minimal Resume", img: "/template1.jpg", slug: "three" },
            ].map((template) => (
              <motion.a
                href={`/templates/pages/${template.slug}`}
                key={template.slug}
                className="block relative rounded-2xl overflow-hidden group"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={template.img}
                  alt={template.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{template.name}</h3>
                  <p className="text-indigo-300 font-semibold transition-all opacity-0 group-hover:opacity-100">
                    Preview Template &rarr;
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
        
        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Student Portfolio Platform. All rights reserved.</p>
            <div className="flex gap-4">
              {/* Add social links here if you have them */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}