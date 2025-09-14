import {
    ArrowsRightLeftIcon,
    FolderIcon,
    CloudArrowUpIcon,
    DocumentIcon,
    UserGroupIcon,
    CpuChipIcon,
    PresentationChartBarIcon,
    LockClosedIcon,
    ChartBarSquareIcon,
    GlobeAltIcon
} from "@heroicons/react/24/solid";

export default function Features() {
    const mustHaveFeatures = [
        { title: "Drag-and-Drop Builder", desc: "Easily design your portfolio with a simple drag-and-drop interface.", icon: ArrowsRightLeftIcon },
        { title: "Content Integration", desc: "Add projects, blogs, and multimedia content seamlessly.", icon: FolderIcon },
        { title: "One-Click Hosting", desc: "Publish your portfolio instantly with just one click.", icon: CloudArrowUpIcon },
        { title: "PDF Export", desc: "Download your portfolio as a professional PDF anytime.", icon: DocumentIcon },
        { title: "User Management", desc: "Manage your account and track portfolio analytics effortlessly.", icon: UserGroupIcon },
        { title: "AI Content Assistant", desc: "Get smart suggestions to improve your portfolio content.", icon: CpuChipIcon },
        { title: "Institution Dashboard", desc: "Colleges can manage and view student portfolios effectively.", icon: PresentationChartBarIcon },
        { title: "DigiLocker Integration", desc: "Securely connect certificates and credentials for verification.", icon: LockClosedIcon },
        { title: "Skill Visualization", desc: "Graphically showcase your skills to impress recruiters.", icon: ChartBarSquareIcon },
        { title: "Vernacular Support", desc: "Build your portfolio in multiple languages easily.", icon: GlobeAltIcon },
    ];

    // const additionalFeatures = [
    //     { title: "AI Content Assistant", desc: "Get smart suggestions to improve your portfolio content.", icon: CpuChipIcon },
    //     { title: "Institution Dashboard", desc: "Colleges can manage and view student portfolios effectively.", icon: PresentationChartBarIcon },
    //     { title: "DigiLocker Integration", desc: "Securely connect certificates and credentials for verification.", icon: LockClosedIcon },
    //     { title: "Skill Visualization", desc: "Graphically showcase your skills to impress recruiters.", icon: ChartBarSquareIcon },
    //     { title: "Vernacular Support", desc: "Build your portfolio in multiple languages easily.", icon: GlobeAltIcon },
    // ];

    return (
        <div className="font-poppins min-h-screen flex flex-col items-center justify-start p-6 sm:p-12 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">

            {/* Hero Section */}
            <main className="text-center py-12 sm:py-20 animate-fadeIn">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    Platform Features
                </h1>
                <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg sm:text-xl mt-4">
                    Explore the powerful features that make our platform the ultimate tool for building professional student portfolios.
                </p>
            </main>

            <section className="max-w-6xl w-full py-12 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                    {mustHaveFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center w-90 my-4"
                            >
                                <Icon className="h-14 w-14 text-indigo-600 mb-4" />
                                <h3 className="text-lg font-semibold text-indigo-600">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                    {additionalFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center w-80">
                                <Icon className="h-14 w-14 text-indigo-600 mb-4" />
                                <h3 className="text-lg font-semibold text-indigo-600">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div> */}
            </section>

            {/* Footer */}
            <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center text-sm text-gray-500 space-y-2 animate-fadeIn">
                <p>© {new Date().getFullYear()} Student Portfolio Platform. All rights reserved.</p>
                <p>Empowering students to showcase their skills and projects professionally.</p>
            </footer>
        </div>
    );
}
