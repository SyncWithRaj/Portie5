"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs'; // Or your preferred auth provider's hook
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        <div className="min-h-screen bg-gray-900 text-white px-6 sm:px-12 py-24 -mt-18">
            <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent mb-12">
                Choose a Portfolio Template
            </h1>

            {successMessage && (
                <div className="max-w-6xl mx-auto mb-8 p-4 bg-green-900/50 border border-green-700 rounded-lg text-center">
                    <p>{successMessage}</p>
                    {user && (
                        <a href={`/templates/${user.id}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-purple-400 hover:text-purple-300 underline">
                            View Your Live Portfolio &rarr;
                        </a>
                    )}
                </div>
            )}
            {errorMessage && <p className="max-w-6xl mx-auto mb-8 p-4 bg-red-900/50 border border-red-700 rounded-lg text-center">{errorMessage}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {templates.map((tpl) => (
                    <div
                        key={tpl.id}
                        className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition p-4 flex flex-col items-center border border-gray-700"
                    >
                        <div className="relative w-full h-56 bg-gray-700 rounded-lg overflow-hidden">
                            <img 
                                src={`https://placehold.co/600x400/111827/a78bfa?text=${encodeURIComponent(tpl.name)}`} 
                                alt={tpl.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-semibold text-gray-200 text-center">
                            {tpl.name}
                        </h2>
                        <div className="mt-4 w-full flex gap-2">
                             <Link href={`/templates/pages/${tpl.key}`} target="_blank" className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-md bg-gray-700 text-white hover:bg-gray-600 transition">
                                Preview
                            </Link>
                            <button 
                                onClick={() => handleSelectTemplate(tpl.key)}
                                disabled={loadingTemplate === tpl.key}
                                className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
                            >
                                {loadingTemplate === tpl.key ? 'Saving...' : 'Use Template'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
