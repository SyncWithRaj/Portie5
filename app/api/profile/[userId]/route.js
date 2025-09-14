import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect'; // Adjust this import path
import UserProfile from '@/app/lib/models/UserProfile'; // Adjust this import path

export async function GET(request, { params }) {
  try {
    const { userId } = params;

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    await dbConnect();

    const profile = await UserProfile.findOne({ userId }).lean();

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    return NextResponse.json(profile);

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
