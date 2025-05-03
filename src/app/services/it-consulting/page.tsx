import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, BriefcaseIcon, LightbulbIcon, TrendingUpIcon, SettingsIcon } from 'lucide-react';

const features = [
  {
    icon: BriefcaseIcon,
    title: 'Strategic IT Planning',
    description: 'Developing tailored IT roadmaps aligned with your business objectives for sustainable growth.'
  },
  {
    icon: LightbulbIcon,
    title: 'Technology Advisory',
    description: 'Expert guidance on technology adoption, infrastructure optimization, and digital transformation.'
  },
  {
    icon: SettingsIcon,
    title: 'Process Improvement',
    description: 'Analyzing and optimizing your IT processes for increased efficiency and productivity.'
  },
  {
    icon: TrendingUpIcon,
    title: 'Growth & Scalability',
    description: 'Leveraging technology to scale your operations and gain a competitive edge in the market.'
  }
];

export default function ITConsultingPage() {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/10 to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 animate-gradient-x">
          Strategic IT Consulting for Growth
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Navigate the complexities of technology with expert guidance. We provide actionable IT insights and strategies to optimize your operations, drive innovation, and accelerate business growth.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/25">
            Get Strategic Advice <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-amber-200">Our Consulting Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-gray-900/50 border border-yellow-900/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 min-h-[250px] flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-amber-700/50 shadow-md shadow-amber-600/20 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-amber-100">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 bg-gradient-to-r from-amber-800/70 to-yellow-800/50 py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-100 mb-4">Ready to Unlock Your Technological Potential?</h2>
          <p className="text-lg text-yellow-200/90 max-w-2xl mx-auto mb-8">
            Partner with us to develop a winning IT strategy that aligns with your vision and drives tangible results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/25">
              Book a Consultation <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
