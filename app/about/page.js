import Image from "next/image";

export default function About() {
  return (
    <div className="font-poppins min-h-screen flex flex-col items-center justify-start p-6 sm:p-12 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center gap-6 sm:gap-8 py-12 sm:py-20 animate-fadeIn">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          About Student Portfolio Platform
        </h1>
        <p className="max-w-3xl text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          Our platform empowers students to showcase their skills, projects, and achievements in a professional portfolio. Designed with simplicity and customization in mind, it helps students stand out to recruiters, colleges, and collaborators.
        </p>
      </main>

      {/* Mission Section */}
      <section className="max-w-5xl w-full py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeIn">
        <Image
          src="/about-mission.jpg"
          alt="Our Mission"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            To provide students a platform where they can easily build, customize, and share their digital portfolios. We aim to bridge the gap between talent and opportunity by showcasing skills effectively.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-5xl w-full py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse animate-fadeIn">
        <Image
          src="/about-vision.jpg"
          alt="Our Vision"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            To be the go-to platform for students worldwide to create and maintain professional portfolios that truly reflect their abilities. We envision a future where every student can showcase their skills and achievements without barriers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl w-full py-12 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Student-Centric", desc: "Everything we build focuses on improving student experiences." },
            { title: "Innovation", desc: "We continuously innovate to make portfolios smarter and easier to build." },
            { title: "Accessibility", desc: "Our platform is simple, inclusive, and accessible to all students." },
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-medium text-indigo-600">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center text-sm text-gray-500 space-y-2 animate-fadeIn">
        <p>© {new Date().getFullYear()} Student Portfolio Platform. All rights reserved.</p>
        <p>Empowering students to showcase their skills and projects professionally.</p>
      </footer>
    </div>
  );
}
