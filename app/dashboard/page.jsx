"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircleIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, LinkIcon, PlusIcon, TrashIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

// --- Reusable UI Components ---

const TabButton = ({ label, icon, isActive, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
            isActive
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`}
    >
        {icon}
        {label}
    </button>
);

const Input = ({ name, type = "text", placeholder, value, onChange, required = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-1">
            {placeholder}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
        />
    </div>
);

const Toast = ({ message, type, onClose }) => (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed top-5 right-5 flex items-center gap-3 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}
    >
        {type === 'success' ? <CheckCircleIcon className="w-6 h-6 text-white" /> : <ExclamationCircleIcon className="w-6 h-6 text-white" />}
        <p className="text-white font-semibold">{message}</p>
        <button onClick={onClose} className="text-white/70 hover:text-white">&times;</button>
    </motion.div>
);

// --- Main Dashboard Component ---

export default function DashboardPage() {
    const { user } = useUser();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("profile");
    const [toast, setToast] = useState(null);

    // Form state initialization
    const initialFormState = {
        fullName: "", email: "", phone: "", location: "", profilePhoto: "", bio: "",
        skills: [],
        socialLinks: { linkedin: "", x: "", github: "", portfolio: "" },
        education: [{ instituteName: "", degree: "", startDate: "", endDate: "", fieldOfStudy: "" }],
        experience: [{ company: "", role: "", startDate: "", endDate: "", description: "" }],
        projects: [{ name: "", description: "", link: "" }],
    };
    const [form, setForm] = useState(initialFormState);

    // Fetch user profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch("/api/dashboard");
                if (res.ok) {
                    const data = await res.json();
                    setForm({
                        fullName: data.fullName || user?.fullName || "",
                        email: data.email || user?.emailAddresses?.[0]?.emailAddress || "",
                        phone: data.phone || "",
                        location: data.location || "",
                        profilePhoto: data.profilePhoto || "",
                        bio: data.bio || "",
                        skills: data.skills || [],
                        socialLinks: data.socialLinks || initialFormState.socialLinks,
                        education: data.education?.length ? data.education : initialFormState.education,
                        experience: data.experience?.length ? data.experience : initialFormState.experience,
                        projects: data.projects?.length ? data.projects : initialFormState.projects,
                    });
                } else {
                     setForm(prev => ({ ...prev, fullName: user?.fullName || "", email: user?.emailAddresses?.[0]?.emailAddress || "" }));
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
                showToast("Could not fetch profile data.", "error");
            } finally {
                setLoading(false);
            }
        };
        if (user) fetchProfile();
    }, [user]);

    // Handlers
    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSocialChange = (e) => setForm({ ...form, socialLinks: { ...form.socialLinks, [e.target.name]: e.target.value } });
    
    const handleDynamicChange = (section, index, e) => {
        const updatedSection = [...form[section]];
        updatedSection[index][e.target.name] = e.target.value;
        setForm({ ...form, [section]: updatedSection });
    };

    const addDynamicField = (section) => {
        const newField = { ...initialFormState[section][0] };
        Object.keys(newField).forEach(key => newField[key] = "");
        setForm({ ...form, [section]: [...form[section], newField] });
    };

    const removeDynamicField = (section, index) => {
        const updatedSection = form[section].filter((_, i) => i !== index);
        setForm({ ...form, [section]: updatedSection });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { ...form, skills: Array.isArray(form.skills) ? form.skills : form.skills.split(",").map((s) => s.trim()) };
        try {
            const res = await fetch("/api/dashboard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });
            const data = await res.json();
            if (data.success) {
                showToast("Profile saved successfully!", "success");
            } else {
                showToast(data.error || "Error saving profile", "error");
            }
        } catch (err) {
            showToast("An unexpected error occurred.", "error");
        }
    };

    // --- Loading Skeleton ---
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 py-12 pt-20 animate-pulse">
                <div className="max-w-6xl mx-auto p-6 space-y-8 bg-gray-800/50 rounded-2xl">
                    <div className="h-10 bg-gray-700 rounded w-1/3 mx-auto"></div>
                    <div className="h-12 bg-gray-700 rounded w-full"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 bg-gray-700 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-32 bg-gray-700 rounded"></div>
                </div>
            </div>
        );
    }

    // --- Render Content ---
    const renderTabContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
                            <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                            <Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
                            <Input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
                        </div>
                        <Input name="profilePhoto" placeholder="Profile Photo URL" value={form.profilePhoto} onChange={handleChange} />
                         <div>
                            <label htmlFor="skills" className="block text-sm font-medium text-gray-400 mb-1">Skills (comma separated)</label>
                            <input id="skills" name="skills" type="text" placeholder="React, Node.js, UI/UX" value={Array.isArray(form.skills) ? form.skills.join(", ") : form.skills} onChange={e => setForm({...form, skills: e.target.value})} className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition" />
                        </div>
                        <div>
                             <label htmlFor="bio" className="block text-sm font-medium text-gray-400 mb-1">About / Bio</label>
                             <textarea id="bio" name="bio" placeholder="Write something about yourself..." value={form.bio} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition resize-none" />
                        </div>
                    </motion.div>
                );
            case "experience":
            case "education":
            case "projects":
                const titles = { experience: "Work Experience", education: "Education", projects: "Projects" };
                const fieldConfigs = {
                    experience: [{name: 'company'}, {name: 'role'}, {name: 'startDate', type: 'date'}, {name: 'endDate', type: 'date'}, {name: 'description'}],
                    education: [{name: 'instituteName'}, {name: 'degree'}, {name: 'fieldOfStudy'}, {name: 'startDate', type: 'date'}, {name: 'endDate', type: 'date'}],
                    projects: [{name: 'name'}, {name: 'description'}, {name: 'link'}],
                };
                return (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h3 className="text-2xl font-bold text-white mb-6">{titles[activeTab]}</h3>
                        <div className="space-y-4">
                            <AnimatePresence>
                                {form[activeTab].map((item, index) => (
                                    <motion.div key={index} layout initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                             {fieldConfigs[activeTab].map(field => (
                                                 <Input key={field.name} name={field.name} placeholder={field.name.charAt(0).toUpperCase() + field.name.slice(1).replace(/([A-Z])/g, ' $1')} type={field.type || 'text'} value={item[field.name]} onChange={e => handleDynamicChange(activeTab, index, e)} />
                                             ))}
                                        </div>
                                        <button type="button" onClick={() => removeDynamicField(activeTab, index)} className="mt-4 text-red-500 hover:text-red-400 text-sm font-semibold flex items-center gap-1"><TrashIcon className="w-4 h-4" /> Remove</button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <button type="button" onClick={() => addDynamicField(activeTab)} className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-2"><PlusIcon className="w-5 h-5" /> Add New</button>
                        </div>
                    </motion.div>
                );
            case "socials":
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.keys(form.socialLinks).map(key => (
                                <Input key={key} name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} value={form.socialLinks[key]} onChange={handleSocialChange} />
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-4 pt-24 -mt-18">
            <AnimatePresence>
                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl ring-1 ring-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="text-3xl font-extrabold text-white">
                        My Dashboard
                    </h2>
                    <nav className="flex flex-wrap gap-2 p-2 bg-gray-900/50 rounded-lg">
                        <TabButton label="Profile" icon={<UserCircleIcon className="w-5 h-5" />} isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
                        <TabButton label="Experience" icon={<BriefcaseIcon className="w-5 h-5" />} isActive={activeTab === 'experience'} onClick={() => setActiveTab('experience')} />
                        <TabButton label="Education" icon={<AcademicCapIcon className="w-5 h-5" />} isActive={activeTab === 'education'} onClick={() => setActiveTab('education')} />
                        <TabButton label="Projects" icon={<CodeBracketIcon className="w-5 h-5" />} isActive={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
                        <TabButton label="Socials" icon={<LinkIcon className="w-5 h-5" />} isActive={activeTab === 'socials'} onClick={() => setActiveTab('socials')} />
                    </nav>
                </div>

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {renderTabContent()}
                    </AnimatePresence>
                </div>
                
                <div className="pt-6 border-t border-gray-700 flex justify-end">
                     <motion.button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        Save Changes
                    </motion.button>
                </div>
            </form>
        </div>
    );
}