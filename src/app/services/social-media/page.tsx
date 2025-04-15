import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, UsersIcon, Edit3Icon, TrendingUpIcon, MegaphoneIcon } from 'lucide-react';

const features = [
  {
    icon: UsersIcon,
    title: 'Platform Management',
    description: 'Expert handling of your social media profiles across relevant platforms, ensuring consistent brand voice and engagement.',
  },
  {
    icon: Edit3Icon,
    title: 'Content Creation',
    description: 'Compelling posts, stunning visuals, and engaging videos tailored to resonate with your target audience.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Strategy & Analytics',
    description: 'Data-driven strategies and insightful analytics to optimize performance and maximize your social media ROI.',
  },
  {
    icon: MegaphoneIcon,
    title: 'Targeted Ad Campaigns',
    description: 'Effective ad campaigns designed to reach the right people, drive traffic, and achieve your marketing goals.',
  },
];

const SocialMediaPage = () => {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 animate-gradient-x">
          Amplify Your Brand on Social Media
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Engage your audience, build community, and drive growth with our expert social media management and content creation services. We handle everything, so you can focus on your business.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/25">
            Boost Your Social Presence <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-cyan-200">Our Social Media Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-gray-900/50 border border-blue-900/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 min-h-[250px] flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-cyan-700/50 shadow-md shadow-cyan-600/20 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-cyan-100">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-800/70 to-blue-800/50 py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-100 mb-4">Ready to Dominate Social Media?</h2>
          <p className="text-lg text-blue-200/90 max-w-2xl mx-auto mb-8">
            Let's craft a winning social media strategy that elevates your brand and connects with your audience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/25">
              Get Your Free Consultation <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;
