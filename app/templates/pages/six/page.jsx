"use client";

import React, { useState, useEffect } from 'react';

// --- SVG Icon Components ---
const FaGithub = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"></path></svg>
);
const FaLinkedin = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const FaTwitter = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
);
const BriefcaseIcon = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const UniversityIcon = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 10h18M3 6h18M3 14h18M3 18h18M12 3v18"></path><path d="M20.2 11.8l-8.2 4.4-8.2-4.4"></path><path d="M12 21l8.2-4.4M3.8 16.2L12 21l8.2-4.8"></path></svg>
);
const SiHtml5 = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props}><path d="M1.001 0h21.998l-1.998 22.398-9.006 2.602-8.994-2.602L1.001 0zm19.991 10.513V4.717l-12.012.003L9.02 10.516h11.972zM15.01 19.34l4.01-1.076 1.41-15.546H9.017l.088 1.054.484 5.397h8.802l-.32 3.593-3.033.82-3.04-.82-.204-2.28H7.904l.32 3.63L15.01 19.34z"></path></svg>
);
const SiCss3 = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props}><path d="M1.001 0h21.998l-1.998 22.398-9.006 2.602-8.994-2.602L1.001 0zm17.067 10.495l.293-3.264-5.389-.002.146-1.637 6.94.002L20.35 0H3.649l.059.66.486 5.432h11.895l-.293 3.257-2.82.76-2.822-.76-.183-2.05H6.28l.348 3.868L12 15.289l5.378-1.528z"></path></svg>
);
const SiJavascript = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M0 0H24V24H0V0Z" fill="#F7DF1E"></path><path d="M16.488 15.228C16.212 15.684 15.828 16.08 15.288 16.38C14.748 16.68 14.112 16.848 13.344 16.848C12.444 16.848 11.676 16.632 11.028 16.164C10.392 15.696 9.96 15.036 9.744 14.196H11.376C11.532 14.628 11.796 14.94 12.168 15.132C12.54 15.324 12.936 15.42 13.356 15.42C13.884 15.42 14.304 15.288 14.592 15.036C14.892 14.772 15.048 14.436 15.048 14.04C15.048 13.62 14.892 13.284 14.58 13.032C14.28 12.78 13.788 12.528 13.104 12.288L12.456 12.036C11.652 11.724 11.016 11.34 10.548 10.884C10.08 10.428 9.84 9.84 9.84 9.12C9.84 8.4 10.08 7.8 10.56 7.332C11.04 6.864 11.664 6.624 12.432 6.624C13.164 6.624 13.8 6.816 14.328 7.2C14.856 7.572 15.216 8.064 15.396 8.676H13.788C13.68 8.364 13.488 8.136 13.224 8.004C12.96 7.86 12.672 7.788 12.36 7.788C11.964 7.788 11.64 7.908 11.388 8.148C11.148 8.388 11.028 8.664 11.028 8.976C11.028 9.324 11.16 9.6 11.424 9.804C11.688 10.008 12.144 10.224 12.792 10.464L13.416 10.716C14.316 11.052 14.988 11.448 15.432 11.904C15.888 12.36 16.116 12.96 16.116 13.704C16.116 14.34 15.912 14.88 15.504 15.324C15.096 15.768 14.556 16.08 13.884 16.272C13.212 16.464 12.516 16.56 11.796 16.56C10.836 16.56 9.996 16.32 9.276 15.84C8.556 15.36 8.04 14.7 7.728 13.872H9.384C9.552 14.28 9.83999 14.592 10.248 14.808C10.656 15.024 11.1 15.132 11.58 15.132C12.012 15.132 12.384 15.036 12.696 14.844C13.008 14.652 13.164 14.388 13.164 14.052C13.164 13.692 13.02 13.404 12.732 13.188C12.444 12.972 11.964 12.756 11.292 12.528L10.62 12.276C9.756 11.952 9.072 11.532 8.568 11.016C8.064 10.5 7.812 9.828 7.812 9.012C7.812 8.244 8.04 7.608 8.508 7.104C8.976 6.6 9.588 6.288 10.344 6.168C11.1 6.048 11.856 6 12.612 6C13.524 6 14.316 6.228 14.988 6.684C15.66 7.14 16.128 7.752 16.392 8.52H14.784C14.652 8.136 14.412 7.836 14.064 7.62C13.728 7.404 13.332 7.296 12.876 7.296C12.504 7.296 12.192 7.392 11.94 7.584C11.688 7.776 11.568 8.016 11.568 8.304C11.568 8.604 11.664 8.844 11.856 9.024C12.048 9.204 12.36 9.396 12.792 9.6L13.5 9.852C14.4 10.164 15.084 10.56 15.552 11.04C16.02 11.52 16.248 12.144 16.248 12.912C16.248 13.62 16.02 14.22 15.564 14.712C15.12 15.204 14.544 15.564 13.836 15.792C13.128 16.02 12.408 16.128 11.676 16.128C10.74 16.128 9.936 15.9 9.264 15.444C8.592 14.988 8.1 14.364 7.788 13.584H6.228C6.552 14.616 7.08 15.48 7.812 16.176C8.544 16.872 9.42 17.352 10.44 17.616C11.46 17.88 12.492 18 13.536 18C14.7 18 15.732 17.76 16.632 17.292C17.532 16.812 18.216 16.128 18.684 15.228H16.488Z" fill="black"></path></svg>
);
const SiReact = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="12" cy="12" r="2.5" fill="#61DAFB"></circle><ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.5"></ellipse><ellipse cx="12" cy="12" rx="11" ry="4.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5"></ellipse><ellipse cx="12" cy="12" rx="11" ry="4.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5"></ellipse></svg>
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


const skillIconMap = {
    "HTML": { icon: SiHtml5, color: "text-orange-600" },
    "CSS": { icon: SiCss3, color: "text-blue-600" },
    "JavaScript": { icon: SiJavascript, color: "text-slate-800" },
    "React": { icon: SiReact, color: "text-sky-500" },
    // Add other skills from your DB here to map them
};

const AnimatedSection = ({ id, children, className }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return (
        <section
            ref={setRef}
            id={id}
            className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
        >
            {children}
        </section>
    );
};

const Portfolio = () => {
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
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-teal-600">Loading...</div>;
    }
    if (error) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-red-600 p-8 text-center">{error}</div>;
    }
    if (!userData) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-600">Profile data could not be loaded.</div>;
    }

    const validProjects = userData.projects?.filter(p => p.name) || [];
    const validSkills = userData.skills?.filter(s => skillIconMap[s]) || [];
    const validExperience = userData.experience?.filter(e => e.role && e.company) || [];
    const validEducation = userData.education?.filter(e => e.instituteName && e.degree) || [];

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
            <div className="bg-slate-50 text-slate-700 min-h-screen font-sans antialiased -mt-18 pt-18">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                   
                 <main>
                        <section className="text-center py-24 md:py-32">
                            <div className="relative w-40 h-40 mx-auto mb-8">
                                <img
                                    src={userData.profilePhoto || `https://placehold.co/256x256/e2e8f0/475569?text=${userData.fullName?.split(' ').map(n=>n[0]).join('')}`}
                                    alt={userData.fullName || "Profile"}
                                    className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg"
                                />
                                <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xl shadow-md">👋</div>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
                                {userData.fullName || "Jane Doe"}
                            </h1>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-teal-600 mt-3">
                                {userData.title || "Creative Designer & UI Engineer"}
                            </h2>
                            <div className="flex justify-center gap-6 mt-10 text-slate-500">
                                {userData.socialLinks?.github && <a href={userData.socialLinks.github} aria-label="GitHub" className="hover:text-teal-600 transition-colors"><FaGithub className="w-7 h-7" /></a>}
                                {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} aria-label="LinkedIn" className="hover:text-teal-600 transition-colors"><FaLinkedin className="w-7 h-7" /></a>}
                                {userData.socialLinks?.x && <a href={userData.socialLinks.x} aria-label="Twitter" className="hover:text-teal-600 transition-colors"><FaTwitter className="w-7 h-7" /></a>}
                            </div>
                        </section>
                        
                        <AnimatedSection id="about">
                           <div className="text-center max-w-3xl mx-auto">
                               <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
                               <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                   {userData.bio || "Hello! I'm a designer and developer who loves crafting products that are both functional and visually delightful. With a background in graphic design and a passion for coding, I bridge the gap between creative vision and technical execution."}
                               </p>
                           </div>
                        </AnimatedSection>


                        {validSkills.length > 0 && 
                            <AnimatedSection id="skills" className="bg-white rounded-3xl -mx-4 sm:-mx-8 px-4 sm:px-8">
                                <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">My Expertise</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                                    {validSkills.map((skillName) => {
                                        const skill = skillIconMap[skillName];
                                        return (
                                            <div key={skillName} className="flex flex-col items-center justify-center text-center gap-2 bg-slate-100 p-4 rounded-xl border border-slate-200/80 transition-all hover:shadow-lg hover:border-teal-300 hover:bg-white">
                                                <skill.icon className={`w-10 h-10 ${skill.color}`} />
                                                <h4 className="font-semibold text-slate-800 text-md">{skillName}</h4>
                                            </div>
                                        )
                                    })}
                                </div>
                            </AnimatedSection>
                        }

                        {validProjects.length > 0 &&
                             <AnimatedSection id="projects">
                                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Selected Projects</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {validProjects.map((project) => (
                                        <div key={project._id} className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                                            <div className="overflow-hidden">
                                                <img src={`https://placehold.co/600x400/e2e8f0/334155?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                                                <p className="text-slate-600 mb-4 h-24">{project.description}</p>
                                                {project.link && 
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1 group/link">
                                                        View Project <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        }
                        
                        {(validExperience.length > 0 || validEducation.length > 0) &&
                            <AnimatedSection id="journey" className="bg-white rounded-3xl -mx-4 sm:-mx-8 px-4 sm:px-8">
                                <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">My Journey</h2>
                                <div className="relative max-w-2xl mx-auto">
                                    <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-200"></div>
                                    <div className="space-y-12">
                                        {validExperience.map((exp) => (
                                            <div key={exp._id} className="relative pl-12">
                                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center ring-8 ring-white">
                                                    <BriefcaseIcon className="w-4 h-4" />
                                                </div>
                                                <p className="text-sm font-medium text-slate-500">{exp.startDate} - {exp.endDate || 'Present'}</p>
                                                <h3 className="text-xl font-bold text-slate-800 mt-1">{exp.role}</h3>
                                                <h4 className="font-semibold text-teal-600">{exp.company}</h4>
                                                <p className="mt-2 text-slate-600">{exp.description}</p>
                                            </div>
                                        ))}
                                        {validEducation.map((edu) => (
                                             <div key={edu._id} className="relative pl-12">
                                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center ring-8 ring-white">
                                                    <UniversityIcon className="w-4 h-4" />
                                                </div>
                                                <p className="text-sm font-medium text-slate-500">{edu.startDate} - {edu.endDate}</p>
                                                <h3 className="text-xl font-bold text-slate-800 mt-1">{edu.degree}</h3>
                                                <h4 className="font-semibold text-teal-600">{edu.instituteName}</h4>
                                                <p className="mt-2 text-slate-600">{edu.fieldOfStudy}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        }
                        
                        <AnimatedSection id="contact" className="text-center">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
                            <p className="text-slate-600 max-w-xl mx-auto mb-8 text-lg">
                                Have a project in mind? I'd love to hear about it. Let's connect and create something amazing.
                            </p>
                            <a
                                href={`mailto:${userData.email}`}
                                className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px"
                            >
                               {userData.email}
                            </a>
                        </AnimatedSection>

                        <footer className="text-center py-8 text-slate-500 border-t border-slate-200">
                            <p>&copy; {new Date().getFullYear()} {userData.fullName}. All Rights Reserved.</p>
                        </footer>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Portfolio;