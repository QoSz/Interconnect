import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CodeIcon, PaletteIcon, ShoppingCartIcon, TabletSmartphoneIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Website Development Services',
  description: 'Interconnect specializes in custom website design and development using modern technologies like Next.js and React. We build responsive, SEO-friendly, and e-commerce ready websites in Kenya.',
  keywords: [
    'custom website development Kenya',
    'Next.js development Kenya',
    'React development Kenya',
    'e-commerce website Kenya',
    'responsive web design Kenya',
    'SEO friendly websites Kenya',
    'Interconnect web services',
    'website design Nairobi',
  ],
  openGraph: {
    title: 'Interconnect - Custom Website Development Experts',
    description: 'Get a high-performance, visually stunning, and SEO-optimized website built by Interconnect. Specializing in Next.js, React, and e-commerce solutions.',
    url: '/services/websites'
  },
  twitter: {
    title: 'Custom Web Development | Interconnect Kenya',
    description: 'Elevate your online presence with a custom-built website from Interconnect. We deliver responsive, fast, and engaging web solutions.'
  },
  alternates: {
    canonical: '/services/websites',
  },
};

const features = [
  {
    icon: PaletteIcon,
    title: 'Custom Design',
    description: 'Unique, visually stunning designs that reflect your brand identity and engage your audience.',
  },
  {
    icon: TabletSmartphoneIcon,
    title: 'Responsive Development',
    description: 'Flawless performance and viewing experience across all devices, from desktops to smartphones.',
  },
  {
    icon: CodeIcon,
    title: 'Cutting-Edge Tech',
    description: 'Built with modern technologies like Next.js and React for speed, scalability, and SEO.',
  },
  {
    icon: ShoppingCartIcon,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores designed to maximize sales and provide a smooth user experience.',
  },
];

export default function WebsitesPage() {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-300 animate-gradient-x">
          Custom-Built Websites That Convert
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We don't just build websites; we create digital experiences designed specifically for your brand. From stunning visuals to smooth performance, get a website that truly stands out and drives results.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25">
            Get Started <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-purple-200">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 min-h-[250px] flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-purple-700/50 shadow-md shadow-purple-600/20 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-purple-100">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-800/70 to-indigo-800/50 py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-100 mb-4">Ready to Elevate Your Online Presence?</h2>
          <p className="text-lg text-purple-200/90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can build a website that not only looks great but also achieves your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25">
              Request a Consultation <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}