"use client";

import React, { useEffect, useState } from "react";

// --- SVG Icon Components ---
const FaGithub = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z" /></svg>
);
const FaLinkedin = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
);
const FaXTwitter = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
);
const ExternalLinkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const MapPinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

// --- Hook for animation on scroll ---
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

// --- Reusable Components ---
const AnimatedSection = ({ id, children, className }) => {
  const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  return (
    <section ref={setRef} id={id} className={`py-24 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
      {children}
    </section>
  );
};

const AnimatedItem = ({ children, index }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return (
        <div ref={setRef} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
            {children}
        </div>
    );
}

const SectionHeader = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-light-slate whitespace-nowrap">
            <span className="text-accent font-mono text-2xl mr-3">{number}.</span>{title}
        </h2>
        <div className="w-full h-px bg-slate/30"></div>
    </div>
);

const ProjectCard = ({ project }) => (
  <div className="group bg-secondary/50 rounded-lg p-6 border border-transparent hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300">
    <header className="flex justify-between items-center mb-4">
      <div className="text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div className="flex items-center gap-4 text-slate">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaGithub className="w-5 h-5" /></a>}
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><ExternalLinkIcon className="w-5 h-5" /></a>}
      </div>
    </header>
    <h3 className="text-xl font-bold text-light-slate mb-2 group-hover:text-accent transition-colors duration-300">{project.name || "Project Name"}</h3>
    {project.description && <p className="text-slate text-base leading-relaxed mb-4">{project.description}</p>}
    {project.tags?.length > 0 && (
      <footer className="flex flex-wrap gap-2 pt-4 border-t border-slate/20">
        {project.tags.map(tag => (
            <span key={tag} className="bg-primary/50 px-3 py-1 rounded-full font-mono text-sm text-accent/80">
                {tag}
            </span>
        ))}
      </footer>
    )}
  </div>
);

const SideBar = ({ socialLinks, email }) => (
  <>
    <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-30">
        <div className="flex flex-col gap-6 text-slate text-2xl">
            {socialLinks?.github && <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transform hover:-translate-y-1 transition-all"><FaGithub /></a>}
            {socialLinks?.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transform hover:-translate-y-1 transition-all"><FaLinkedin /></a>}
            {socialLinks?.x && <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-accent transform hover:-translate-y-1 transition-all"><FaXTwitter /></a>}
        </div>
        <div className="w-px h-24 bg-slate/50 mt-6"></div>
    </div>
    <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-30">
        {email && <a href={`mailto:${email}`} className="font-mono text-sm tracking-widest [writing-mode:vertical-rl] text-slate hover:text-accent transform hover:-translate-y-1 transition-all">{email}</a>}
        <div className="w-px h-24 bg-slate/50 mt-6"></div>
    </div>
  </>
);

// --- Portfolio Page ---
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
    return <div className="min-h-screen bg-primary flex items-center justify-center text-accent text-xl font-mono">Loading...</div>;
  }
  if (error) {
    return <div className="min-h-screen bg-primary flex items-center justify-center text-red-400 text-lg p-8 text-center font-mono">{error}</div>;
  }
  if (!userData) {
    return <div className="min-h-screen bg-primary flex items-center justify-center text-accent text-xl font-mono">Profile not found.</div>;
  }

  const validExperience = userData.experience?.filter(exp => exp.company && exp.role) || [];
  const validProjects = userData.projects?.filter(p => p.name) || [];
  const validEducation = userData.education?.filter(edu => edu.instituteName) || [];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Fira+Code:wght@400;500&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #0A192F; color: #CCD6F6; scroll-behavior: smooth; }
        .font-mono { font-family: 'Fira Code', monospace; }
        .text-accent { color: #64FFDA; }
        .bg-primary { background-color: #0A192F; }
        .bg-secondary { background-color: #112240; }
        .border-secondary { border-color: #233554; }
        .text-light-slate { color: #CCD6F6; }
        .text-slate { color: #8892B0; }
      `}</style>
      
      <SideBar socialLinks={userData.socialLinks} email={userData.email} />

      <div className="min-h-screen bg-primary">
        <main className="container mx-auto px-6 md:px-24 lg:px-48">
          {/* Hero Section */}
          <section id="about" className="min-h-screen flex flex-col justify-center">
              <div>
                  <p className="text-accent mb-4 text-lg font-mono">Hi, my name is</p>
                  <h1 className="text-5xl md:text-7xl font-black text-light-slate leading-tight">
                    {userData.fullName || "Your Name"}
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-black text-slate leading-tight mt-2">I build things for the web.</h2>
                  {userData.bio && <p className="mt-6 text-lg text-slate max-w-2xl leading-relaxed">{userData.bio}</p>}
                  {userData.location && <p className="mt-4 text-slate flex items-center gap-2 font-medium"><MapPinIcon className="w-5 h-5 text-slate" /> {userData.location}</p>}
                  {userData.email && <div className="mt-12">
                      <a href={`mailto:${userData.email}`} className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent/10 transition-colors duration-300 text-lg">
                          Get In Touch
                      </a>
                  </div>}
              </div>
          </section>

          {/* Skills Section */}
          {userData.skills?.length > 0 && (
            <AnimatedSection id="skills">
                <SectionHeader number="01" title="My Skills" />
                <div className="bg-secondary/50 border border-slate/30 rounded-lg p-8">
                    <div className="flex flex-wrap gap-3">
                        {userData.skills.map((skill, index) => (
                            <AnimatedItem key={skill} index={index}>
                               <div className="bg-secondary/70 px-4 py-2 rounded-md font-mono text-accent/80 text-sm">
                                   {skill}
                               </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
          )}

          {/* Experience Section */}
          {validExperience.length > 0 && (
              <AnimatedSection id="experience">
                  <SectionHeader number="02" title="Work Experience" />
                   <div className="bg-secondary/50 border border-slate/30 rounded-lg p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {validExperience.map((exp, index) => (
                            <AnimatedItem key={index} index={index}>
                                <div className="group bg-secondary p-6 rounded-lg h-full">
                                    <h3 className="text-xl font-bold text-light-slate group-hover:text-accent transition-colors">{exp.role}</h3>
                                    <p className="text-accent font-medium">{exp.company}</p>
                                    <p className="font-mono text-sm text-slate/80 mt-2 mb-4">{exp.startDate} - {exp.endDate || 'Present'}</p>
                                    <p className="text-slate text-base leading-relaxed">{exp.description}</p>
                                </div>
                            </AnimatedItem>
                          ))}
                      </div>
                  </div>
              </AnimatedSection>
          )}

          {/* Projects Section */}
          {validProjects.length > 0 && (
            <AnimatedSection id="work">
              <SectionHeader number="03" title="Featured Work" />
              <div className="bg-secondary/50 border border-slate/30 rounded-lg p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {validProjects.map((p, index) => (
                      <AnimatedItem key={p._id} index={index}>
                        <ProjectCard project={p}/>
                      </AnimatedItem>
                    ))}
                  </div>
              </div>
            </AnimatedSection>
          )}

           {/* Education Section */}
           {validEducation.length > 0 && (
                <AnimatedSection id="education">
                    <SectionHeader number="04" title="Education" />
                     <div className="bg-secondary/50 border border-slate/30 rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {validEducation.map((edu, index) => (
                                 <AnimatedItem key={index} index={index}>
                                    <div className="group bg-secondary p-6 rounded-lg h-full">
                                        <h3 className="text-xl font-bold text-light-slate group-hover:text-accent transition-colors">{edu.instituteName}</h3>
                                        <p className="text-slate font-medium mt-1">{edu.degree}, {edu.fieldOfStudy}</p>
                                        <p className="font-mono text-sm text-slate/80 mt-2">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                 </AnimatedItem>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            )}

          {/* Contact Section */}
          <AnimatedSection id="contact">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-accent font-mono mb-4">05. What's Next?</p>
              <h2 className="text-5xl font-black text-light-slate">Get In Touch</h2>
              <p className="mt-6 text-lg text-slate leading-relaxed">My inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I'll do my best to get back to you!</p>
              {userData.email && (
                <a href={`mailto:${userData.email}`} className="mt-10 inline-block px-10 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent/10 transition-colors duration-300">
                  Say Hello
                </a>
              )}
            </div>
          </AnimatedSection>

          {/* Footer */}
          <footer className="text-center py-10 mt-16 text-slate/60 font-mono text-sm">
            <div className="md:hidden flex justify-center gap-6 mb-4 text-2xl">
              {userData.socialLinks?.github && <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>}
              {userData.socialLinks?.linkedin && <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>}
              {userData.socialLinks?.x && <a href={userData.socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaXTwitter /></a>}
            </div>
            <p>Designed & Built by {userData.fullName || "Your Name"} &copy; {new Date().getFullYear()}</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
