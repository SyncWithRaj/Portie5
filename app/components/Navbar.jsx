"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-4
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow transition-colors duration-300 rounded-full mt-2 mx-2">
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center gap-5">
        <Image
          src="/logo.jpg"
          alt="StudentPortfolio Logo"
          width={55}
          height={55}
          className="rounded"
        />
        <Image
          src="/name.png"
          alt="StudentPortfolio Text"
          width={150}
          height={18}
          className="rounded"
        />
      </Link>

      {/* Links */}
      <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
        <Link href="/features" className="hover:text-indigo-600 text-indigo-500 text-lg">
          Features
        </Link>
        <Link href="/templates" className="hover:text-indigo-600 text-indigo-500 text-lg">
          Templates
        </Link>
        <Link href="/about" className="hover:text-indigo-600 text-indigo-500 text-lg">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-indigo-600 text-indigo-500 text-lg">
          Contacts
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 text-lg font-semibold rounded-md border border-gray-300 dark:border-gray-700 
        bg-transparent bg-clip-text text-transparent
        bg-gradient-to-r from-purple-500 to-indigo-600
        hover:brightness-110 transition-all duration-200 cursor-pointer">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton>
            <button className="px-4 py-2 text-lg font-semibold rounded-md
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard" className="hover:text-indigo-600 text-indigo-500 text-lg">
            <button className="px-4 py-2 text-lg font-semibold rounded-md
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
              Dashboard
            </button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>


    </nav>
  );
}
