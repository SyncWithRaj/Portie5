import mongoose from "mongoose";
import { notFound } from "next/navigation";
import { BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import UserProfile from "@/app/lib/models/UserProfile";

// Helper function to connect to MongoDB
async function connectDB() {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGODB_URI);
}

// Reusable Section component for consistent styling
const Section = ({ title, icon, children }) => (
    <section className="mb-12">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
            {icon}
            {title}
        </h2>
        <div className="space-y-6">
            {children}
        </div>
    </section>
);

// Component for rendering timeline items (Experience & Education)
const TimelineItem = ({ title, subtitle, date, details }) => (
    <div className="pl-6 border-l-2 border-indigo-500 relative">
        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-900 rounded-full border-2 border-indigo-500"></div>
        <p className="text-sm text-gray-400 mb-1">{date}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-md text-gray-300 mb-2">{subtitle}</p>
        {details && <p className="text-gray-400 text-sm whitespace-pre-line">{details}</p>}
    </div>
);


export default async function PortfolioPage({ params }) {
    await connectDB();
    const { userId } = params;

    const profile = await UserProfile.findOne({ userId }).lean();

    if (!profile) {
        notFound(); // Renders the 404 page if no profile is found
    }

    const { fullName, title, bio, location, email, phone, profilePhoto, skills, experience, education, projects, socialLinks } = profile;

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans antialiased -mt-18 pt-18">
            <main className="max-w-4xl mx-auto px-4 py-16">
                {/* --- Hero Section --- */}
                <header className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    {profilePhoto && (
                        <img
                            src={profilePhoto}
                            alt={fullName}
                            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                        />
                    )}
                    <div>
                        <h1 className="text-5xl font-extrabold text-white">{fullName}</h1>
                        <p className="text-2xl text-indigo-400 font-medium mt-1">{title}</p>
                        <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
                            {location && <span className="flex items-center gap-2"><MapPinIcon className="w-4 h-4" />{location}</span>}
                            {email && <span className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4" />{email}</span>}
                            {phone && <span className="flex items-center gap-2"><PhoneIcon className="w-4 h-4" />{phone}</span>}
                        </div>
                        <div className="flex gap-5 mt-5">
                            {socialLinks?.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><FaLinkedin size={24} /></a>}
                            {socialLinks?.github && <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><FaGithub size={24} /></a>}
                            {socialLinks?.x && <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><FaTwitter size={24} /></a>}
                            {socialLinks?.portfolio && <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><FaGlobe size={24} /></a>}
                        </div>
                    </div>
                </header>

                {/* --- About Section --- */}
                {bio && (
                     <section className="mb-12">
                         <p className="text-gray-300 text-lg leading-relaxed">{bio}</p>
                     </section>
                )}


                {/* --- Skills Section --- */}
                {skills && skills.length > 0 && (
                    <Section title="Skills" icon={<CodeBracketIcon className="w-7 h-7" />}>
                         <div className="flex flex-wrap gap-3">
                            {skills.map(skill => (
                                <div key={skill.name} className="bg-gray-800 text-indigo-300 font-medium px-4 py-2 rounded-md text-sm">{skill.name}</div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* --- Experience Section --- */}
                {experience && experience.length > 0 && (
                     <Section title="Work Experience" icon={<BriefcaseIcon className="w-7 h-7" />}>
                        {experience.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                title={exp.role}
                                subtitle={exp.company}
                                date={`${exp.startDate} - ${exp.endDate || 'Present'}`}
                                details={exp.description}
                            />
                        ))}
                    </Section>
                )}


                {/* --- Education Section --- */}
                {education && education.length > 0 && (
                    <Section title="Education" icon={<AcademicCapIcon className="w-7 h-7" />}>
                        {education.map((edu, index) => (
                             <TimelineItem
                                key={index}
                                title={edu.degree}
                                subtitle={`${edu.instituteName} - ${edu.fieldOfStudy}`}
                                date={`${edu.startDate} - ${edu.endDate}`}
                            />
                        ))}
                    </Section>
                )}

                {/* --- Projects Section --- */}
                {projects && projects.length > 0 && (
                    <Section title="Projects" icon={<CodeBracketIcon className="w-7 h-7" />}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((proj, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                                    <p className="text-gray-400 mb-4">{proj.description}</p>
                                    <div className="flex gap-4">
                                        {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Live Demo</a>}
                                        {proj.githubUrl && <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">GitHub</a>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}
            </main>
        </div>
    );
}