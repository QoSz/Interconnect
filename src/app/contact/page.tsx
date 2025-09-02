import type { Metadata } from 'next';
import Contact from './Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Interconnect for web development, digital marketing, AI automation, or IT consulting services in Kenya. Contact Yash Shah and Nirav Challa today to discuss your project.',
  keywords: [
    'contact Interconnect',
    'Kenya IT support contact',
    'web development contact Kenya',
    'digital marketing Kenya contact',
    'AI automation Kenya contact',
    'IT consulting Nairobi contact',
    'Interconnect phone number',
    'Interconnect email address',
  ],
  openGraph: {
    title: 'Contact Interconnect - Let\'s Build Your Digital Future',
    description: 'Reach out to Interconnect for expert digital solutions in Kenya. We\'re ready to discuss your project and help you achieve your business goals.',
    url: '/contact'
  },
  twitter: {
    title: 'Contact Interconnect | Digital Solutions Kenya',
    description: 'Connect with Interconnect for innovative web, digital marketing, AI automation, and IT consulting services. Let\'s talk!'
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
    return (
        <Contact />
    );
}