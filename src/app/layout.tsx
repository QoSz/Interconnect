import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interconnect | Home",
  description: "Your connection to the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white`}>
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
