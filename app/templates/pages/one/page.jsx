"use client";

import React, { useEffect, useState } from "react";

// --- SVG Icon Components ---
const FaGithub = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}>
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z" />
  </svg>
);

const FaLinkedin = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// --- Hook for animation ---
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
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isVisible];
};

// --- Components ---
const AnimatedSection = ({ id, children, className }) => {
  const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  return (
    <section
      ref={setRef}
      id={id}
      className={`py-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-secondary rounded-lg p-6 border border-secondary transition-all duration-300 hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5">
    <header className="flex justify-between items-center mb-4">
      <div className="text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>
      <div className="flex items-center gap-4 text-slate">
        {project.githubUrl && <a href={project.githubUrl} className="hover:text-accent transition-colors"><FaGithub className="w-5 h-5" /></a>}
        {project.liveUrl && <a href={project.liveUrl} className="hover:text-accent transition-colors"><ExternalLinkIcon className="w-5 h-5" /></a>}
      </div>
    </header>
    <h3 className="text-xl font-bold text-light-slate mb-2 transition-colors duration-300 hover:text-accent cursor-pointer">{project.name}</h3>
    <p className="text-slate mb-4 text-[17px] leading-relaxed">{project.description}</p>
    <footer className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate">
      {project.tags?.map(tag => <span key={tag}>{tag}</span>)}
    </footer>
  </div>
);

// --- Portfolio Page ---
const Portfolio = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/profile");
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (!userData) {
    return <div className="min-h-screen flex items-center justify-center text-accent text-xl">Loading profile...</div>;
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Roboto+Mono:wght@400&display=swap');
        body { font-family: 'Poppins', sans-serif; background-color: #0A192F; color: #CCD6F6; }
        .font-mono { font-family: 'Roboto Mono', monospace; }
        .text-accent { color: #64FFDA; }
        .bg-primary { background-color: #0A192F; }
        .bg-secondary { background-color: #112240; }
        .border-secondary { border-color: #233554; }
        .text-light-slate { color: #CCD6F6; }
        .text-slate { color: #8892B0; }
      `}</style>

      <div className="min-h-screen">
        <main className="container mx-auto px-6 pt-30">
          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col justify-center">
            <p className="text-accent mb-4 text-lg">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-black text-light-slate leading-tight">{userData.fullName || "Your Name"}</h1>
            <h2 className="text-4xl md:text-6xl font-black text-slate leading-tight mt-2">{userData.title || "I build performant software."}</h2>
            <p className="mt-6 text-xl text-slate max-w-2xl">{userData.bio || "Software engineer specialized in high-performance, accessible, and privacy-first experiences."}</p>
            <div className="mt-10">
              <a href="#work" className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent/10 transition-colors duration-300 text-lg">
                Check Out My Work
              </a>
            </div>
          </section>

          {/* Skills Section */}
          {userData.skills?.length > 0 && (
            <AnimatedSection id="skills">
              <div className="bg-secondary rounded-lg p-10 border border-secondary transition-all duration-300 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5">
                <h2 className="flex items-center gap-4 text-3xl font-bold text-light-slate mb-10">
                  <span className="text-accent font-mono text-2xl">01.</span> My Skills
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {Object.entries(userData.skillsObj || {}).map(([title, skills]) => (
                    <div key={title}>
                      <h3 className="text-xl font-bold text-light-slate mb-4">{title}</h3>
                      <ul className="space-y-2">
                        {skills.map(skill => (
                          <li key={skill} className="text-slate font-mono text-sm before:content-['▹'] before:mr-2 before:text-accent">{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Projects Section */}
          {userData.projects?.length > 0 && (
            <AnimatedSection id="work">
              <div className="bg-secondary rounded-lg p-10 border border-secondary transition-all duration-300 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5">
                <h2 className="flex items-center gap-4 text-3xl font-bold text-light-slate mb-10">
                  <span className="text-accent font-mono text-2xl">02.</span> Featured Work
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {userData.projects.slice(0, 2).map(p => (
                    <ProjectCard
                      key={p._id}
                      project={{
                        name: p.name,
                        description: p.description,
                        liveUrl: p.link,
                        githubUrl: p.githubUrl,
                        tags: p.tags || [],
                      }}
                    />
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6">
                  {userData.projects.slice(2).map(p => (
                    <ProjectCard
                      key={p._id}
                      project={{
                        name: p.name,
                        description: p.description,
                        liveUrl: p.link,
                        githubUrl: p.githubUrl,
                        tags: p.tags || [],
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Contact Section */}
          <AnimatedSection id="contact">
            <div className="bg-secondary rounded-lg p-10 border border-secondary transition-all duration-300 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 text-center max-w-2xl mx-auto">
              <p className="text-accent font-mono mb-4">03. What's Next?</p>
              <h2 className="text-5xl font-black text-light-slate">Get In Touch</h2>
              <p className="mt-6 text-lg text-slate">{userData.contact || "I'm always interested in new projects and collaborations."}</p>
              {userData.email && (
                <a href={`mailto:${userData.email}`} className="mt-10 inline-block px-8 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent/10 transition-colors duration-300">
                  Say Hello
                </a>
              )}
            </div>
          </AnimatedSection>

          {/* Footer */}
          <footer className="text-center py-10 mt-20 text-slate font-mono text-sm">
            <div className="flex justify-center gap-6 mb-4 text-2xl">
              {userData.socialLinks?.github && <a href={userData.socialLinks.github} className="hover:text-accent transition-colors"><FaGithub /></a>}
              {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} className="hover:text-accent transition-colors"><FaLinkedin /></a>}
            </div>
            <p>Designed & Built by {userData.fullName || "Your Name"} &copy; {new Date().getFullYear()}</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
