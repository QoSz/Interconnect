import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Bot, Workflow, Brain, Zap } from 'lucide-react';

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