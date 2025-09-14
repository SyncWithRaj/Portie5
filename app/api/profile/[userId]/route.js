import dbConnect from "@/lib/mongodb"; // utility to connect to MongoDB
import UserProfile from "@/models/UserProfile";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const userProfile = await UserProfile.findOne({ userId: params.userId }).lean();
    if (!userProfile) return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    
    return new Response(JSON.stringify(userProfile), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
