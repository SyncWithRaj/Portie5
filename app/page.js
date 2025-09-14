import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins min-h-screen flex flex-col items-center justify-between p-6 sm:p-12 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black -mt-18">
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center gap-6 sm:gap-8 py-12 sm:py-20 pt-24">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent py-2">
          Build Your Digital Portfolio Effortlessly
        </h1>
        <p className="max-w-2xl text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          Showcase your skills, projects, and achievements with a platform designed for students. Use templates, AI assistance, and instant sharing to create a professional portfolio in minutes.
        </p>

        {/* Call to Action */}
        <div className="flex gap-4 mt-6 flex-col sm:flex-row">
          <a
            href="/dashboard"
            className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium text-base px-6 py-3 hover:opacity-90 transition"
          >
            Create Your Portfolio
          </a>
          <a
            href="/templates"
            className="rounded-full border border-indigo-400 text-indigo-400 font-medium text-base px-6 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            Explore Templates
          </a>
        </div>
      </main>

      {/* Popular Templates Section */}
      <section className="w-full max-w-6xl py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent">
          Popular Templates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { name: "Modern Portfolio", img: "/template3.jpg", slug: "one" },
    { name: "Creative Showcase", img: "/template2.jpg", slug: "two" },
    { name: "Minimal Resume", img: "/template1.jpg", slug: "three" },
  ].map((template, idx) => (
    <div
      key={idx}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition flex flex-col overflow-hidden"
    >
      <Image
        src={template.img}
        alt={template.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-medium text-indigo-600">
          {template.name}
        </h3>
        <a
          href={`/templates/pages/${template.slug}`}
          className="mt-3 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition"
        >
          Preview Template
        </a>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center text-sm text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} Student Portfolio Platform. All rights reserved.</p>
        <p>Showcase your skills, projects, and achievements in one place.</p>
      </footer>
    </div>
  );
}
