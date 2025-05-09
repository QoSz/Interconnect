import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ShieldCheckIcon, LockIcon, ServerIcon, DatabaseZapIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprehensive Cyber Security Services',
  description: 'Interconnect offers robust cyber security solutions in Kenya, including vulnerability assessments, penetration testing, threat monitoring, and data protection to safeguard your digital assets.',
  keywords: [
    'cyber security Kenya',
    'vulnerability assessment Kenya',
    'penetration testing Kenya',
    'threat monitoring Kenya',
    'data protection Kenya',
    'Interconnect cyber security',
    'IT security solutions Kenya',
    'network security Nairobi',
  ],
  openGraph: {
    title: 'Interconnect - Advanced Cyber Security Solutions',
    description: 'Protect your business with Interconnect\'s expert cyber security services, offering comprehensive defense against digital threats in Kenya.',
    url: '/services/cyber-security'
  },
  twitter: {
    title: 'Cyber Security Services | Interconnect Kenya',
    description: 'Safeguard your digital infrastructure with Interconnect. We provide top-tier cyber security solutions tailored for Kenyan businesses.',
  },
  alternates: {
    canonical: '/services/cyber-security',
  },
};

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Vulnerability Assessment',
    description: 'Identifying weaknesses in your systems before attackers can exploit them.',
  },
  {
    icon: LockIcon,
    title: 'Penetration Testing',
    description: 'Simulating real-world attacks to test the resilience of your defenses.',
  },
  {
    icon: ServerIcon,
    title: 'Threat Monitoring & Response',
    description: '24/7 monitoring to detect and rapidly respond to emerging cyber threats.',
  },
  {
    icon: DatabaseZapIcon,
    title: 'Data Protection & Compliance',
    description: 'Implementing robust measures to secure sensitive data and ensure regulatory compliance.',
  },
];

export default function CyberSecurityPage() {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 animate-gradient-x">
          Protect Your Digital Assets
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Secure your business with our comprehensive cybersecurity solutions. We shield your valuable data and infrastructure from evolving digital threats, ensuring peace of mind and operational continuity.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-green-500/25">
            Secure Your Business <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-emerald-200">Our Cybersecurity Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-gray-900/50 border border-green-900/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 min-h-[250px] flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-emerald-700/50 shadow-md shadow-emerald-600/20 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-green-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-emerald-100">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 bg-gradient-to-r from-emerald-800/70 to-green-800/50 py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-emerald-100 mb-4">Is Your Business Adequately Protected?</h2>
          <p className="text-lg text-green-200/90 max-w-2xl mx-auto mb-8">
            Don't wait for a breach. Let's assess your security posture and implement the right safeguards for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-green-500/25">
              Request a Security Consultation <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
