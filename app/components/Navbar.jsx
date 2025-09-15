"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// --- Navigation Links Data ---
const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Templates", href: "/templates" },
  { name: "Editor", href: "/editor" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// --- Main Navbar Component ---
export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-2 left-2 right-2 z-50 flex items-center justify-between px-6 sm:px-8 py-3 bg-white/50 dark:bg-gray-500/10 backdrop-blur-lg ring-1 ring-black/5 rounded-full shadow-lg max-w-7xl mx-auto"
      >
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-5">
          <Image src="/logo.jpg" alt="Logo" width={50} height={40} className="rounded-full" />
          <Image
            src="/name.png"
            alt="StudentPortfolio Text"
            width={150}
            height={13}
            className="rounded"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  className="absolute inset-0 bg-gray-200/50 dark:bg-gray-700/50 rounded-full -z-10"
                  layoutId="active-pill"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <motion.button
                className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                Sign Up
              </motion.button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <motion.button
                className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                Dashboard
              </motion.button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-auto bg-white dark:bg-gray-900 p-6 rounded-b-3xl shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  StudentPortfolio
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50">
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <motion.div
                className="flex flex-col gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <SignedIn>
                  <UserButton afterSignOutUrl="/" showName />
                </SignedIn>
                <SignedOut>
                  <div className="flex flex-col gap-4">
                    <SignInButton>
                      <button className="w-full text-center py-3 text-lg font-semibold rounded-lg bg-gray-100 dark:bg-gray-800">Sign In</button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="w-full text-center py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white">Sign Up</button>
                    </SignUpButton>
                  </div>
                </SignedOut>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}