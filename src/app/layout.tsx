import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import DynamicBackground from '@/components/shared/DynamicBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interconnect - Modern IT Services',
  description: 'Innovative IT solutions for web development, consulting, cybersecurity, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <DynamicBackground />
            <Navigation />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}