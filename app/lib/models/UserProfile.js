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
});

const SocialLinksSchema = new mongoose.Schema({
  linkedin: { type: String, trim: true },
  x: { type: String, trim: true },
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
    bio: { type: String, maxlength: 800, trim: true },
    skills: [String],
    education: [EducationSchema],
    experience: [ExperienceSchema],
    projects: [ProjectSchema],
    socialLinks: SocialLinksSchema,
  },
  { timestamps: true }
);

// ✅ Make sure default export is correct
const UserProfile = mongoose.models.UserProfile || mongoose.model("UserProfile", UserProfileSchema);

export default UserProfile;
