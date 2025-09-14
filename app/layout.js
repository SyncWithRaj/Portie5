import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Student Portfolio",
  description: "A no-code platform for students to build and share portfolios",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={poppins.className}>
        <body className="antialiased bg-gray-50 dark:bg-gray-950">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="pt-[72px]">{children}</main>

          {/* Omnidimension Widget */}
          <Script
            id="omnidimension-web-widget" async src="https://backend.omnidim.io/web_widget.js?secret_key=3b66d7e4c8869a969336924e4f59c4c7"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
