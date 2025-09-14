import clientPromise from "@/app/lib/dbConnect";
import UserProfile from "@/app/lib/models/UserProfile";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req) {
    try {
        const user = await currentUser();

        console.log("currentUser:", user);

        if (!user || !user.id) {
            return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
        }

        // Connect to MongoDB
        await clientPromise;

        const profile = await UserProfile.findOne({ userId: user.id }).lean();
        console.log("profile from DB:", profile);

        if (!profile) {
            return new Response(JSON.stringify({ error: "Profile not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(profile), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}
