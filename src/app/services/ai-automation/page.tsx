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
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/15 to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-400 to-green-500 animate-gradient-x">
          AI Automation That Works
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-green-300">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative z-10 bg-gray-900/50 border border-green-800/60 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 min-h-[250px] flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-green-600/60 shadow-md shadow-green-500/25 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-green-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-lg font-semibold text-green-200">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Automation Packages Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-300 mb-4">AI Automation Packages</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the AI solution that fits your business needs and start automating your workflows today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 border ${pkg.popular ? 'border-green-500/70 ring-2 ring-green-500/50' : 'border-green-800/60'} p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 min-h-[600px] flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-600 to-lime-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-green-600/60 shadow-md shadow-green-500/25 flex-shrink-0">
                  <pkg.icon className="h-6 w-6 text-green-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-green-200">{pkg.name}</h3>
                  <p className="text-sm text-gray-400">{pkg.description}</p>
                </div>
              </div>


              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
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
                    className={`w-full ${pkg.popular
                      ? 'bg-gradient-to-r from-green-600 to-lime-600 text-white hover:from-green-700 hover:to-lime-700'
                      : 'bg-gray-800 text-green-100 hover:bg-gray-700 border border-green-700/50'
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
        <div className="bg-gradient-to-r from-green-900/30 to-lime-900/30 border border-green-700/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-lime-600 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-green-200 mb-4">Transparent AI Usage Billing</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our AI services use usage-based billing to ensure you only pay for what you use. All packages include generous usage allowances,
              and any overage is transparently billed in the next cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 border border-green-700/50">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2">Real-time Monitoring</h4>
              <p className="text-sm text-gray-400">Track your AI usage in real-time with detailed analytics and insights</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 border border-green-700/50">
                <Settings2Icon className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2">Flexible Scaling</h4>
              <p className="text-sm text-gray-400">Automatically scales with your business needs - no manual adjustments required</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 border border-green-700/50">
                <CheckIcon className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-green-200 mb-2">No Hidden Costs</h4>
              <p className="text-sm text-gray-400">Clear, transparent pricing with no setup fees or hidden charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 bg-gradient-to-r from-green-800/80 to-lime-800/60 py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-100 mb-4">Ready to Embrace the AI Revolution?</h2>
          <p className="text-lg text-green-200/95 max-w-2xl mx-auto mb-8">
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