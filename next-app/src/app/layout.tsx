import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praktikum Framework",
  description: "Aplikasi untuk praktikum framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // LAYOUT
    <html lang="id">
      <body className={poppins.className}>
        {/* TOMBOL NAVBAR */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <a href="/" className="text-xl font-bold">
              Praktikum Framework
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
