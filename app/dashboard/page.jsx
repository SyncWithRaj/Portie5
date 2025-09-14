"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
    const { user } = useUser();

    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        profilePhoto: "",
        bio: "",
        skills: [],
        education: [],
        experience: [],
        projects: [],
        socialLinks: { linkedin: "", x: "", github: "", portfolio: "" },
    });

    const [educationFields, setEducationFields] = useState([]);
    const [experienceFields, setExperienceFields] = useState([]);
    const [projectFields, setProjectFields] = useState([]);

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
                        socialLinks: data.socialLinks || {
                            linkedin: "",
                            x: "",
                            github: "",
                            portfolio: "",
                        },
                    });
                    setEducationFields(
                        data.education?.length
                            ? data.education
                            : [{ instituteName: "", degree: "", startDate: "", endDate: "", fieldOfStudy: "" }]
                    );
                    setExperienceFields(
                        data.experience?.length
                            ? data.experience
                            : [{ company: "", role: "", startDate: "", endDate: "", description: "" }]
                    );
                    setProjectFields(
                        data.projects?.length
                            ? data.projects
                            : [{ name: "", description: "", link: "" }]
                    );
                } else {
                    setForm((prev) => ({
                        ...prev,
                        fullName: user?.fullName || "",
                        email: user?.emailAddresses?.[0]?.emailAddress || "",
                    }));
                    setEducationFields([{ instituteName: "", degree: "", startDate: "", endDate: "", fieldOfStudy: "" }]);
                    setExperienceFields([{ company: "", role: "", startDate: "", endDate: "", description: "" }]);
                    setProjectFields([{ name: "", description: "", link: "" }]);
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
            } finally {
                setLoading(false);
            }
        };

        if (user) fetchProfile();
    }, [user]);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSocialChange = (e) =>
        setForm({
            ...form,
            socialLinks: { ...form.socialLinks, [e.target.name]: e.target.value },
        });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...form,
            skills: Array.isArray(form.skills)
                ? form.skills
                : form.skills.split(",").map((s) => s.trim()),
            education: educationFields,
            experience: experienceFields,
            projects: projectFields,
        };

        try {
            const res = await fetch("/api/dashboard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            const data = await res.json();
            if (data.success) {
                alert("✅ Profile saved successfully!");
                console.log("Saved profile:", data.profile);
            } else {
                alert(data.error || "❌ Error saving profile");
            }
        } catch (err) {
            console.error("Error saving profile:", err);
            alert("❌ Error saving profile");
        }
    };

    const inputClass =
        "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition";

    if (loading) {
        return (
            <p className="text-center py-10 text-gray-500 dark:text-gray-400">
                Loading your dashboard...
            </p>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 -mt-18 pt-20">
            <form
                onSubmit={handleSubmit}
                className="max-w-6xl mx-auto p-6 space-y-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
            >
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    Student Dashboard
                </h2>
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className={inputClass} required />
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={inputClass} required />
                    <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={inputClass} />
                    <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className={inputClass} />
                    <input type="text" name="profilePhoto" placeholder="Profile Photo URL" value={form.profilePhoto} onChange={handleChange} className={inputClass} />
                    <input
                        type="text"
                        name="skills"
                        placeholder="Skills (comma separated)"
                        value={Array.isArray(form.skills) ? form.skills.join(",") : form.skills}
                        onChange={(e) => setForm({ ...form, skills: e.target.value })}
                        className={inputClass}
                    />
                </div>

                {/* Bio */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">About / Bio</h3>
                <textarea
                    name="bio"
                    placeholder="Write something about yourself..."
                    value={form.bio}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                />

                {/* Social Links */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Social Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.keys(form.socialLinks).map((key) => (
                        <input key={key} type="text" name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} value={form.socialLinks[key]} onChange={handleSocialChange} className={inputClass} />
                    ))}
                </div>

                {/* Education */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Education</h3>
                {educationFields.map((edu, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2 items-end">
                        <input type="text" placeholder="Institute Name" value={edu.instituteName} onChange={(e) => { const newEdu = [...educationFields]; newEdu[idx].instituteName = e.target.value; setEducationFields(newEdu); }} className={inputClass} />
                        <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => { const newEdu = [...educationFields]; newEdu[idx].degree = e.target.value; setEducationFields(newEdu); }} className={inputClass} />
                        <input type="text" placeholder="Field of Study" value={edu.fieldOfStudy} onChange={(e) => { const newEdu = [...educationFields]; newEdu[idx].fieldOfStudy = e.target.value; setEducationFields(newEdu); }} className={inputClass} />
                        <input type="date" value={edu.startDate} onChange={(e) => { const newEdu = [...educationFields]; newEdu[idx].startDate = e.target.value; setEducationFields(newEdu); }} className={inputClass} />
                        <input type="date" value={edu.endDate} onChange={(e) => { const newEdu = [...educationFields]; newEdu[idx].endDate = e.target.value; setEducationFields(newEdu); }} className={inputClass} />
                        <button type="button" className="text-red-500 font-bold hover:underline" onClick={() => setEducationFields(educationFields.filter((_, i) => i !== idx))}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" className="text-indigo-600 font-semibold hover:underline" onClick={() => setEducationFields([...educationFields, { instituteName: "", degree: "", startDate: "", endDate: "", fieldOfStudy: "" }])}>
                    + Add Education
                </button>

                {/* Experience */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Experience</h3>
                {experienceFields.map((exp, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2 items-end">
                        <input type="text" placeholder="Company" value={exp.company} onChange={(e) => { const newExp = [...experienceFields]; newExp[idx].company = e.target.value; setExperienceFields(newExp); }} className={inputClass} />
                        <input type="text" placeholder="Role" value={exp.role} onChange={(e) => { const newExp = [...experienceFields]; newExp[idx].role = e.target.value; setExperienceFields(newExp); }} className={inputClass} />
                        <input type="date" value={exp.startDate} onChange={(e) => { const newExp = [...experienceFields]; newExp[idx].startDate = e.target.value; setExperienceFields(newExp); }} className={inputClass} />
                        <input type="date" value={exp.endDate} onChange={(e) => { const newExp = [...experienceFields]; newExp[idx].endDate = e.target.value; setExperienceFields(newExp); }} className={inputClass} />
                        <input type="text" placeholder="Description" value={exp.description} onChange={(e) => { const newExp = [...experienceFields]; newExp[idx].description = e.target.value; setExperienceFields(newExp); }} className={inputClass} />
                        <button type="button" className="text-red-500 font-bold hover:underline" onClick={() => setExperienceFields(experienceFields.filter((_, i) => i !== idx))}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" className="text-indigo-600 font-semibold hover:underline" onClick={() => setExperienceFields([...experienceFields, { company: "", role: "", startDate: "", endDate: "", description: "" }])}>
                    + Add Experience
                </button>

                {/* Projects */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Projects</h3>
                {projectFields.map((proj, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2 items-end">
                        <input type="text" placeholder="Project Name" value={proj.name} onChange={(e) => { const newProj = [...projectFields]; newProj[idx].name = e.target.value; setProjectFields(newProj); }} className={inputClass} />
                        <input type="text" placeholder="Description" value={proj.description} onChange={(e) => { const newProj = [...projectFields]; newProj[idx].description = e.target.value; setProjectFields(newProj); }} className={inputClass} />
                        <input type="text" placeholder="Project Link" value={proj.link} onChange={(e) => { const newProj = [...projectFields]; newProj[idx].link = e.target.value; setProjectFields(newProj); }} className={inputClass} />
                        <button type="button" className="text-red-500 font-bold hover:underline" onClick={() => setProjectFields(projectFields.filter((_, i) => i !== idx))}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" className="text-indigo-600 font-semibold hover:underline" onClick={() => setProjectFields([...projectFields, { name: "", description: "", link: "" }])}>
                    + Add Project
                </button>

                <button
                    type="submit"
                    className="mt-6 w-full py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                    Save Dashboard
                </button>
            </form>
        </div>
    );
}
