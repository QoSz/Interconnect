import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://www.interconnect.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Interconnect | Your Connection to the Digital World",
    template: "%s | Interconnect",
  },
  description:
    "Interconnect offers cutting-edge web development, strategic digital marketing, robust AI automation solutions, and expert IT consulting in Kenya. Connect with us to elevate your digital presence.",
  keywords: [
    "web development Kenya",
    "digital marketing Kenya",
    "AI automation Kenya",
    "IT consulting Kenya",
    "digital solutions Kenya",
    "Interconnect",
    "Nairobi IT services",
    "Kenyan tech company",
    "website design Nairobi",
    "digital marketing Kenya",
  ],
  authors: [{ name: "Interconnect", url: siteUrl }],
  creator: "Interconnect",
  publisher: "Interconnect",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Interconnect | Your Connection to the Digital World",
    description: "Leading digital solutions in Kenya: Web Development, Digital Marketing, AI Automation, IT Consulting.",
    url: siteUrl,
    siteName: "Interconnect",
    locale: "en_KE",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
  },
  manifest: "/favicons/site.webmanifest"
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
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
