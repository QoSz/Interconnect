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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20 block dark:hidden bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.32),_transparent_62%)]" />
      <div className="absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_top,_rgba(12,74,110,0.55),_transparent_70%)]" />
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[var(--digital-page-bg-overlay)] to-transparent dark:via-blue-900/10" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent animate-gradient-x"
          style={{ backgroundImage: 'linear-gradient(to right, var(--digital-hero-heading-from), var(--digital-hero-heading-via), var(--digital-hero-heading-to))' }}
        >
          Amplify Your Brand with Digital Marketing
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-[var(--digital-hero-text)] dark:text-muted-foreground">
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
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--digital-section-heading)] dark:text-cyan-200">
          Our Digital Marketing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-[var(--digital-card-bg)] border border-[var(--digital-card-border)] p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[var(--digital-card-hover-bg)] min-h-[250px] flex flex-col dark:bg-gray-900/50 dark:border-blue-900/50 dark:hover:bg-gray-800/60 dark:hover:shadow-blue-500/20"
              style={{ boxShadow: '0 18px 36px -24px var(--digital-card-hover-shadow)' }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border shadow-md flex-shrink-0 bg-[var(--digital-icon-bg)] border-[var(--digital-icon-border)] dark:bg-gray-800 dark:border-cyan-700/50 dark:shadow-cyan-600/20"
                  style={{ boxShadow: '0 12px 24px -16px var(--digital-icon-shadow)' }}
                >
                  <feature.icon className="h-6 w-6 text-[var(--digital-icon-color)] dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-[var(--digital-text-title)] dark:text-cyan-100">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="leading-relaxed flex-grow text-[var(--digital-text-description)] dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--digital-section-heading)] dark:text-cyan-200 mb-4">
            Digital Marketing Packages
          </h2>
          <p className="text-lg text-[var(--digital-section-text)] dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package to amplify your brand presence and engage your audience across digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[var(--digital-card-bg)] border border-[var(--digital-card-border)] p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[var(--digital-card-hover-bg)] hover:shadow-[0_22px_44px_-28px_var(--digital-card-hover-shadow)] min-h-[600px] flex flex-col shadow-[0_18px_36px_-26px_var(--digital-card-hover-shadow)] dark:bg-gray-900/50 dark:border-blue-900/50 dark:hover:bg-gray-800/60 dark:hover:shadow-cyan-500/20 dark:shadow-none ${plan.popular ? 'ring-2 ring-[var(--digital-popular-ring)] dark:ring-cyan-500/50' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border shadow-md flex-shrink-0 bg-[var(--digital-icon-bg)] border-[var(--digital-icon-border)] dark:bg-gray-800 dark:border-cyan-700/50 dark:shadow-cyan-600/20"
                  style={{ boxShadow: '0 12px 24px -16px var(--digital-icon-shadow)' }}
                >
                  <plan.icon className="h-6 w-6 text-[var(--digital-icon-color)] dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-[var(--digital-text-title)] dark:text-cyan-100">{plan.name}</h3>
                  <p className="text-sm text-[var(--digital-text-description)] dark:text-gray-400">{plan.description}</p>
                </div>
              </div>


              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-[var(--digital-text-description)] dark:text-gray-300">
                      <CheckIcon className="h-4 w-4 text-[var(--digital-accent-green)] mr-2 mt-0.5 flex-shrink-0 dark:text-green-400" />
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
                      : 'border border-[var(--digital-card-border)] bg-[var(--digital-card-bg)] text-[var(--digital-text-title)] hover:bg-[var(--digital-card-hover-bg)] dark:bg-gray-800 dark:text-cyan-100 dark:border-cyan-700/50 dark:hover:bg-gray-700'
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
      <section
        className="relative z-10 py-20 mt-16"
        style={{ background: 'linear-gradient(135deg, var(--digital-cta-bg-from), var(--digital-cta-bg-to))' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--digital-cta-title)] dark:text-cyan-100">
            Ready to Dominate Digital Marketing?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[var(--digital-cta-text)] dark:text-blue-200/90">
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
