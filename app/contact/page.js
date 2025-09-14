"use client";

import { useState } from "react";
import {
    UserIcon,
    EnvelopeIcon,
    ChatBubbleBottomCenterTextIcon,
    PaperAirplaneIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/24/solid";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
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
        <div className="font-poppins min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-200 -mt-18  pt-30">
            <div className="container mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">

                    <div className="flex flex-col justify-center space-y-8">
                        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                            Contact Information
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">

                            {/* Email */}
                            <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50 dark:hover:bg-gray-700 cursor-pointer">
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shadow transition duration-300 group-hover:bg-indigo-200">
                                    <EnvelopeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <a
                                        href="mailto:support@studentportfolio.com"
                                        className="text-indigo-600 dark:text-indigo-300 hover:underline"
                                    >
                                        support@studentportfolio.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50 dark:hover:bg-gray-700 cursor-pointer">
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shadow transition duration-300">
                                    <PhoneIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <a
                                        href="tel:+911234567890"
                                        className="text-indigo-600 dark:text-indigo-300 hover:underline"
                                    >
                                        +91 12345 67890
                                    </a>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50 dark:hover:bg-gray-700 cursor-pointer">
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shadow transition duration-300">
                                    <MapPinIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Office</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        123 Tech Park, Bangalore, India
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 transform transition duration-300 hover:scale-102 hover:shadow-3xl">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <h2 className="text-2xl font-bold text-green-500">Thank You!</h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    Your message has been sent successfully. We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <UserIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-4" />
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-4" />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <label htmlFor="subject" className="sr-only">Subject</label>
                                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-4" />
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        rows="6"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                                        required
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <PaperAirplaneIcon className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>


                </div>

                {/* Footer */}
                <footer className="w-full pt-8 mt-20 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                    © {new Date().getFullYear()} Student Portfolio Platform. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
