import type { Metadata } from 'next';

import About from './About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the passionate team behind Interconnect. Learn about our mission, values, and the expertise of Yash Shah and Nirav Challa, driving innovative digital solutions in Kenya.',
  keywords: [
    'about Interconnect',
    'Interconnect team',
    'Yash Shah',
    'Nirav Challa',
    'digital solutions Kenya founders',
    'our mission',
    'company values',
    'tech startup Kenya',
    'Kenyan tech entrepreneurs',
  ],
  openGraph: {
    title: 'About Interconnect - Our Team and Mission',
    description: 'Discover the dedicated team, Yash Shah and Nirav Challa, and the core values that drive Interconnect. We are passionate about delivering exceptional digital solutions.',
    url: '/about', // Resolves to https://www.interconnect.co.ke/about
  },
  twitter: {
    title: 'Meet the Team Behind Interconnect',
    description: 'Learn about Yash Shah and Nirav Challa, the founders of Interconnect, and their vision for digital excellence in Kenya.'
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <About />
  );
}
