import Image from "next/image";

const templates = [
  {
    id: 1,
    name: "Classic Portfolio",
    // img: "/templates/template1.png",
  },
  {
    id: 2,
    name: "Minimal Resume",
    // img: "/templates/template2.png",
  },
  {
    id: 3,
    name: "Creative Showcase",
    // img: "/templates/template3.png",
  },
  {
    id: 4,
    name: "Modern Student Profile",
    // img: "/templates/template4.png",
  },
  {
    id: 5,
    name: "Elegant CV",
    // img: "/templates/template5.png",
  },
  {
    id: 6,
    name: "Techie Portfolio",
    // img: "/templates/template6.png",
  },
  {
    id: 7,
    name: "Academic Profile",
    // img: "/templates/template7.png",
  },
  {
    id: 8,
    name: "Design Portfolio",
    // img: "/templates/template8.png",
  },
  {
    id: 9,
    name: "Startup Founder",
    // img: "/templates/template9.png",
  },
  {
    id: 10,
    name: "AI-Powered Resume",
    // img: "/templates/template10.png",
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black px-6 sm:px-12 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent mb-12">
        Choose a Portfolio Template
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden">
              {/* <Image
                src={tpl.img}
                alt={tpl.name}
                fill
                className="object-cover"
              /> */}
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
              {tpl.name}
            </h2>
            <button className="mt-3 px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
