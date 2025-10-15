'use client'

import Link from "next/link";
import {
    Globe,
    Share2,
    Briefcase,
    Bot,
    Mail,
    Home,
    Phone,
    User,
} from "lucide-react";

const quickLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Phone },
];

const serviceLinks = [
    { href: "/services/websites", label: "Websites", icon: Globe },
    { href: "/services/digital-marketing", label: "Digital Marketing", icon: Share2 },
    { href: "/services/ai-automation", label: "AI Automation", icon: Bot },
    { href: "/services/it-consulting", label: "IT Consulting", icon: Briefcase },
];

export default function Footer() {
    return (
        <>
            <style jsx global>{`
        .animated-gradient {
          background-size: 400% 400%;
          background-image: linear-gradient(
            -45deg,
            #fde047,
            #fb923c,
            #f472b6,
            #8b5cf6,
            #3b82f6,
            #22d3ee,
            #fde047
          );
          animation: gradient-shift 10s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

            <footer className="w-full border-t border-[var(--footer-border)] bg-[var(--footer-bg)] backdrop-blur-md">
                <div className="container max-w-screen-2xl px-6 md:px-12 py-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                <span className="font-bold text-[var(--footer-text)] text-3xl">
                                    <span>Inter</span>
                                    <span className="animated-gradient bg-clip-text text-transparent">
                                        connect
                                    </span>
                                </span>
                            </Link>

                            {/* Tagline */}
                            <p className="text-[var(--footer-text-muted)] max-w-md">
                                Your connection to the digital world.
                            </p>

                            {/* Contact Info */}
                            <div className="flex items-center space-x-2 text-[var(--footer-text-muted)]">
                                <Mail className="h-5 w-5 text-[var(--footer-icon)]" />
                                <a
                                    href="mailto:info@interconnect.co.ke"
                                    className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-200"
                                >
                                    info@interconnect.co.ke
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Quick Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Main Links */}
                            <div>
                                <h3 className="text-[var(--footer-text)] font-medium mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    {quickLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-[var(--footer-text-muted)] flex items-center group hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-200"
                                            >
                                                <link.icon className="mr-2 h-4 w-4 group-hover:text-blue-400 transition-colors duration-200" />
                                                <span>{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services Links */}
                            <div>
                                <h3 className="text-[var(--footer-text)] font-medium mb-4">Services</h3>
                                <ul className="space-y-3">
                                    {serviceLinks.map((service) => (
                                        <li key={service.href}>
                                            <Link
                                                href={service.href}
                                                className="text-[var(--footer-text-muted)] flex items-center group hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-200"
                                            >
                                                <service.icon className="mr-2 h-4 w-4 group-hover:text-blue-400 transition-colors duration-200" />
                                                <span>{service.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="text-[var(--footer-copyright-text)] text-sm text-left sm:text-center bg-[var(--footer-copyright-bg)] py-4 px-6 md:px-12">
                    © {new Date().getFullYear()} Interconnect. All rights reserved.
                </div>
            </footer>
        </>
    );
}
