import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Bot, Workflow, Brain, Zap, CheckIcon, MessageSquareIcon, Settings2Icon, BuildingIcon, SparklesIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Services',
  description: 'Interconnect offers cutting-edge AI automation solutions including Generative AI, intelligent workflows, and AI agents to transform your business operations in Kenya.',
  keywords: [
    'AI automation Kenya',
    'Generative AI solutions Kenya',
    'AI workflow automation Kenya',
    'AI agents Kenya',
    'business process automation Kenya',
    'Interconnect AI services',
    'artificial intelligence Kenya',
    'ChatGPT integration Kenya',
  ],
  openGraph: {
    title: 'Interconnect - AI Automation & Intelligent Solutions',
    description: 'Transform your business with AI automation. From Generative AI to intelligent workflows, we help you leverage artificial intelligence for competitive advantage.',
    url: '/services/ai-automation'
  },
  twitter: {
    title: 'AI Automation Services | Interconnect Kenya',
    description: 'Unlock the power of AI with Interconnect\'s automation solutions. Streamline operations and boost productivity with intelligent systems.'
  },
  alternates: {
    canonical: '/services/ai-automation',
  },
};

const features = [
  {
    icon: Brain,
    title: 'Gen AI',
    description: 'Harness the power of advanced AI models like GPT to create content, analyze data, and generate insights that drive your business forward.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    description: 'Automate complex business processes with AI-powered workflows that adapt, learn, and optimize themselves over time.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Deploy specialized AI agents that handle customer service, data processing, and decision-making tasks with human-like intelligence.',
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Identify bottlenecks and inefficiencies in your operations, then implement AI solutions that dramatically improve speed and accuracy.',
  },
];

const aiPackages = [
  {
    name: 'AI Starter',
    icon: MessageSquareIcon,
    price: '15,000',
    currency: 'KSH',
    period: '/month',
    description: 'Perfect for businesses starting their AI journey',
    features: [
      'Chatbot implementation (1 platform)',
      'Basic workflow automation (3 processes)',
      'Email automation setup',
      'Simple data analysis tools',
      'Monthly optimization review',
      'Usage analytics dashboard',
      'Basic training & documentation',
      'Email support'
    ],
    popular: false,
    ctaText: 'Start with AI',
    maintenance: 'Usage-based billing included'
  },
  {
    name: 'AI Professional',
    icon: Settings2Icon,
    price: '35,000',
    currency: 'KSH',
    period: '/month',
    description: 'Comprehensive AI solutions for growing businesses',
    features: [
      'Multi-platform chatbots (3+ platforms)',
      'Advanced workflow automation (10 processes)',
      'AI content generation tools',
      'Integration with existing systems',
      'Custom AI agent development',
      'Bi-weekly optimization calls',
      'Advanced analytics & reporting',
      'Priority support & response',
      'Team training sessions'
    ],
    popular: true,
    ctaText: 'Most Popular',
    maintenance: 'Includes advanced monitoring'
  },
  {
    name: 'AI Enterprise',
    icon: BuildingIcon,
    price: '65,000',
    currency: 'KSH',
    period: '/month',
    description: 'Enterprise-grade AI automation solutions',
    features: [
      'Custom AI solutions development',
      'Advanced analytics & insights',
      'API integrations & custom workflows',
      'Dedicated AI specialist',
      'Real-time performance monitoring',
      'Advanced security & compliance',
      'Monthly strategy sessions',
      '24/7 priority support',
      'Quarterly business reviews'
    ],
    popular: false,
    ctaText: 'Scale with AI',
    maintenance: 'Enterprise support included'
  },
  {
    name: 'Custom AI Solutions',
    icon: SparklesIcon,
    price: 'Starting at 100,000',
    currency: 'KSH',
    period: '',
    description: 'Fully custom AI applications and solutions',
    features: [
      'Fully custom AI applications',
      'Machine learning model development',
      'Advanced natural language processing',
      'Computer vision solutions',
      'Enterprise-grade security',
      'Ongoing maintenance & updates',
      'Comprehensive training & documentation',
      'Dedicated project team',
      '24/7 priority support',
      'Performance guarantees'
    ],
    popular: false,
    ctaText: 'Contact Us',
    maintenance: 'Comprehensive support package'
  }
];

export default function AIAutomationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Gradient Layers */}
      <div className="absolute inset-0 -z-20 block dark:hidden bg-[radial-gradient(circle_at_top,_rgba(187,247,208,0.4),_transparent_62%)]" />
      <div className="absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_top,_rgba(6,78,59,0.6),_transparent_70%)]" />
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[var(--ai-page-bg-overlay)] to-transparent dark:via-green-900/15" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent animate-gradient-x"
          style={{ backgroundImage: 'linear-gradient(to right, var(--ai-hero-heading-from), var(--ai-hero-heading-via), var(--ai-hero-heading-to))' }}
        >
          AI Automation That Works
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-[var(--ai-hero-text)] dark:text-muted-foreground">
          Transform your business with intelligent automation solutions. From generative AI that creates content to smart workflows that handle complex tasks, we build AI systems that actually make your work easier and more efficient.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-lime-600 text-white hover:from-green-700 hover:to-lime-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-green-500/30">
            Start Automating <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--ai-section-heading)] dark:text-green-300">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-[var(--ai-card-bg)] border border-[var(--ai-card-border)] p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[var(--ai-card-hover-bg)] min-h-[250px] flex flex-col dark:bg-gray-900/50 dark:border-green-800/60 dark:hover:bg-gray-800/60 dark:hover:shadow-green-500/25"
              style={{ boxShadow: '0 18px 36px -24px var(--ai-card-hover-shadow)' }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border shadow-md flex-shrink-0 bg-[var(--ai-icon-bg)] border-[var(--ai-icon-border)] dark:bg-gray-800 dark:border-green-600/60 dark:shadow-green-500/25"
                  style={{ boxShadow: '0 12px 24px -16px var(--ai-icon-shadow)' }}
                >
                  <feature.icon className="h-6 w-6 text-[var(--ai-icon-color)] dark:text-green-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-[var(--ai-text-title)] dark:text-green-200">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="leading-relaxed flex-grow text-[var(--ai-text-description)] dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Automation Packages Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--ai-section-heading)] dark:text-green-300 mb-4">
            AI Automation Packages
          </h2>
          <p className="text-lg text-[var(--ai-section-text)] dark:text-gray-300 max-w-3xl mx-auto">
            Choose the AI solution that fits your business needs and start automating your workflows today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-[var(--ai-card-bg)] border border-[var(--ai-card-border)] p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[var(--ai-card-hover-bg)] hover:shadow-[0_22px_44px_-28px_var(--ai-card-hover-shadow)] min-h-[600px] flex flex-col shadow-[0_18px_36px_-26px_var(--ai-card-hover-shadow)] dark:bg-gray-900/50 dark:border-green-800/60 dark:hover:bg-gray-800/60 dark:hover:shadow-green-500/25 dark:shadow-none ${pkg.popular ? 'ring-2 ring-[var(--ai-popular-ring)] dark:ring-green-500/50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-600 to-lime-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border shadow-md flex-shrink-0 bg-[var(--ai-icon-bg)] border-[var(--ai-icon-border)] dark:bg-gray-800 dark:border-green-600/60 dark:shadow-green-500/25"
                  style={{ boxShadow: '0 12px 24px -16px var(--ai-icon-shadow)' }}
                >
                  <pkg.icon className="h-6 w-6 text-[var(--ai-icon-color)] dark:text-green-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-[var(--ai-text-title)] dark:text-green-200">{pkg.name}</h3>
                  <p className="text-sm text-[var(--ai-text-description)] dark:text-gray-400">{pkg.description}</p>
                </div>
              </div>


              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-[var(--ai-text-description)] dark:text-gray-300">
                      <CheckIcon className="h-4 w-4 text-[var(--ai-accent)] mr-2 mt-0.5 flex-shrink-0 dark:text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className={`w-full ${pkg.popular
                      ? 'bg-gradient-to-r from-green-600 to-lime-600 text-white hover:from-green-700 hover:to-lime-700'
                      : 'border border-[var(--ai-card-border)] bg-[var(--ai-card-bg)] text-[var(--ai-text-title)] hover:bg-[var(--ai-card-hover-bg)] dark:bg-gray-800 dark:text-green-100 dark:border-green-700/50 dark:hover:bg-gray-700'
                    } transition duration-300 shadow-lg`}
                  >
                    {pkg.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* AI Usage Transparency Section */}
        <div
          className="rounded-2xl p-8 backdrop-blur-sm border border-[var(--ai-addon-border)] dark:border-green-700/50"
          style={{ background: 'linear-gradient(135deg, var(--ai-addon-bg-from), var(--ai-addon-bg-to))' }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, #16a34a, #84cc16)' }}>
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-[var(--ai-addon-title)] dark:text-green-200 mb-4">Transparent AI Usage Billing</h3>
            <p className="max-w-3xl mx-auto text-[var(--ai-addon-text)] dark:text-gray-300">
              Our AI services use usage-based billing to ensure you only pay for what you use. All packages include generous usage allowances,
              and any overage is transparently billed in the next cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-[var(--ai-addon-card-bg)] border border-[var(--ai-addon-card-border)] rounded-xl p-6 dark:bg-transparent dark:border-green-700/50">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border bg-[var(--ai-addon-icon-bg)] border-[var(--ai-addon-icon-border)] dark:bg-gray-800 dark:border-green-700/50"
              >
                <Zap className="h-6 w-6 text-[var(--ai-addon-highlight)] dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--ai-text-title)] dark:text-green-200 mb-2">Real-time Monitoring</h4>
              <p className="text-sm text-[var(--ai-addon-card-text)] dark:text-gray-400">Track your AI usage in real-time with detailed analytics and insights</p>
            </div>
            <div className="text-center bg-[var(--ai-addon-card-bg)] border border-[var(--ai-addon-card-border)] rounded-xl p-6 dark:bg-transparent dark:border-green-700/50">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border bg-[var(--ai-addon-icon-bg)] border-[var(--ai-addon-icon-border)] dark:bg-gray-800 dark:border-green-700/50"
              >
                <Settings2Icon className="h-6 w-6 text-[var(--ai-addon-highlight)] dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--ai-text-title)] dark:text-green-200 mb-2">Flexible Scaling</h4>
              <p className="text-sm text-[var(--ai-addon-card-text)] dark:text-gray-400">Automatically scales with your business needs - no manual adjustments required</p>
            </div>
            <div className="text-center bg-[var(--ai-addon-card-bg)] border border-[var(--ai-addon-card-border)] rounded-xl p-6 dark:bg-transparent dark:border-green-700/50">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border bg-[var(--ai-addon-icon-bg)] border-[var(--ai-addon-icon-border)] dark:bg-gray-800 dark:border-green-700/50"
              >
                <CheckIcon className="h-6 w-6 text-[var(--ai-addon-highlight)] dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--ai-text-title)] dark:text-green-200 mb-2">No Hidden Costs</h4>
              <p className="text-sm text-[var(--ai-addon-card-text)] dark:text-gray-400">Clear, transparent pricing with no setup fees or hidden charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative z-10 py-20 mt-16"
        style={{ background: 'linear-gradient(135deg, var(--ai-cta-bg-from), var(--ai-cta-bg-to))' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--ai-cta-title)] dark:text-green-100">
            Ready to Embrace the AI Revolution?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[var(--ai-cta-text)] dark:text-green-200/95">
            Let&#39;s explore how AI automation can solve your specific challenges and unlock new opportunities for growth and efficiency.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-lime-600 text-white hover:from-green-700 hover:to-lime-700 group transform hover:scale-105 transition duration-300 shadow-lg shadow-green-500/30">
              Discuss Your AI Strategy <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 
