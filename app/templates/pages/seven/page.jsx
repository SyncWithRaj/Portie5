"use client";

import React, { useState, useEffect } from 'react';

// --- SVG Icon Components ---
const GithubIcon = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"></path></svg>
);
const LinkedinIcon = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const TwitterIcon = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
);
const BriefcaseIcon = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const UniversityIcon = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 10h18M3 6h18M3 14h18M3 18h18M12 3v18"></path><path d="M20.2 11.8l-8.2 4.4-8.2-4.4"></path><path d="M12 21l8.2-4.4M3.8 16.2L12 21l8.2-4.8"></path></svg>
);


const HomePage = () => {
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
        return <div className="min-h-screen bg-[#111827] flex items-center justify-center text-purple-400">Loading Profile...</div>;
    }
    if (error) {
        return <div className="min-h-screen bg-[#111827] flex items-center justify-center text-red-400 p-8 text-center">{error}</div>;
    }
    if (!userData) {
        return <div className="min-h-screen bg-[#111827] flex items-center justify-center text-gray-400">Could not load profile data.</div>;
    }

    const validExperience = userData.experience?.filter(e => e.role && e.company) || [];
    const validEducation = userData.education?.filter(e => e.instituteName && e.degree) || [];
    const validProjects = userData.projects?.filter(p => p.name) || [];

    const timelineItems = [
        ...validExperience.map(item => ({...item, type: 'work'})),
        ...validEducation.map(item => ({...item, type: 'education'}))
    ].sort((a, b) => (new Date(b.startDate) - new Date(a.startDate)));

    return (
        <main className="bg-[#111827] text-white min-h-screen font-sans -mt-18 pt-39">
        

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 pb-60">
                <div>
                    <p className="uppercase text-purple-400 font-semibold tracking-widest mb-2">
                        Welcome to my world ✨
                    </p>
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-snug">
                        Hi, I'm <span className="text-purple-400 transition">{userData.fullName || 'Your Name'}</span>
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold mt-3 text-gray-300">
                        {userData.title || 'Full Stack Developer'}
                    </h3>
                    <p className="text-gray-400 mt-6 max-w-lg">
                       {userData.bio || 'Passionate about building intuitive and visually appealing digital experiences.'}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a href="#projects" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-md hover:shadow-purple-500/30 transition">
                            My Projects
                        </a>
                    </div>
                    <div className="flex gap-5 mt-8 text-2xl text-gray-400">
                        {userData.socialLinks?.github && <a href={userData.socialLinks.github} aria-label="GitHub Profile" className="hover:text-purple-400 cursor-pointer transition"><GithubIcon /></a>}
                        {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} aria-label="LinkedIn Profile" className="hover:text-purple-400 cursor-pointer transition"><LinkedinIcon /></a>}
                        {userData.socialLinks?.x && <a href={userData.socialLinks.x} aria-label="Twitter Profile" className="hover:text-purple-400 cursor-pointer transition"><TwitterIcon /></a>}
                    </div>
                </div>
                <div className="mt-10 md:mt-0 relative">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                        <img
                            src={userData.profilePhoto || `https://placehold.co/384x384/111827/c084fc?text=${userData.fullName?.split(' ').map(n=>n[0]).join('')}`}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </section>

            {/* About & Skills Section */}
            <section id="about" className="px-10 md:px-20 py-20 bg-[#1f2937]/30 border-y border-gray-700/20">
                <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">About Me</h2>
                <p className="text-gray-300 max-w-3xl leading-relaxed mx-auto text-center">
                    {userData.bio || "I am a dedicated software engineer with a passion for problem-solving and crafting innovative digital experiences."}
                </p>
                {userData.skills?.length > 0 &&
                    <>
                        <h3 id="skills" className="text-3xl font-bold text-purple-400 mt-16 mb-8 text-center">My Skills</h3>
                        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                            {userData.skills.map(skill => (
                                <span key={skill} className="bg-gray-700 text-purple-300 px-4 py-2 rounded-lg font-medium">{skill}</span>
                            ))}
                        </div>
                    </>
                }
            </section>

            {/* Experience & Education Timeline */}
            {timelineItems.length > 0 && (
                 <section id="experience" className="px-10 md:px-20 py-20">
                    <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">My Journey</h2>
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700"></div>
                        {timelineItems.map((item, idx) => (
                             <div key={idx} className="relative pl-12 pb-12 last:pb-0">
                                <div className="absolute left-0.5 top-1 w-7 h-7 bg-[#111827] border-2 border-purple-500 rounded-full flex items-center justify-center">
                                    {item.type === 'work' ? <BriefcaseIcon className="text-purple-400" height="14" width="14"/> : <UniversityIcon className="text-purple-400" height="14" width="14"/>}
                                </div>
                                <p className="text-sm font-medium text-gray-500">{item.startDate} - {item.endDate || (item.type === 'work' ? 'Present' : 'Year')}</p>
                                <h3 className="text-xl font-bold text-purple-300 mt-1">{item.type === 'work' ? item.role : item.degree}</h3>
                                <h4 className="font-semibold text-gray-400">{item.type === 'work' ? item.company : item.instituteName}</h4>
                                <p className="mt-2 text-gray-400">{item.type === 'work' ? item.description : item.fieldOfStudy}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects Section */}
            {validProjects.length > 0 && (
                <section id="projects" className="px-10 md:px-20 py-20 bg-[#1f2937]/30 border-t border-gray-700/20">
                    <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">My Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {validProjects.map((project) => (
                             <div key={project._id} className="bg-[#1f2937] p-8 rounded-xl shadow-md hover:shadow-purple-500/20 hover:scale-105 transition border border-gray-700">
                                <h3 className="text-2xl font-semibold text-purple-300 mb-3">{project.name}</h3>
                                <p className="text-gray-400">{project.description}</p>
                             </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Contact Section */}
            <section id="contact" className="px-10 md:px-20 py-20 text-center">
                 <h2 className="text-4xl font-bold text-purple-400 mb-6">Contact Me</h2>
                 <p className="text-gray-300 max-w-2xl leading-relaxed mx-auto">
                     I'm currently open to new opportunities and collaborations. Feel free to reach out!
                 </p>
                 <a href={`mailto:${userData.email}`} className="mt-8 inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-md hover:shadow-purple-500/30 transition">
                    {userData.email}
                </a>
            </section>

            <footer className="text-center py-10 border-t border-gray-700/20 bg-[#111827]">
                <p className="text-gray-400">© {new Date().getFullYear()} {userData.fullName}. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default HomePage;