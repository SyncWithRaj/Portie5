import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  instituteName: { type: String, trim: true },
  degree: { type: String, trim: true },
  startDate: String,
  endDate: String,
  fieldOfStudy: { type: String, trim: true },
});

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, trim: true },
  role: { type: String, trim: true },
  startDate: String,
  endDate: String,
  description: { type: String, trim: true },
});

const ProjectSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  link: { type: String, trim: true },
  githubUrl: { type: String, trim: true }, // Added for project repositories
  tags: [String], // Added for project technology tags
});

const SocialLinksSchema = new mongoose.Schema({
  linkedin: { type: String, trim: true },
  x: { type: String, trim: true }, // For Twitter/X
  github: { type: String, trim: true },
  portfolio: { type: String, trim: true },
});

const UserProfileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    fullName: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    profilePhoto: String,
    title: { type: String, trim: true }, // Added title for hero sections
    bio: { type: String, maxlength: 800, trim: true },
    skills: [String],
    education: [EducationSchema],
    experience: [ExperienceSchema],
    projects: [ProjectSchema],
    socialLinks: SocialLinksSchema,
    selectedTemplate: { type: String, trim: true, default: 'one' }, // Added to store the user's chosen template
  },
  { timestamps: true }
);

const UserProfile = mongoose.models.UserProfile || mongoose.model("UserProfile", UserProfileSchema);

export default UserProfile;
