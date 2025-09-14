import dbConnect from "@/app/lib/dbConnect.js";
import UserProfile from "@/app/lib/models/UserProfile.js";
import { getAuth } from "@clerk/nextjs/server";

// ✅ GET profile
export async function GET(req) {
    try {
        await dbConnect();
        const { userId } = getAuth(req);

        if (!userId) {
            return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
        }

        const profile = await UserProfile.findOne({ userId });
        if (!profile) {
            return new Response(JSON.stringify({ error: "Profile not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(profile), { status: 200 });
    } catch (err) {
        console.error("GET /api/dashboard error:", err);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { userId } = getAuth(req);
    if (!userId) return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });

    const data = await req.json();

    // Remove nested _id from arrays
    const cleanArray = (arr) => arr.map(({ _id, ...rest }) => rest);

    const updateData = {
      ...data,
      education: cleanArray(data.education),
      experience: cleanArray(data.experience),
      projects: cleanArray(data.projects),
      socialLinks: { ...data.socialLinks },
      userId,
    };

    const profile = await UserProfile.findOneAndUpdate(
      { userId },
      { $set: updateData },
      { upsert: true, new: true, setDefaultsOnInsert: true } // ✅ important
    );

    return new Response(JSON.stringify({ success: true, profile }), { status: 200 });
  } catch (err) {
    console.error("POST /api/dashboard error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
