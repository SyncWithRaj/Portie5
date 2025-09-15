"use client";

import { motion } from "framer-motion";
import {
  ArrowsRightLeftIcon,
  FolderOpenIcon,
  CloudArrowUpIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  LockClosedIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";

// --- Feature Data (9 items for 3x3 grid) ---
const features = [
  {
    title: "Drag-and-Drop Builder",
    desc: "Easily design your portfolio with a simple drag-and-drop interface.",
    icon: ArrowsRightLeftIcon,
  },
  {
    title: "AI Content Assistant",
    desc: "Get smart suggestions to improve your portfolio content.",
    icon: CpuChipIcon,
  },
  {
    title: "One-Click Hosting",
    desc: "Publish your portfolio instantly with just one click.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "Institution Dashboard",
    desc: "Colleges can manage and view student portfolios effectively.",
    icon: PresentationChartBarIcon,
  },
  {
    title: "Content Integration",
    desc: "Add projects, blogs, and multimedia content seamlessly.",
    icon: FolderOpenIcon,
  },
  {
    title: "DigiLocker Integration",
    desc: "Securely connect certificates for verification.",
    icon: LockClosedIcon,
  },
  {
    title: "Skill Visualization",
    desc: "Graphically showcase your skills to impress recruiters.",
    icon: ChartBarSquareIcon,
  },
  {
    title: "PDF Export",
    desc: "Download your portfolio as a professional PDF anytime.",
    icon: DocumentTextIcon,
  },
  {
    title: "User Management",
    desc: "Manage your account and track portfolio analytics effortlessly.",
    icon: UserGroupIcon,
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Feature Card ---
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative p-6 sm:p-8 bg-gray-800/60 rounded-3xl ring-1 ring-white/10 backdrop-blur-md"
    >
      {/* Glow background */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-xl inline-block">
          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base flex-grow">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <div className="font-poppins min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 sm:px-12">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-900/40 to-transparent blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-indigo-900/40 to-transparent blur-3xl opacity-30"></div>
      </div>

      {/* Hero Section */}
      <motion.main
        className="text-center py-16 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Powerful by Design
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-gray-400 text-lg sm:text-xl mt-6"
          variants={itemVariants}
        >
          Explore features meticulously crafted to give every student a seamless
          and powerful portfolio-building experience.
        </motion.p>
      </motion.main>

      {/* Features Grid */}
      <motion.section
        className="max-w-6xl w-full py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-12 mt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Student Portfolio Platform. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
