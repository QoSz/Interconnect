import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CodeIcon, PaletteIcon, ShoppingCartIcon, TabletSmartphoneIcon, PackageIcon, BriefcaseIcon, BuildingIcon, CheckIcon, SparklesIcon, SearchIcon, TrendingUpIcon, ShieldCheckIcon, ZapIcon, BarChart3Icon, MonitorIcon } from 'lucide-react';

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

const pricingPlans = [
  {
    name: 'Essential',
    icon: PackageIcon,
    price: '40,000',
    currency: 'KSH',
    description: 'Perfect for launching your online presence',
    features: [
      'Static responsive website (5-7 pages)',
      'Modern, mobile-first design',
      'Basic SEO optimization',
      'Contact forms with email integration',
      'Social media integration',
      'Google Analytics setup',
      '30 days post-launch support',
      'Basic hosting guidance',
      'Performance optimization'
    ],
    popular: false,
    ctaText: 'Get Started',
    maintenance: null
  },
  {
    name: 'Professional',
    icon: BriefcaseIcon,
    price: '60,000',
    currency: 'KSH',
    description: 'Ideal for growing businesses',
    features: [
      'Dynamic website (8-12 pages)',
      'Content Management System (CMS)',
      'Blog functionality with RSS feeds',
      'Advanced SEO optimization',
      'Social media auto-posting',
      'Newsletter integration',
      '90 days post-launch support',
      'Weekly content updates',
      'Monthly security updates',
      'Performance monitoring'
    ],
    popular: true,
    ctaText: 'Most Popular',
    maintenance: 'Monthly maintenance included'
  },
  {
    name: 'E-Commerce',
    icon: ShoppingCartIcon,
    price: '80,000',
    currency: 'KSH',
    description: 'Start selling online today',
    features: [
      'Full-featured online store',
      'Payment gateway integration (M-Pesa, Cards)',
      'Inventory management system',
      'Customer account portal',
      'Order tracking & notifications',
      'Product reviews & ratings',
      'Shipping calculator',
      'SEO for products',
      '6 months support & training',
      'Sales analytics dashboard'
    ],
    popular: false,
    ctaText: 'Start Selling',
    maintenance: null
  },
  {
    name: 'Enterprise',
    icon: BuildingIcon,
    price: 'Custom',
    currency: 'Pricing',
    description: 'Custom solutions for complex needs',
    features: [
      'Fully custom development',
      'Advanced AI integrations',
      'Custom API development',
      'Multi-language support',
      'Advanced security features',
      'Dedicated project manager',
      'Ongoing maintenance & updates',
      '24/7 priority support',
      'Scalable cloud architecture',
      'Custom training sessions'
    ],
    popular: false,
    ctaText: 'Contact Us',
    maintenance: 'Includes ongoing support'
  }
];

export default function WebsitesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground dark:bg-slate-950">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-purple-900/10 to-transparent dark:from-slate-950 dark:via-purple-950/45 dark:to-slate-950" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent animate-gradient-x" style={{ backgroundImage: 'linear-gradient(to right, var(--websites-hero-heading-from), var(--websites-hero-heading-via), var(--websites-hero-heading-to))' }}>
          Custom-Built Websites That Convert
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-[var(--websites-hero-text)]">
          We don&#39;t just build websites; we create digital experiences designed specifically for your brand. From stunning visuals to smooth performance, get a website that truly stands out and drives results.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25">
            Get Started <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--websites-section-heading)]">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-[var(--websites-card-bg)] border border-[var(--websites-card-border)] p-6 rounded-2xl backdrop-blur-sm hover:bg-[var(--websites-card-hover-bg)] transition-all duration-300 hover:shadow-lg min-h-[250px] flex flex-col dark:bg-gray-900/60 dark:border-purple-900/50 dark:hover:bg-gray-800/70 dark:hover:shadow-purple-500/20"
              style={{ boxShadow: 'var(--websites-card-hover-shadow)' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mr-4 border border-[var(--websites-icon-border)] shadow-md flex-shrink-0" style={{ boxShadow: '0 4px 6px -1px var(--websites-icon-shadow)' }}>
                  <feature.icon className="h-6 w-6 text-[var(--websites-icon-color)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-[var(--websites-text-title)]">{feature.title}</h3>
                </div>
              </div>
              <p className="text-[var(--websites-text-description)] leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--websites-section-heading)] mb-4">Our Website Development Packages</h2>
          <p className="text-lg text-[var(--websites-section-text)] max-w-3xl mx-auto">
            Choose the perfect package for your business needs. Each solution is designed to deliver maximum value and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[var(--websites-card-bg)] border ${plan.popular ? 'ring-2' : ''} p-6 rounded-2xl backdrop-blur-sm hover:bg-[var(--websites-card-hover-bg)] transition-all duration-300 hover:shadow-lg min-h-[600px] flex flex-col dark:bg-gray-900/60 dark:border-purple-900/50 dark:hover:bg-gray-800/70 dark:hover:shadow-purple-500/25 ${plan.popular ? 'dark:ring-purple-500/40' : 'dark:ring-purple-900/30'}`}
              style={{
                borderColor: plan.popular ? 'var(--websites-popular-badge-from)' : 'var(--websites-card-border)',
                boxShadow: plan.popular ? '0 0 0 2px var(--websites-popular-badge-to)' : undefined
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="text-white px-4 py-1 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(to right, var(--websites-popular-badge-from), var(--websites-popular-badge-to))' }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mr-4 border border-[var(--websites-icon-border)] shadow-md flex-shrink-0" style={{ boxShadow: '0 4px 6px -1px var(--websites-icon-shadow)' }}>
                  <plan.icon className="h-6 w-6 text-[var(--websites-icon-color)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-[var(--websites-text-title)]">{plan.name}</h3>
                  <p className="text-sm text-[var(--websites-text-description)]">{plan.description}</p>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-[var(--websites-text-description)]">
                      <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
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
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                      : 'border text-[var(--websites-text-title)] hover:bg-[var(--websites-card-hover-bg)]'
                    } transition duration-300 shadow-lg`}
                    style={!plan.popular ? {
                      backgroundColor: 'var(--websites-icon-bg)',
                      borderColor: 'var(--websites-card-border)'
                    } : undefined}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* AI Integration Add-on */}
        <div className="rounded-2xl p-6 backdrop-blur-sm border border-[var(--websites-addon-border)] dark:bg-gray-900/60 dark:border-purple-900/50 dark:ring-1 dark:ring-purple-900/30" style={{ background: 'linear-gradient(to right, var(--websites-addon-bg-from), var(--websites-addon-bg-to))' }}>
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ background: 'linear-gradient(to right, var(--websites-popular-badge-from), var(--websites-popular-badge-to))' }}>
              <SparklesIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-[var(--websites-addon-title)] mb-2">AI Integration Add-On</h3>
              <p className="text-[var(--websites-addon-text)] mb-4">
                Supercharge any package with AI-powered features including chatbots, content recommendations, automated responses, and smart analytics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-[var(--websites-text-muted)]">Usage-based pricing</p>
                </div>
                <div>
                  <p className="text-[var(--websites-addon-highlight)] font-medium">Transparent Billing</p>
                  <p className="text-[var(--websites-text-muted)]">Overage charges included in next cycle</p>
                </div>
                <div>
                  <p className="text-[var(--websites-addon-highlight)] font-medium">Available for All Packages</p>
                  <p className="text-[var(--websites-text-muted)]">Easy integration & setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Website Audit Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-12">
        <div className="rounded-2xl p-8 backdrop-blur-sm border border-[var(--websites-audit-border)] dark:bg-gray-900/60 dark:border-purple-900/50 dark:ring-1 dark:ring-purple-900/30" style={{ background: 'linear-gradient(to right, var(--websites-audit-bg-from), var(--websites-audit-bg-to))' }}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, var(--websites-popular-badge-from), var(--websites-popular-badge-to))' }}>
                <SearchIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--websites-audit-title)] mb-4">Free Website Audit & Consultation</h2>
            <p className="text-lg text-[var(--websites-audit-text)] max-w-3xl mx-auto mb-6">
              Already have a website? Get a comprehensive analysis of your current site&#39;s performance, SEO, and conversion potential.
              Discover actionable insights to boost your online presence - completely free, no strings attached.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mx-auto mb-3 border border-[var(--websites-icon-border)]">
                <TrendingUpIcon className="h-6 w-6 text-[var(--websites-accent-green)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">Performance Analysis</h3>
              <p className="text-sm text-[var(--websites-text-description)]">Page speed, Core Web Vitals, and loading optimization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mx-auto mb-3 border border-[var(--websites-icon-border)]">
                <SearchIcon className="h-6 w-6 text-[var(--websites-accent-blue)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">SEO Audit</h3>
              <p className="text-sm text-[var(--websites-text-description)]">Rankings, keywords, and search visibility assessment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mx-auto mb-3 border border-[var(--websites-icon-border)]">
                <MonitorIcon className="h-6 w-6 text-[var(--websites-accent-indigo)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">Mobile Optimization</h3>
              <p className="text-sm text-[var(--websites-text-description)]">Responsive design and mobile user experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mx-auto mb-3 border border-[var(--websites-icon-border)]">
                <BarChart3Icon className="h-6 w-6 text-[var(--websites-accent-orange)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">Conversion Analysis</h3>
              <p className="text-sm text-[var(--websites-text-description)]">User flow, call-to-action effectiveness, and sales funnel</p>
            </div>
          </div>

          <div className="bg-[var(--websites-card-bg)] border border-[var(--websites-card-border)] rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-[var(--websites-audit-title)] mb-4">What You&#39;ll Receive</h3>
              <p className="text-[var(--websites-audit-text)] max-w-2xl mx-auto">
                Get a comprehensive analysis that provides clear, actionable insights to improve your website&#39;s performance and drive more business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[var(--websites-benchmark-item-bg)] rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, var(--websites-popular-badge-from), var(--websites-popular-badge-to))' }}>
                  <BarChart3Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">Detailed Performance Report</h4>
                <p className="text-sm text-[var(--websites-text-description)]">Complete analysis with scores, metrics, and benchmarks</p>
              </div>

              <div className="bg-[var(--websites-benchmark-item-bg)] rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, var(--websites-popular-badge-from), var(--websites-popular-badge-to))' }}>
                  <TrendingUpIcon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">Improvement Roadmap</h4>
                <p className="text-sm text-[var(--websites-text-description)]">Prioritized list of opportunities with impact estimates</p>
              </div>

              <div className="bg-[var(--websites-benchmark-item-bg)] rounded-lg p-6 text-center md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, var(--websites-popular-badge-from), var(--websites-popular-badge-to))' }}>
                  <SearchIcon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--websites-text-title)] mb-2">30-Minute Consultation</h4>
                <p className="text-sm text-[var(--websites-text-description)]">Personal discussion of findings and implementation strategy</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25">
                  Request Your Free Website Audit <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <p className="text-sm text-[var(--websites-text-muted)] mt-4">
                No obligations • Results delivered within 48 hours • Completely free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Optimization Services Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--websites-section-heading)] mb-4">Website Optimization Services</h2>
          <p className="text-lg text-[var(--websites-section-text)] max-w-3xl mx-auto">
            Don&#39;t need a complete rebuild? We can supercharge your existing website with targeted improvements
            that deliver measurable results and increased performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Performance Optimization */}
          <div className="bg-[var(--websites-optimization-card-bg)] border border-[var(--websites-optimization-card-border)] p-6 rounded-2xl backdrop-blur-sm hover:bg-[var(--websites-optimization-card-hover-bg)] transition-all duration-300 dark:bg-gray-900/60 dark:border-purple-900/50 dark:hover:bg-gray-800/70 dark:hover:shadow-purple-500/20 dark:ring-1 dark:ring-purple-900/30">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mr-4 border border-[var(--websites-icon-border)]">
                <ZapIcon className="h-6 w-6 text-[var(--websites-accent-yellow)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--websites-text-title)]">Performance Optimization</h3>
                <p className="text-sm text-[var(--websites-text-description)]">Speed up your website significantly</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Image optimization and compression</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Code minification and caching setup</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Database optimization</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>CDN implementation</span>
              </li>
            </ul>
            <div className="bg-[var(--websites-result-bg-green)] border border-[var(--websites-result-border-green)] rounded-lg p-3">
              <p className="text-[var(--websites-result-text-green)] text-sm font-medium">Typical Results:</p>
              <p className="text-[var(--websites-result-text-green)] text-sm">40-60% faster load times, improved Google Core Web Vitals scores</p>
            </div>
          </div>

          {/* SEO Enhancement */}
          <div className="bg-[var(--websites-optimization-card-bg)] border border-[var(--websites-optimization-card-border)] p-6 rounded-2xl backdrop-blur-sm hover:bg-[var(--websites-optimization-card-hover-bg)] transition-all duration-300 dark:bg-gray-900/60 dark:border-purple-900/50 dark:hover:bg-gray-800/70 dark:hover:shadow-purple-500/20 dark:ring-1 dark:ring-purple-900/30">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mr-4 border border-[var(--websites-icon-border)]">
                <TrendingUpIcon className="h-6 w-6 text-[var(--websites-accent-blue)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--websites-text-title)]">SEO Enhancement</h3>
                <p className="text-sm text-[var(--websites-text-description)]">Boost your search rankings</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Technical SEO audit and fixes</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Meta tags and schema markup</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Content optimization for Kenya market</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Local SEO optimization</span>
              </li>
            </ul>
            <div className="bg-[var(--websites-result-bg-blue)] border border-[var(--websites-result-border-blue)] rounded-lg p-3">
              <p className="text-[var(--websites-result-text-blue)] text-sm font-medium">Typical Results:</p>
              <p className="text-[var(--websites-result-text-blue)] text-sm">20-40% increase in organic traffic within 3-6 months</p>
            </div>
          </div>

          {/* Conversion Rate Optimization */}
          <div className="bg-[var(--websites-optimization-card-bg)] border border-[var(--websites-optimization-card-border)] p-6 rounded-2xl backdrop-blur-sm hover:bg-[var(--websites-optimization-card-hover-bg)] transition-all duration-300 dark:bg-gray-900/60 dark:border-purple-900/50 dark:hover:bg-gray-800/70 dark:hover:shadow-purple-500/20 dark:ring-1 dark:ring-purple-900/30">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mr-4 border border-[var(--websites-icon-border)]">
                <BarChart3Icon className="h-6 w-6 text-[var(--websites-accent-orange)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--websites-text-title)]">Conversion Rate Optimization</h3>
                <p className="text-sm text-[var(--websites-text-description)]">Turn more visitors into customers</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>User experience (UX) improvements</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>A/B testing of key elements</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Call-to-action optimization</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Checkout process improvements</span>
              </li>
            </ul>
            <div className="bg-[var(--websites-result-bg-orange)] border border-[var(--websites-result-border-orange)] rounded-lg p-3">
              <p className="text-[var(--websites-result-text-orange)] text-sm font-medium">Typical Results:</p>
              <p className="text-[var(--websites-result-text-orange)] text-sm">15-35% increase in conversion rates</p>
            </div>
          </div>

          {/* Security & Maintenance */}
          <div className="bg-[var(--websites-optimization-card-bg)] border border-[var(--websites-optimization-card-border)] p-6 rounded-2xl backdrop-blur-sm hover:bg-[var(--websites-optimization-card-hover-bg)] transition-all duration-300 dark:bg-gray-900/60 dark:border-purple-900/50 dark:hover:bg-gray-800/70 dark:hover:shadow-purple-500/20 dark:ring-1 dark:ring-purple-900/30">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--websites-icon-bg)] flex items-center justify-center mr-4 border border-[var(--websites-icon-border)]">
                <ShieldCheckIcon className="h-6 w-6 text-[var(--websites-accent-emerald)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--websites-text-title)]">Security & Maintenance</h3>
                <p className="text-sm text-[var(--websites-text-description)]">Keep your site secure and updated</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Security vulnerability patches</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>SSL certificate setup</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Regular backups and monitoring</span>
              </li>
              <li className="flex items-start text-sm text-[var(--websites-text-description)]">
                <CheckIcon className="h-4 w-4 text-[var(--websites-accent-green)] mr-2 mt-0.5 flex-shrink-0" />
                <span>Plugin and framework updates</span>
              </li>
            </ul>
            <div className="bg-[var(--websites-result-bg-emerald)] border border-[var(--websites-result-border-emerald)] rounded-lg p-3">
              <p className="text-[var(--websites-result-text-emerald)] text-sm font-medium">Peace of Mind:</p>
              <p className="text-[var(--websites-result-text-emerald)] text-sm">99.9% uptime, protected against threats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benchmarks Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pb-12">
        {/* Performance Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[var(--websites-benchmark-bg)] border border-[var(--websites-benchmark-border)] p-6 rounded-2xl backdrop-blur-sm dark:bg-gray-900/60 dark:border-purple-900/50 dark:ring-1 dark:ring-purple-900/30">
            <h4 className="text-xl font-semibold text-[var(--websites-benchmark-title)] mb-4">Before vs After: Typical Improvements</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <span className="text-sm text-[var(--websites-benchmark-text)]">Page Load Speed</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-[var(--websites-accent-red)]">4.2s</span>
                  <ArrowRightIcon className="h-4 w-4 text-[var(--websites-accent-gray)]" />
                  <span className="text-sm text-[var(--websites-accent-green)]">1.1s</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <span className="text-sm text-[var(--websites-benchmark-text)]">Mobile Optimization Score</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-[var(--websites-accent-red)]">42/100</span>
                  <ArrowRightIcon className="h-4 w-4 text-[var(--websites-accent-gray)]" />
                  <span className="text-sm text-[var(--websites-accent-green)]">96/100</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <span className="text-sm text-[var(--websites-benchmark-text)]">SEO Score</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-[var(--websites-accent-red)]">35/100</span>
                  <ArrowRightIcon className="h-4 w-4 text-[var(--websites-accent-gray)]" />
                  <span className="text-sm text-[var(--websites-accent-green)]">91/100</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <span className="text-sm text-[var(--websites-benchmark-text)]">Conversion Rate</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-[var(--websites-accent-red)]">1.2%</span>
                  <ArrowRightIcon className="h-4 w-4 text-[var(--websites-accent-gray)]" />
                  <span className="text-sm text-[var(--websites-accent-green)]">4.8%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--websites-benchmark-bg)] border border-[var(--websites-benchmark-border)] p-6 rounded-2xl backdrop-blur-sm dark:bg-gray-900/60 dark:border-purple-900/50 dark:ring-1 dark:ring-purple-900/30">
            <h4 className="text-xl font-semibold text-[var(--websites-benchmark-title)] mb-4">Long-term Business Impact</h4>
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <CheckIcon className="h-5 w-5 text-[var(--websites-accent-green)] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[var(--websites-benchmark-text)]">Increased Customer Trust</p>
                  <p className="text-xs text-[var(--websites-text-muted)]">Professional appearance builds credibility</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <CheckIcon className="h-5 w-5 text-[var(--websites-accent-green)] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[var(--websites-benchmark-text)]">Reduced Support Costs</p>
                  <p className="text-xs text-[var(--websites-text-muted)]">Better UX means fewer customer service calls</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <CheckIcon className="h-5 w-5 text-[var(--websites-accent-green)] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[var(--websites-benchmark-text)]">Competitive Advantage</p>
                  <p className="text-xs text-[var(--websites-text-muted)]">Stand out in your industry with modern tech</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-[var(--websites-benchmark-item-bg)] rounded-lg">
                <CheckIcon className="h-5 w-5 text-[var(--websites-accent-green)] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[var(--websites-benchmark-text)]">Scalable Growth Platform</p>
                  <p className="text-xs text-[var(--websites-text-muted)]">Infrastructure that grows with your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-16" style={{ background: 'linear-gradient(to right, var(--websites-cta-bg-from), var(--websites-cta-bg-to))' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--websites-cta-title)] mb-4">Ready to Elevate Your Online Presence?</h2>
          <p className="text-lg text-[var(--websites-cta-text)] max-w-2xl mx-auto mb-8">
            Let&#39;s discuss how we can build a website that not only looks great but also achieves your business goals.
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
