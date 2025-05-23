import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Globe, ShieldCheck, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Digital Services',
  description: 'Explore Interconnect\'s comprehensive digital services including custom Web Development, strategic Social Media Management, robust Cyber Security solutions, and expert IT Consulting in Kenya.',
  keywords: [
    'Interconnect services',
    'digital services Kenya',
    'web development services',
    'social media management services',
    'cyber security services',
    'IT consulting services',
    'full-service digital agency Kenya',
  ],
  openGraph: {
    title: 'Interconnect Digital Services - Web, Social, Security, IT Consulting',
    description: 'Discover how Interconnect can elevate your business with our expert Web Development, Social Media, Cyber Security, and IT Consulting services.',
    url: '/services'
  },
  twitter: {
    title: 'Interconnect Services | Elevate Your Digital Presence',
    description: 'From web development to cyber security, Interconnect offers a suite of services to meet your digital needs in Kenya.'
  },
  alternates: {
    canonical: '/services',
  },
};

const services = [
    {
        name: 'Websites',
        description: 'Crafting stunning, high-performance websites tailored to your brand.',
        href: '/services/websites',
        icon: Globe,
        bgColor: 'bg-blue-600/10',
        hoverBgColor: 'hover:bg-purple-600/20',
        borderColor: 'hover:border-purple-500'
    },
    {
        name: 'Social Media',
        description: 'Engaging content and strategic campaigns to elevate your online presence.',
        href: '/services/social-media',
        icon: Users,
        bgColor: 'bg-purple-600/10',

        hoverBgColor: 'hover:bg-blue-600/20',
        borderColor: 'hover:border-blue-500'
    },
    {
        name: 'Cyber Security',
        description: 'Robust security solutions to protect your digital assets from threats.',
        href: '/services/cyber-security',
        icon: ShieldCheck,
        bgColor: 'bg-green-600/10',
        hoverBgColor: 'hover:bg-green-600/20',
        borderColor: 'hover:border-green-500'
    },
    {
        name: 'IT Consulting',
        description: 'Expert IT insights and strategy to drive your business growth.',
        href: '/services/it-consulting',
        icon: Briefcase,
        bgColor: 'bg-yellow-600/10',
        hoverBgColor: 'hover:bg-yellow-600/20',
        borderColor: 'hover:border-yellow-500'
    }
];

export default function Services() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        We provide a comprehensive suite of digital solutions designed to elevate your business. Explore how we can help you succeed.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <Link href={service.href} key={service.name} passHref>
                            <div className={`
                                flex flex-col h-full
                                p-6 rounded-[1.618rem] border border-gray-700/50
                                transition-all duration-300 ease-in-out
                                cursor-pointer group relative overflow-hidden
                                ${service.bgColor} ${service.hoverBgColor} ${service.borderColor}
                                hover:shadow-lg hover:shadow-purple-500/20 hover:border-opacity-100
                                transform hover:-translate-y-1
                            `}>
                                {/* Subtle background shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundPosition: 'center center', backgroundSize: '300% 300%' }}></div>

                                <div className="relative z-10 flex-grow">
                                    <div className="mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-md">
                                        <service.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{service.name}</h3>
                                    <p className="text-gray-400 text-sm">{service.description}</p>
                                </div>
                                <span className="relative z-10 mt-auto pt-2 text-right text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                                    Learn More &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}