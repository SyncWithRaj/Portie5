import { notFound } from 'next/navigation';
import dbConnect from '@/app/lib/dbConnect'; // Adjust path if needed
import UserProfile from '@/app/lib/models/UserProfile'; // Adjust path if needed

// Add this line to disable caching for this page. This is the fix.
export const dynamic = 'force-dynamic';

// --- Dynamic Template Imports ---
// This object maps the 'selectedTemplate' key from your database to the correct
// portfolio component file.
const templates = {
    'one': () => import('@/app/templates/pages/one/page.jsx'),
    'two': () => import('@/app/templates/pages/two/page.jsx'),
    'three': () => import('@/app/templates/pages/three/page.jsx'),
    'four': () => import('@/app/templates/pages/four/page.jsx'),
    'five': () => import('@/app/templates/pages/five/page.jsx'),
    'six': () => import('@/app/templates/pages/six/page.jsx'),
    'seven': () => import('@/app/templates/pages/seven/page.jsx'),
    'eight': () => import('@/app/templates/pages/eight/page.jsx'),
    'nine': () => import('@/app/templates/pages/nine/page.jsx'),
};

// --- Server-Side Data Fetching ---
// This function runs on the server to get the profile data before the page is rendered.
async function getUserProfile(userId) {
    try {
        await dbConnect();
        // Fetch the user's profile from MongoDB using their unique ID
        const profile = await UserProfile.findOne({ userId }).lean();
        
        if (!profile) {
            return null;
        }
        // Convert MongoDB's BSON IDs to strings so the data can be passed
        // from a Server Component to a Client Component template.
        return JSON.parse(JSON.stringify(profile));

    } catch (error) {
        console.error('Failed to fetch user profile:', error);
        return null;
    }
}

// --- Dynamic Page Component ---
// This is the main Server Component for the route /templates/[userId]
export default async function UserPortfolioPage({ params }) {
    const { userId } = params;

    if (!userId) {
        notFound();
    }

    // Fetch the user's data on the server
    const userData = await getUserProfile(userId);

    // If no user is found for the given ID, show a 404 page
    if (!userData) {
        notFound();
    }

    // Determine which template to use from the database, defaulting to 'one' if not set
    const templateKey = userData.selectedTemplate || 'one';

    // Check if the selected template key exists in our templates object
    if (!templates[templateKey]) {
        console.error(`Template "${templateKey}" is not registered in [userId]/page.jsx.`);
        notFound();
    }
    
    // Dynamically load the chosen template component
    const TemplateComponent = (await templates[templateKey]()).default;

    // Render the chosen template, passing the user's data to it as a prop
    return <TemplateComponent userData={userData} />;
}

// --- Dynamic Metadata Function ---
// This server-side function sets the browser tab title and meta description dynamically.
export async function generateMetadata({ params }) {
    const userData = await getUserProfile(params.userId);
    
    if (!userData) {
      return {
        title: 'Portfolio Not Found',
        description: 'The requested portfolio does not exist.'
      };
    }

    return {
      title: `${userData.fullName || 'User'}'s Portfolio`,
      description: userData.bio || `A portfolio for ${userData.fullName}.`,
    };
}
