import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/web-development" className="hover:underline">Web Development</Link></li>
                            <li><Link href="/services/it-consulting" className="hover:underline">IT Consulting</Link></li>
                            <li><Link href="/services/social-media" className="hover:underline">Social Media</Link></li>
                            <li><Link href="/services/cyber-security" className="hover:underline">Cyber Security</Link></li>
                            <li><Link href="/services/ai-chatbots" className="hover:underline">AI Chatbots</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:underline">About Us</Link></li>
                            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="https://twitter.com/interconnect" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                            <li><a href="https://linkedin.com/company/interconnect" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                            <li><a href="https://github.com/interconnect" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t border-border/40 pt-8 md:flex-row md:space-y-0">
                    <p className="text-sm text-muted-foreground">© 2023 Interconnect. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Button variant="outline" size="sm">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Link href="/newsletter">Subscribe to Newsletter</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

