"use client";

import React, { useEffect, useState } from 'react';

// --- SVG Icon Components ---
const FaLinkedin = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const EnvelopeIcon = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
);
const BriefcaseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const FaGithub = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"></path></svg>
);
const FaXTwitter = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
);
const GoIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.82 18.892c-1.37.76-3.03.88-4.54.34-2.2-.79-3.92-2.8-4.22-5.12-.3-2.32.99-4.53 3.03-5.54 2.04-1.01 4.43-.53 5.92.93l-1.93 1.93c-.6-.6-1.42-.87-2.22-.59-.8.28-1.39.98-1.54 1.8-.15.82.12 1.66.72 2.26s1.44.87 2.26.72c.82-.15 1.52-.74 1.8-1.54l1.93 1.93c-.47 1.49-1.81 2.6-3.23 2.78z" fill="#00ADD8"></path><path d="M15.75 5.5h-7.5v2h5.5v1h-5.5v2h5.5v1h-5.5v2h7.5v-8z" fill="#00ADD8"></path></svg>
);
const PythonIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14h-4v-2h2v-2h-2v-2h4V8h-6v8h6v2zm-6-6H8V8h2v2z" fill="#3776AB"></path></svg>
);
const AWSIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.2 21.018c-3.1.2-5.9-.4-8.2-1.8.4.5.8.9 1.2 1.2 2.3 2 5.1 3.2 8.2 3.5 3.3.3 6.5-.4 9.2-2.1-.5-.3-1-.6-1.4-1-2.4-1.7-4.1-4.2-4.9-7l-1.1 1.1c-.7.7-1.7 1.1-2.7 1.1s-2-.4-2.7-1.1c-.7-.7-1.1-1.7-1.1-2.7 0-1 .4-2 1.1-2.7l4.8-4.8c.7-.7 1.7-1.1 2.7-1.1 1 0 2 .4 2.7 1.1.7.7 1.1 1.7 1.1 2.7s-.4 2-1.1 2.7l-2.4 2.4c1.2 2.1 3 3.7 5.2 4.7z" fill="#FF9900"></path><path d="M18.8 3.818c.5-.1 1-.2 1.5-.2 2.3 0 4.4.9 6 2.3-.3-.4-.7-.8-1-1.2-2.3-2-5.1-3.2-8.2-3.5-3.3-.3-6.5.4-9.2 2.1.5.3 1 .6 1.4 1 2.4 1.7 4.1 4.2 4.9 7l1.1-1.1c.7-.7 1.7-1.1 2.7-1.1s2 .4 2.7 1.1c.7.7 1.1 1.7 1.1 2.7s-.4 2-1.1 2.7l-4.8 4.8c-.7.7-1.7 1.1-2.7 1.1-1 0-2-.4-2.7-1.1-.7-.7-1.1-1.7-1.1-2.7s.4-2 1.1-2.7l2.4-2.4c-1.2-2.1-3-3.7-5.2-4.7z" fill="#232F3E"></path></svg>
);
const KubernetesIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6.5 8.5L12 14l-6.5-3.5V7L12 3.5 18.5 7v3.5zM11 15.1v3.8l-5.5-2.7V12l5.5 3.1zm2 0l5.5-3.1v-4.2L13 11v4.1z" fill="#326CE5"></path></svg>
);
const BookOpenIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const FolderDotIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><circle cx="12" cy="13" r="1"></circle></svg>
);

const skillIconMap = {
    "Go": GoIcon,
    "Python": PythonIcon,
    "AWS": AWSIcon,
    "Kubernetes": KubernetesIcon,
    // Add other skills from your DB here to map them to icons
};

const Portfolio = () => {
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

    if (loading) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-blue-600 font-medium">Loading Portfolio...</div>;
    }
    if (error) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-red-600 p-8 text-center font-medium">{error}</div>;
    }
    if (!userData) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-600 font-medium">Profile data could not be loaded.</div>;
    }

    const validExperience = userData.experience?.filter(e => e.role && e.company) || [];
    const validSkills = userData.skills?.filter(s => skillIconMap[s]) || [];
    const validProjects = userData.projects?.filter(p => p.name) || [];
    const validEducation = userData.education?.filter(e => e.instituteName) || [];

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                    scroll-behavior: smooth;
                }
            `}</style>
            <div className="bg-slate-50 text-slate-800 font-sans -mt-18 pt-16">
                <div className="container mx-auto px-6">

                    <main>
                        <section className="py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">{userData.title || "Senior Software Engineer"}</h1>
                                {userData.bio && <p className="mt-6 text-xl text-slate-600">{userData.bio}</p>}
                                <div className="mt-8 flex gap-5">
                                    {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors"><FaLinkedin className="w-8 h-8" /></a>}
                                    {userData.socialLinks?.github && <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors"><FaGithub className="w-8 h-8" /></a>}
                                    {userData.socialLinks?.x && <a href={userData.socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors"><FaXTwitter className="w-8 h-8" /></a>}
                                    <a href="#contact" className="text-slate-500 hover:text-blue-700 transition-colors"><EnvelopeIcon className="w-8 h-8" /></a>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <img 
                                    src={userData.profilePhoto || `https://placehold.co/400x400/e2e8f0/475569?text=${userData.fullName?.split(' ').map(n=>n[0]).join('')}`} 
                                    alt={userData.fullName || 'Profile'}
                                    className="rounded-full shadow-2xl w-80 h-80 object-cover" 
                                />
                            </div>
                        </section>

                        {validExperience.length > 0 && (
                            <section id="experience" className="py-20 bg-white rounded-2xl shadow-sm px-8 my-16">
                                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Professional Experience</h2>
                                <div className="max-w-3xl mx-auto relative">
                                    <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-200"></div>
                                    <div className="space-y-16">
                                        {validExperience.map((exp, index) => (
                                            <div key={index} className="relative pl-12">
                                                <div className="absolute left-0 top-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center ring-8 ring-white">
                                                    <BriefcaseIcon className="w-4 h-4"/>
                                                </div>
                                                <h3 className="text-2xl font-bold">{exp.role}, {exp.company}</h3>
                                                <p className="text-slate-500 font-medium">{exp.startDate} - {exp.endDate || 'Present'}</p>
                                                <p className="mt-2 text-slate-600">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {validProjects.length > 0 && (
                             <section id="projects" className="py-20">
                                <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Featured Projects</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    {validProjects.map((project, index) => (
                                        <a href={project.link || '#'} key={index} target="_blank" rel="noopener noreferrer" className="block p-8 bg-white rounded-2xl shadow-sm border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                                    <FolderDotIcon className="w-6 h-6 text-slate-500" />
                                                </div>
                                                <h3 className="font-bold text-xl text-slate-900">{project.name}</h3>
                                            </div>
                                            <p className="text-slate-600">{project.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </section>
                        )}

                        {validSkills.length > 0 && (
                            <section id="skills" className="py-20">
                                <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Core Technologies</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                    {validSkills.map(skillName => {
                                        const SkillIcon = skillIconMap[skillName];
                                        return (
                                            <div key={skillName} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-slate-300 transition-all duration-300">
                                                <SkillIcon className="h-16 w-16 mb-4" />
                                                <h3 className="font-semibold text-lg">{skillName}</h3>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}

                        {validEducation.length > 0 && (
                            <section id="education" className="py-20 bg-white rounded-2xl shadow-sm px-8 my-16">
                                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Education</h2>
                                <div className="max-w-3xl mx-auto relative">
                                    <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-200"></div>
                                    <div className="space-y-16">
                                        {validEducation.map((edu, index) => (
                                            <div key={index} className="relative pl-12">
                                                <div className="absolute left-0 top-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center ring-8 ring-white">
                                                    <BookOpenIcon className="w-4 h-4"/>
                                                </div>
                                                <h3 className="text-2xl font-bold">{edu.instituteName}</h3>
                                                <p className="text-slate-500 font-medium">{edu.startDate} - {edu.endDate}</p>
                                                <p className="mt-2 text-slate-700 font-semibold">{edu.degree}, {edu.fieldOfStudy}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}


                        <section id="contact" className="py-20 my-16 text-center">
                            <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                I am currently available for new opportunities. Please feel free to contact me for consulting or full-time roles.
                            </p>
                            <a href={`mailto:${userData.email}`} className="mt-8 inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300">
                                {userData.email}
                            </a>
                        </section>
                    </main>
                    
                    <footer className="text-center py-8 border-t border-slate-200 text-slate-500">
                        <p>&copy; {new Date().getFullYear()} {userData.fullName}. All Rights Reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    );
};
export default Portfolio;