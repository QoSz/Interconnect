import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, UsersIcon, Edit3Icon, TrendingUpIcon, MegaphoneIcon, CheckIcon, HashIcon, BrainIcon, BuildingIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: 'Interconnect offers expert digital marketing, content creation, and targeted ad campaigns to amplify your brand presence and engagement in Kenya.',
  keywords: [
    'digital marketing Kenya',
    'digital marketing services Kenya',
    'content creation Kenya',
    'digital advertising Kenya',
    'Interconnect digital marketing',
    'brand engagement Kenya',
    'digital marketing services Kenya',
  ],
  openGraph: {
    title: 'Interconnect - Expert Digital Marketing',
    description: 'Boost your brand with Interconnect\'s strategic digital marketing, content creation, and targeted advertising services in Kenya.',
    url: '/services/digital-marketing'
  },
  twitter: {
    title: 'Digital Marketing | Interconnect Kenya',
    description: 'Amplify your brand online with Interconnect\'s comprehensive digital marketing services. Let\'s grow your audience!'
  },
  alternates: {
    canonical: '/services/digital-marketing',
  },
};

const features = [
  {
    icon: UsersIcon,
    title: 'Digital Platform Management',
    description: 'Expert handling of your digital marketing campaigns across relevant platforms, ensuring consistent brand voice and engagement.',
  },
  {
    icon: Edit3Icon,
    title: 'Content Creation',
    description: 'Compelling posts, stunning visuals, and engaging videos tailored to resonate with your target audience.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Strategy & Analytics',
    description: 'Data-driven strategies and insightful analytics to optimize performance and maximize your digital marketing ROI.',
  },
  {
    icon: MegaphoneIcon,
    title: 'Targeted Ad Campaigns',
    description: 'Effective ad campaigns designed to reach the right people, drive traffic, and achieve your marketing goals.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    icon: HashIcon,
    price: '30,000',
    currency: 'KSH',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      '12 high-quality posts per month',
      'Instagram & LinkedIn content',
      'Basic graphic design',
      'Content calendar planning',
      'Monthly performance report',
      'Email support during business hours'
    ],
    popular: false,
    ctaText: 'Get Started',
    maintenance: null
  },
  {
    name: 'Professional',
    icon: TrendingUpIcon,
    price: '45,000',
    currency: 'KSH',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      '20 engaging posts per month',
      'Advanced design + video content',
      'Instagram Stories & community management',
      'Audience engagement & growth',
      'Bi-weekly strategy calls',
      'Detailed analytics reports',
      'Priority support'
    ],
    popular: true,
    ctaText: 'Most Popular',
    maintenance: null
  },
  {
    name: 'Growth',
    icon: BrainIcon,
    price: '70,000',
    currency: 'KSH',
    period: '/month',
    description: 'For businesses ready to scale',
    features: [
      '28+ premium posts per month',
      'Stories, articles & video content',
      'Paid ad campaign management',
      'Advanced audience targeting',
      'Weekly strategy sessions',
      'Competitor analysis & insights',
      'Custom campaign strategies',
      'Dedicated account support'
    ],
    popular: false,
    ctaText: 'Scale Up',
    maintenance: 'Ad spend budget managed separately'
  },
  {
    name: 'Enterprise',
    icon: BuildingIcon,
    price: 'Custom',
    currency: 'Pricing',
    period: '',
    description: 'Complete digital marketing solutions',
    features: [
      'Unlimited content across all platforms',
      'Advanced video production',
      'Full advertising campaign management',
      'Dedicated account manager',
      'Real-time performance monitoring',
      '24/7 priority support',
      'Custom automation & workflows',
      'Executive reporting & strategy'
    ],
    popular: false,
    ctaText: 'Contact Us',
    maintenance: 'Includes comprehensive management'
  }
];

const DigitalMarketingPage = () => {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 animate-gradient-x">
          Amplify Your Brand with Digital Marketing
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Engage your audience, build community, and drive growth with our expert digital marketing and content creation services. We handle everything, so you can focus on your business.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/25">
            Boost Your Digital Presence <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-cyan-200">Our Digital Marketing Services</h2>
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

      {/* Pricing Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-200 mb-4">Digital Marketing Packages</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package to amplify your brand presence and engage your audience across digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 border ${plan.popular ? 'border-cyan-500/70 ring-2 ring-cyan-500/50' : 'border-blue-900/50'} p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 min-h-[600px] flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-cyan-700/50 shadow-md shadow-cyan-600/20 flex-shrink-0">
                  <plan.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-cyan-100">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-lg text-cyan-300 ml-1">{plan.currency}</span>
                  {plan.period && <span className="text-sm text-gray-400 ml-1">{plan.period}</span>}
                </div>
                {plan.maintenance && (
                  <p className="text-sm text-orange-400 mt-1">{plan.maintenance}</p>
                )}
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className={`w-full ${plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                      : 'bg-gray-800 text-cyan-100 hover:bg-gray-700 border border-cyan-700/50'
                    } transition duration-300 shadow-lg`}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-800/70 to-blue-800/50 py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-100 mb-4">Ready to Dominate Digital Marketing?</h2>
          <p className="text-lg text-blue-200/90 max-w-2xl mx-auto mb-8">
            Let&#39;s craft a winning digital marketing strategy that elevates your brand and connects with your audience.
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

export default DigitalMarketingPage;
