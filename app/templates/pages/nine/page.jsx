"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---
const FaLinkedin = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const BriefcaseIcon = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const GithubIcon = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"></path></svg>
);
const BookOpenIcon = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
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
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        if (ref) observer.observe(ref);
        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, options]);
    return [setRef, isVisible];
};

// --- Reusable Components ---
const AnimatedSection = ({ id, title, children }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section
            ref={setRef}
            id={id}
            className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-100 relative inline-block">
                        {title}
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-500 rounded-full"></span>
                    </h2>
                </div>
                {children}
            </div>
        </section>
    );
};

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, imageUrl }) => (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-blue-500">
        <div className="relative">
            <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
            <p className="mt-2 text-gray-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-6 flex items-center justify-end gap-5 text-gray-400">
                {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label={`GitHub for ${title}`}><GithubIcon height="24" width="24" /></a>}
                {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label={`Live demo of ${title}`}><ExternalLinkIcon height="24" width="24" /></a>}
            </div>
        </div>
    </div>
);

const TimelineItem = ({ icon, date, title, subtitle, description }) => (
    <div className="relative pl-12 pb-12 last:pb-0">
        <div className="absolute left-4 top-1 h-full w-0.5 bg-gray-700"></div>
        <div className="absolute left-0 top-0 w-8 h-8 bg-gray-950 border-2 border-blue-500 rounded-full flex items-center justify-center">
            <span className="text-blue-500">{icon}</span>
        </div>
        <p className="text-sm font-medium text-gray-500">{date}</p>
        <h3 className="text-xl font-bold text-gray-100 mt-1">{title}</h3>
        <h4 className="font-semibold text-blue-400">{subtitle}</h4>
        <p className="mt-2 text-gray-400">{description}</p>
    </div>
);

// --- Main Page Component ---
export default function Portfolio() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    if (loading) {
        return <div className="min-h-screen bg-[#0a192f] flex items-center justify-center text-blue-400">Loading...</div>;
    }
    if (error) {
        return <div className="min-h-screen bg-[#0a192f] flex items-center justify-center text-red-400 p-8 text-center">{error}</div>;
    }
    if (!userData) {
        return <div className="min-h-screen bg-[#0a192f] flex items-center justify-center text-gray-400">Could not load profile data.</div>;
    }
    
    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];
    
    const validProjects = userData.projects?.filter(p => p.name) || [];
    const validExperience = userData.experience?.filter(e => e.role && e.company) || [];
    const validEducation = userData.education?.filter(e => e.instituteName) || [];

    return (
        <div className="bg-[#0a192f] text-gray-300 font-sans leading-normal tracking-normal -mt-18">
            

            <main>
                <section className="min-h-screen flex items-center pt-24 pb-12 px-8">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="text-center md:text-left">
                                <span className="text-lg font-semibold text-blue-400">Hi, I'm {userData.fullName || 'Alisa Vance'}</span>
                                <h1 className="mt-2 text-5xl lg:text-6xl font-extrabold text-gray-100">
                                    {userData.title || 'Creative Designer & Frontend Developer'}
                                </h1>
                                <div className="mt-10 flex gap-4 justify-center md:justify-start">
                                    <a href="#contact" className="inline-block bg-blue-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105">Let's Talk</a>
                                    <a href="#projects" className="inline-block bg-gray-800 text-gray-200 font-bold px-8 py-4 rounded-lg hover:bg-gray-700 transition-all">My Work</a>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="relative w-80 h-80">
                                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                                    <img
                                        src={userData.profilePhoto || `https://placehold.co/320x320/0a192f/60a5fa?text=${userData.fullName?.split(' ').map(n=>n[0]).join('')}`}
                                        alt={userData.fullName || 'Profile'}
                                        className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {userData.bio && 
                    <AnimatedSection id="about" title="A Little About Me">
                        <p className="max-w-3xl mx-auto text-center text-xl text-gray-400 leading-relaxed">
                            {userData.bio}
                        </p>
                    </AnimatedSection>
                }

                {validProjects.length > 0 &&
                    <AnimatedSection id="projects" title="My Creations">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {validProjects.map(project => (
                                <ProjectCard
                                    key={project._id}
                                    title={project.name}
                                    description={project.description}
                                    tags={project.tags || []}
                                    githubUrl={project.githubUrl || '#'}
                                    liveUrl={project.link || '#'}
                                    imageUrl={`https://placehold.co/600x400/0d1f2d/99e6ff?text=${encodeURIComponent(project.name)}`}
                                />
                            ))}
                        </div>
                    </AnimatedSection>
                }

                {validExperience.length > 0 &&
                    <AnimatedSection id="experience" title="Career Journey">
                        <div className="max-w-3xl mx-auto">
                            {validExperience.map((exp, index) => (
                                <TimelineItem
                                    key={index}
                                    icon={<BriefcaseIcon height="16" width="16" />}
                                    date={`${exp.startDate} - ${exp.endDate || 'Present'}`}
                                    title={exp.role}
                                    subtitle={exp.company}
                                    description={exp.description}
                                />
                            ))}
                        </div>
                    </AnimatedSection>
                }

                {validEducation.length > 0 &&
                    <AnimatedSection id="education" title="Education">
                        <div className="max-w-3xl mx-auto">
                            {validEducation.map((edu, index) => (
                                <TimelineItem
                                    key={index}
                                    icon={<BookOpenIcon height="16" width="16" />}
                                    date={`${edu.startDate} - ${edu.endDate || 'Year'}`}
                                    title={edu.degree}
                                    subtitle={edu.instituteName}
                                    description={edu.fieldOfStudy}
                                />
                            ))}
                        </div>
                    </AnimatedSection>
                }

                <AnimatedSection id="contact" title="Let's Create Together">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-xl text-gray-400 mb-8">
                            Have a project in mind or just want to connect? I'm always excited to hear about new ideas and opportunities. Drop me a line!
                        </p>
                        <a
                            href={`mailto:${userData.email}`}
                            className="inline-block bg-blue-500 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
                        >
                            {userData.email}
                        </a>
                        <div className="mt-16 flex justify-center gap-10 text-4xl text-gray-500">
                             {userData.socialLinks?.github && <a href={userData.socialLinks.github} className="hover:text-blue-400 transition-colors duration-300" aria-label="GitHub"><GithubIcon /></a>}
                             {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} className="hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn"><FaLinkedin /></a>}
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="bg-[#0a192f] border-t border-gray-800">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p>Designed & Built by {userData.fullName} &copy; {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}