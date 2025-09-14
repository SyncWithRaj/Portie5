import dbConnect from "@/app/lib/dbConnect";
import UserProfile from "@/app/lib/models/UserProfile";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const user = await currentUser();

        if (!user || !user.id) {
            // Use NextResponse for consistent API responses in Next.js 13+ App Router
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        // --- FIX: Correctly connect to the database ---
        // Call the dbConnect function and wait for it to complete
        await dbConnect();

        console.log("Database connected successfully.");

        const profile = await UserProfile.findOne({ userId: user.id }).lean();
        console.log("Profile from DB:", profile);

        if (!profile) {
            return NextResponse.json({ error: "Profile not found" }, { status: 404 });
        }

        return NextResponse.json(profile);

    } catch (err) {
        console.error("API Route Error:", err);
        // Check for Mongoose timeout error specifically for a clearer message
        if (err.name === 'MongooseError' && err.message.includes('buffering timed out')) {
             return NextResponse.json({ error: "Database connection timed out. Please check your connection string and firewall settings." }, { status: 500 });
        }
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
