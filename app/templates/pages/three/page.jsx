"use client";

import React, { useEffect, useRef, useState } from 'react';

// --- SVG Icon Components ---
const FaGithub = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z" /></svg>
);
const FaLinkedin = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
);
const FaTwitter = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
);

// --- Custom Hooks & Components ---

const useOnScreen = (options) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        observer.observe(ref);
        return () => { if (ref) observer.unobserve(ref); };
    }, [ref, options]);

    return [setRef, isVisible];
};

const AnimatedSection = ({ id, children, className }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return (
        <section
            ref={setRef}
            id={id}
            className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
        >
            {children}
        </section>
    );
};

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const render = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00f0a0'; // Neon green
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-20"></canvas>;
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
        return <div className="min-h-screen bg-[#010409] flex items-center justify-center text-cyan-300 text-xl font-mono">Loading Systems...</div>;
    }
    if (error) {
        return <div className="min-h-screen bg-[#010409] flex items-center justify-center text-red-400 text-lg p-8 text-center font-mono">ERROR: {error}</div>;
    }
    if (!userData) {
        return <div className="min-h-screen bg-[#010409] flex items-center justify-center text-cyan-300 text-xl font-mono">Access Denied. Profile not found.</div>;
    }

    const validProjects = userData.projects?.filter(p => p.name) || [];
    const validExperience = userData.experience?.filter(e => e.role && e.company) || [];

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Orbitron:wght@900&display=swap');
                
                body {
                    font-family: 'Roboto Mono', monospace;
                    background: #010409;
                    color: #c9d1d9;
                }

                .font-orbitron {
                    font-family: 'Orbitron', sans-serif;
                }
                
                .holographic {
                    background: rgba(16, 26, 42, 0.5);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 240, 160, 0.2);
                    position: relative;
                }
                .holographic:before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(45deg, rgba(0, 240, 160, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
                    opacity: 0;
                    transition: opacity 0.5s;
                    pointer-events: none;
                    z-index: 1;
                }
                .holographic:hover:before {
                    opacity: 1;
                }
                .holographic-content {
                    position: relative;
                    z-index: 2;
                }

                .glitch-layers {
                    position: relative;
                }
                .glitch-layers:before,
                .glitch-layers:after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: #010409;
                    overflow: hidden;
                }
                .glitch-layers:before {
                    left: 2px;
                    text-shadow: -1px 0 #ff00ff;
                    animation: glitch-anim-1 2s infinite linear alternate-reverse;
                }
                .glitch-layers:after {
                    left: -2px;
                    text-shadow: -1px 0 #00f0a0;
                    animation: glitch-anim-2 2s infinite linear alternate-reverse;
                }

                @keyframes glitch-anim-1 { 0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); } 10% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); } 20% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); } 30% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); } 40% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); } 50% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); } 60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); } 70% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); } 80% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); } 90% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); } 100% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); } }
                @keyframes glitch-anim-2 { 0% { clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%); } 10% { clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%); } 20% { clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); } 30% { clip-path: polygon(0 25%, 100% 25%, 100% 25%, 0 25%); } 40% { clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%); } 50% { clip-path: polygon(0 65%, 100% 65%, 100% 66%, 0 66%); } 60% { clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%); } 70% { clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); } 80% { clip-path: polygon(0 35%, 100% 35%, 100% 36%, 0 36%); } 90% { clip-path: polygon(0 75%, 100% 75%, 100% 76%, 0 76%); } 100% { clip-path: polygon(0 55%, 100% 55%, 100% 60%, 0 60%); } }
            `}</style>
            <div className="bg-[#010409] min-h-screen -mt-18">


                <main className="container mx-auto px-6">
                    <section className="min-h-screen flex items-center justify-center text-center relative">
                        <MatrixRain />
                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-black font-orbitron uppercase text-slate-100">
                                <span className="glitch-layers" data-text={userData.fullName || "Your Name"}>{userData.fullName || "Your Name"}</span>
                            </h1>
                            <p className="mt-4 text-xl md:text-2xl text-cyan-300 tracking-wider">{userData.title || "Cybersecurity & Blockchain Developer"}</p>
                            <div className="mt-10 flex justify-center gap-6 text-2xl text-slate-500">
                                {userData.socialLinks?.github && <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors"><FaGithub /></a>}
                                {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors"><FaLinkedin /></a>}
                                {userData.socialLinks?.x && <a href={userData.socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors"><FaTwitter /></a>}
                            </div>
                        </div>
                    </section>

                    {userData.bio && (
                        <AnimatedSection id="about">
                            <h2 className="text-4xl font-bold font-orbitron text-center mb-12 text-cyan-300 tracking-widest">_About_Me</h2>
                            <div className="max-w-4xl mx-auto holographic rounded-lg p-8">
                                <p className="text-lg leading-relaxed text-slate-300 holographic-content">
                                    {userData.bio}
                                </p>
                            </div>
                        </AnimatedSection>
                    )}

                    {userData.skills?.length > 0 && (
                        <AnimatedSection id="skills">
                            <h2 className="text-4xl font-bold font-orbitron text-center mb-12 text-cyan-300 tracking-widest">_Skill_Matrix</h2>
                            <div className="holographic rounded-lg p-8 max-w-4xl mx-auto">
                                <div className="holographic-content flex flex-wrap justify-center gap-3">
                                    {userData.skills.map(skill => (
                                        <div key={skill} className="text-sm bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    )}

                    {validProjects.length > 0 && (
                        <AnimatedSection id="projects">
                            <h2 className="text-4xl font-bold font-orbitron text-center mb-12 text-cyan-300 tracking-widest">_Project_Archive</h2>
                            <div className="space-y-8">
                                {validProjects.map(p => (
                                    <div key={p.name} className="holographic rounded-lg p-6 group">
                                        <div className="holographic-content">
                                            <h3 className="text-2xl font-bold text-slate-100 font-orbitron">{p.name}</h3>
                                            <p className="text-slate-400 mt-2 mb-4">{p.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {validExperience.length > 0 && (
                        <AnimatedSection id="experience">
                            <h2 className="text-4xl font-bold font-orbitron text-center mb-16 text-cyan-300 tracking-widest">_Career_File</h2>
                            <div className="max-w-3xl mx-auto relative border-l-2 border-cyan-300/30 pl-10">
                                {validExperience.map(e => (
                                    <div key={e.company} className="mb-12 last:mb-0">
                                        <div className="absolute -left-2.5 top-1 w-5 h-5 bg-cyan-300 rounded-full border-4 border-[#010409]"></div>
                                        <p className="text-sm text-slate-500">{e.startDate} - {e.endDate || 'Present'}</p>
                                        <h3 className="text-xl font-bold text-slate-100 mt-1">{e.role}</h3>
                                        <h4 className="font-semibold text-cyan-400">{e.company}</h4>
                                        <p className="mt-2 text-slate-400">{e.description}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    <AnimatedSection id="contact" className="text-center">
                        <h2 className="text-4xl font-bold font-orbitron text-cyan-300 tracking-widest">_Contact</h2>
                        <p className="mt-6 max-w-xl mx-auto text-lg text-slate-400">
                            Open to collaborating on challenging projects. Reach out to connect.
                        </p>
                        <a href={`mailto:${userData.email}`} className="mt-8 inline-block px-8 py-3 border-2 border-cyan-300 text-cyan-300 font-bold tracking-widest uppercase hover:bg-cyan-300 hover:text-[#010409] transition-all duration-300">
                            Initiate Comms
                        </a>
                    </AnimatedSection>

                    <footer className="text-center py-10 mt-20 border-t border-cyan-300/20 text-slate-600 text-sm">
                        <p>{userData.fullName || 'User'} &copy; {new Date().getFullYear()}. All systems operational.</p>
                    </footer>
                </main>
            </div>
        </>
    );
};

export default Portfolio;