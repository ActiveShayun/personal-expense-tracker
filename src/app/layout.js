import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/shared/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Expense tracker",
  description: "This application help to manage all financial problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-4`}
      >
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
