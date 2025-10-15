import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, BriefcaseIcon, LightbulbIcon, TrendingUpIcon, SettingsIcon, CheckIcon, GiftIcon, UserCheckIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic IT Consulting Services',
  description: 'Interconnect provides expert IT consulting services in Kenya, offering strategic planning, technology advisory, and process optimization to drive business growth and efficiency.',
  keywords: [
    'IT consulting Kenya',
    'strategic IT planning Kenya',
    'technology advisory Kenya',
    'IT process optimization Kenya',
    'Interconnect IT consulting',
    'business technology solutions Kenya',
    'digital transformation Kenya',
  ],
  openGraph: {
    title: 'Interconnect - Strategic IT Consulting for Business Growth',
    description: 'Leverage Interconnect\'s IT consulting expertise for strategic planning, technology advisory, and process improvement to scale your business in Kenya.',
    url: '/services/it-consulting'
  },
  twitter: {
    title: 'IT Consulting Services | Interconnect Kenya',
    description: 'Drive innovation and efficiency with Interconnect\'s strategic IT consulting. We help businesses in Kenya leverage technology for growth.'
  },
  alternates: {
    canonical: '/services/it-consulting',
  },
};

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

const consultingPackages = [
  {
    name: 'Discovery Session',
    icon: GiftIcon,
    price: 'Free',
    currency: '',
    period: '',
    description: 'Get started with a comprehensive assessment',
    features: [
      '1-hour initial consultation',
      'Business needs assessment',
      'Current technology audit',
      'Preliminary recommendations',
      'Technology gap analysis',
      'Security assessment overview',
      'Process optimization opportunities',
      'No obligation follow-up'
    ],
    popular: true,
    ctaText: 'Book Free Session',
    maintenance: null,
    benefits: [
      'Identify immediate technology improvements',
      'Understand your current IT infrastructure',
      'Get professional recommendations',
      'Plan your technology roadmap'
    ]
  },
  {
    name: 'Strategic Partnership',
    icon: UserCheckIcon,
    price: '2,000',
    currency: 'KSH',
    period: '/session',
    description: 'Ongoing guidance for technology success',
    features: [
      'Follow-up consultation sessions',
      'Detailed implementation planning',
      'Technology roadmap development',
      'Vendor selection guidance',
      'Process optimization recommendations',
      'Priority email/call support between sessions',
      'Custom solution architecture',
      'Quarterly technology reviews'
    ],
    popular: false,
    ctaText: 'Continue Partnership',
    maintenance: 'Flexible scheduling as needed',
    benefits: [
      'Long-term technology strategy',
      'Ongoing support and guidance',
      'Cost-effective expert advice',
      'Accelerated implementation success'
    ]
  }
];

export default function ITConsultingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Gradient Layers */}
      <div className="absolute inset-0 -z-20 block dark:hidden bg-[radial-gradient(circle_at_top,_rgba(253,224,71,0.4),_transparent_62%)]" />
      <div className="absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_top,_rgba(120,53,15,0.6),_transparent_70%)]" />
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[var(--it-page-bg-overlay)] to-transparent dark:via-yellow-900/10" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent animate-gradient-x"
          style={{ backgroundImage: 'linear-gradient(to right, var(--it-hero-heading-from), var(--it-hero-heading-via), var(--it-hero-heading-to))' }}
        >
          Strategic IT Consulting for Growth
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-[var(--it-hero-text)] dark:text-muted-foreground">
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
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--it-section-heading)] dark:text-amber-200">
          Our Consulting Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-[var(--it-card-bg)] border border-[var(--it-card-border)] p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[var(--it-card-hover-bg)] min-h-[250px] flex flex-col dark:bg-gray-900/50 dark:border-yellow-900/50 dark:hover:bg-gray-800/60 dark:hover:shadow-yellow-500/20"
              style={{ boxShadow: '0 18px 36px -24px var(--it-card-hover-shadow)' }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border shadow-md flex-shrink-0 bg-[var(--it-icon-bg)] border-[var(--it-icon-border)] dark:bg-gray-800 dark:border-amber-700/50 dark:shadow-amber-600/20"
                  style={{ boxShadow: '0 12px 24px -16px var(--it-icon-shadow)' }}
                >
                  <feature.icon className="h-6 w-6 text-[var(--it-icon-color)] dark:text-yellow-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-[var(--it-text-title)] dark:text-amber-100">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="leading-relaxed flex-grow text-[var(--it-text-description)] dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Packages Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--it-section-heading)] dark:text-amber-200 mb-4">
            IT Consulting Packages
          </h2>
          <p className="text-lg text-[var(--it-section-text)] dark:text-gray-300 max-w-3xl mx-auto">
            Start with a free consultation to understand your needs, then continue with ongoing strategic guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {consultingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-[var(--it-card-bg)] border border-[var(--it-card-border)] p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[var(--it-card-hover-bg)] hover:shadow-[0_22px_44px_-28px_var(--it-card-hover-shadow)] min-h-[600px] flex flex-col shadow-[0_18px_36px_-26px_var(--it-card-hover-shadow)] dark:bg-gray-900/50 dark:border-yellow-900/50 dark:hover:bg-gray-800/60 dark:hover:shadow-amber-500/20 dark:shadow-none ${pkg.popular ? 'ring-2 ring-[var(--it-popular-ring)] dark:ring-amber-500/50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Start Here
                  </span>
                </div>
              )}

              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4 border shadow-md flex-shrink-0 bg-[var(--it-icon-bg)] border-[var(--it-icon-border)] dark:bg-gray-800 dark:border-amber-700/50 dark:shadow-amber-600/20"
                  style={{ boxShadow: '0 16px 32px -22px var(--it-icon-shadow)' }}
                >
                  <pkg.icon className="h-8 w-8 text-[var(--it-icon-color)] dark:text-yellow-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold text-[var(--it-text-title)] dark:text-amber-100">{pkg.name}</h3>
                  <p className="text-sm text-[var(--it-text-description)] dark:text-gray-400">{pkg.description}</p>
                </div>
              </div>


              <div className="flex-grow">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[var(--it-section-heading)] dark:text-amber-200 mb-3">What You Get:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-[var(--it-text-description)] dark:text-gray-300">
                        <CheckIcon className="h-4 w-4 text-[var(--it-accent-green)] mr-2 mt-0.5 flex-shrink-0 dark:text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[var(--it-section-heading)] dark:text-amber-200 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-[var(--it-text-description)] dark:text-gray-300">
                        <TrendingUpIcon className="h-4 w-4 text-[var(--it-accent-amber)] mr-2 mt-0.5 flex-shrink-0 dark:text-amber-400" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className={`w-full ${pkg.popular
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700'
                      : 'border border-[var(--it-card-border)] bg-[var(--it-card-bg)] text-[var(--it-text-title)] hover:bg-[var(--it-card-hover-bg)] dark:bg-gray-800 dark:text-amber-100 dark:border-amber-700/50 dark:hover:bg-gray-700'
                    } transition duration-300 shadow-lg text-lg py-3`}
                  >
                    {pkg.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div
          className="rounded-2xl p-8 backdrop-blur-sm border border-[var(--it-value-border)] dark:border-amber-700/50"
          style={{ background: 'linear-gradient(135deg, var(--it-value-bg-from), var(--it-value-bg-to))' }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[var(--it-value-title)] dark:text-amber-100 mb-4">Why Choose Our IT Consulting?</h3>
            <p className="max-w-3xl mx-auto text-[var(--it-value-text)] dark:text-gray-300">
              Our consulting approach focuses on practical, actionable solutions that drive real business results.
              We understand the unique challenges facing modern businesses and provide technology guidance that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-[var(--it-value-card-bg)] border border-[var(--it-value-card-border)] rounded-xl p-6 dark:bg-transparent dark:border-amber-700/50">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--it-value-icon-bg)' }}>
                <BriefcaseIcon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--it-text-title)] dark:text-amber-100 mb-2">Market Understanding</h4>
              <p className="text-sm text-[var(--it-value-card-text)] dark:text-gray-400">Deep understanding of diverse business environments and global technology landscapes</p>
            </div>
            <div className="text-center bg-[var(--it-value-card-bg)] border border-[var(--it-value-card-border)] rounded-xl p-6 dark:bg-transparent dark:border-amber-700/50">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--it-value-icon-bg)' }}>
                <LightbulbIcon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--it-text-title)] dark:text-amber-100 mb-2">Practical Solutions</h4>
              <p className="text-sm text-[var(--it-value-card-text)] dark:text-gray-400">Technology recommendations that are realistic, cost-effective, and implementable</p>
            </div>
            <div className="text-center bg-[var(--it-value-card-bg)] border border-[var(--it-value-card-border)] rounded-xl p-6 dark:bg-transparent dark:border-amber-700/50">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--it-value-icon-bg)' }}>
                <TrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--it-text-title)] dark:text-amber-100 mb-2">Growth Focused</h4>
              <p className="text-sm text-[var(--it-value-card-text)] dark:text-gray-400">Strategic guidance that positions your business for sustainable growth and success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative z-10 py-20 mt-16"
        style={{ background: 'linear-gradient(135deg, var(--it-cta-bg-from), var(--it-cta-bg-to))' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--it-cta-title)] dark:text-amber-100">
            Ready to Unlock Your Technological Potential?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[var(--it-cta-text)] dark:text-yellow-200/90">
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
