import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server'; // Or your auth provider
import dbConnect from '@/app/lib/dbConnect'; // Adjust path if needed
import UserProfile from '@/app/lib/models/UserProfile'; // Adjust path if needed

export async function POST(request) {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { templateKey } = await request.json();

    if (!templateKey) {
        return NextResponse.json({ error: "Template key is required" }, { status: 400 });
    }

    await dbConnect();

    // Find the user's profile and update their selected template
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId: user.id },
      { $set: { selectedTemplate: templateKey } },
      { new: true, upsert: true } // `upsert: true` creates a profile if one doesn't exist
    );

    if (!updatedProfile) {
        return NextResponse.json({ error: "Could not update profile" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: `Template set to ${templateKey}` });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
