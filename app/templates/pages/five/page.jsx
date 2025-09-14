"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---

const GithubIcon = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);
const LinkedinIcon = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const TwitterIcon = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
);
const ExternalLinkIcon = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

// --- Custom Hooks ---
const useOnScreen = (options) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
        }, options);
        if (ref) observer.observe(ref);
        return () => { if (ref) observer.unobserve(ref); };
    }, [ref, options]);
    return [setRef, isVisible];
};

// --- Reusable Components ---
const AnimatedSection = ({ id, title, children }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={setRef} id={id} className={`py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-mono text-cyan-400 mb-12 relative flex items-center">
                    <span className="text-cyan-400 pr-4">0{['About', 'Projects', 'Contact'].indexOf(title) + 1}.</span>
                    <span className="font-sans font-bold text-3xl text-slate-200">{title}</span>
                    <span className="flex-grow h-px bg-slate-700 ml-6"></span>
                </h2>
                {children}
            </div>
        </section>
    );
};

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, imageUrl }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg group relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-slate-700 hover:border-cyan-400/50 hover:shadow-cyan-400/10">
        <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
        <div className="relative p-7 z-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{title}</h3>
                <div className="flex gap-4 text-slate-400">
                    {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label={`GitHub repository for ${title}`}><GithubIcon height="22" width="22" /></a>}
                    {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label={`Live demo of ${title}`}><ExternalLinkIcon height="22" width="22" /></a>}
                </div>
            </div>
            <p className="mt-4 text-slate-400 text-[0.95rem] leading-relaxed">{description}</p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate-500">
                {tags.map(tag => (<span key={tag}>{tag}</span>))}
            </div>
        </div>
    </div>
);

const TechStack = ({ items }) => (
    <ul className="grid grid-cols-2 gap-x-8 gap-y-4 text-slate-400">
        {items.map(item => (
            <li key={item} className="flex items-center font-mono text-sm">
                <span className="text-cyan-400 mr-3">▹</span>
                {item}
            </li>
        ))}
    </ul>
);

// --- Main Page Component ---
export default function Portfolio() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const sections = useRef(null);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true);
            const res = await fetch("/api/profile");
            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.error || `Failed to fetch profile (${res.status})`);
            }
            const data = await res.json();
            console.log("Fetched profile data:", data);
            setUserData(data);
          } catch (err) {
            console.error(err);
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
        fetchData();
    }, []);

    useEffect(() => {
        sections.current = document.querySelectorAll('section[id]');
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            let current = '';
            sections.current?.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) { current = section.getAttribute('id') || ''; }
            });
            setActiveLink(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return <div className="min-h-screen bg-[#0A192F] flex items-center justify-center text-cyan-400 font-mono">Loading...</div>;
    }
    if (error) {
        return <div className="min-h-screen bg-[#0A192F] flex items-center justify-center text-red-400 p-8 text-center font-mono">{error}</div>;
    }
    if (!userData) {
        return <div className="min-h-screen bg-[#0A192F] flex items-center justify-center text-slate-400 font-mono">Could not load profile data.</div>;
    }

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    const validProjects = userData.projects?.filter(p => p.name) || [];

    return (
        <div className="bg-[#0A192F] text-slate-300 font-sans leading-relaxed -mt-18" style={{ fontFamily: "'Poppins', sans-serif" }}>
            
            
            <div className="hidden md:flex fixed bottom-0 left-12 flex-col items-center gap-6 z-30">
                {userData.socialLinks?.github && <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transform hover:-translate-y-1 transition-all" aria-label="GitHub"><GithubIcon height="22" width="22" /></a>}
                {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transform hover:-translate-y-1 transition-all" aria-label="LinkedIn"><LinkedinIcon height="22" width="22" /></a>}
                {userData.socialLinks?.x && <a href={userData.socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transform hover:-translate-y-1 transition-all" aria-label="Twitter"><TwitterIcon height="22" width="22" /></a>}
                <div className="h-24 w-px bg-slate-600 mt-2"></div>
            </div>
            
            <div className="hidden md:flex fixed bottom-0 right-12 flex-col items-center gap-6 z-30">
                <a href={`mailto:${userData.email}`} className="text-sm text-slate-400 hover:text-cyan-400 transition-all tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                    {userData.email}
                </a>
                <div className="h-24 w-px bg-slate-600 mt-2"></div>
            </div>
            
            <main className="px-4 sm:px-8 md:px-12 lg:px-24">
                <section className="min-h-screen flex items-center">
                    <div className="max-w-5xl mx-auto">
                        <span className="block font-mono text-cyan-400 mb-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>Hi, my name is</span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-100 [text-shadow:0_0_10px_rgba(34,211,238,0.2)]">{userData.fullName}.</h1>
                        <h2 className="mt-2 text-5xl lg:text-7xl font-extrabold text-slate-400">{userData.title || "I build things for the web."}</h2>
                        <p className="mt-6 text-lg text-slate-400 max-w-xl">
                            {userData.bio || "I’m a software engineer specializing in building exceptional digital experiences."}
                        </p>
                        <a href="#projects" className="inline-block mt-12 text-lg border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-md hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                            Check out my work!
                        </a>
                    </div>
                </section>

                {userData.bio && userData.skills?.length > 0 && (
                    <AnimatedSection id="about" title="About">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
                            <div className="md:col-span-3 text-lg text-slate-400 space-y-4">
                                <p>{userData.bio}</p>
                                <p>Here are a few technologies I've been working with recently:</p>
                                <TechStack items={userData.skills} />
                            </div>
                            <div className="md:col-span-2 flex justify-center">
                                <div className="relative w-64 h-64 group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                                        <img src={userData.profilePhoto || `https://placehold.co/256x256/0A192F/22D3EE?text=${userData.fullName?.split(' ').map(n => n[0]).join('')}`} alt={userData.fullName} className="w-full h-full object-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                )}

                {validProjects.length > 0 && (
                    <AnimatedSection id="projects" title="Projects">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {validProjects.map((project) => (
                                <ProjectCard 
                                    key={project._id}
                                    title={project.name}
                                    description={project.description}
                                    tags={project.tags || []}
                                    githubUrl={project.githubUrl || '#'}
                                    liveUrl={project.link || '#'}
                                    imageUrl={`https://placehold.co/600x400/0A192F/0891B2/png?text=${encodeURIComponent(project.name)}`}
                                />
                            ))}
                        </div>
                    </AnimatedSection>
                )}

                <AnimatedSection id="contact" title="Contact">
                    <div className="text-center max-w-xl mx-auto">
                        <h3 className="font-mono text-cyan-400 mb-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>What's Next?</h3>
                        <h4 className="text-5xl font-bold text-slate-200 mb-6">Get In Touch</h4>
                        <p className="text-slate-400 mb-10">
                            My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                        </p>
                        <a href={`mailto:${userData.email}`} className="inline-block text-lg border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-md hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                            Say Hello
                        </a>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="py-8 px-4">
                <p className="font-mono text-center text-sm text-slate-500" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    Designed & Built by {userData.fullName}
                </p>
            </footer>
        </div>
    );
}