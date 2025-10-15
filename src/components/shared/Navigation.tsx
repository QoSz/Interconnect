'use client'

import Link from "next/link";
import {
  Menu,
  Globe,
  Share2,
  Briefcase,
  Bot,
  User,
  Phone,
  ChevronDown,
  Home,
  CircleHelp,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { href: "/services/websites", label: "Websites", icon: Globe },
  { href: "/services/digital-marketing", label: "Digital Marketing", icon: Share2 },
  { href: "/services/ai-automation", label: "AI Automation", icon: Bot },
  { href: "/services/it-consulting", label: "IT Consulting", icon: Briefcase },
];

const mainLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        .animated-gradient {
          background-size: 400% 400%;
          background-image: linear-gradient(
            -45deg,
            #fde047,
            #fb923c,
            #f472b6,
            #8b5cf6,
            #3b82f6,
            #22d3ee,
            #fde047
          );
          animation: gradient-shift 10s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <header className="sticky top-0 z-50 w-full border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-md">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-[var(--nav-text)] text-2xl">
              <span>Inter</span>
              <span className="animated-gradient bg-clip-text text-transparent">
                connect
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {/* Home Link */}
            <Link
              href="/"
              className="text-[var(--nav-text-muted)] flex items-center group hover:bg-gradient-to-r hover:from-[var(--gradient-blue)] hover:to-[var(--gradient-cyan)] hover:bg-clip-text hover:text-transparent transition-all duration-200"
            >
              <Home className="mr-2 h-4 w-4 group-hover:text-[var(--gradient-blue)] transition-colors duration-200" />
              <span>Home</span>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-[var(--nav-text-muted)] flex items-center group hover:bg-gradient-to-r hover:from-[var(--gradient-blue)] hover:to-[var(--gradient-cyan)] hover:bg-clip-text hover:text-transparent transition-all duration-200">
                  <CircleHelp className="mr-2 h-4 w-4 group-hover:text-[var(--gradient-blue)] transition-colors duration-200" />
                  <span>Services</span>
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:text-[var(--gradient-blue)] transition-colors duration-200" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-[var(--nav-dropdown-bg)] border-[var(--nav-border)]">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.href} asChild className="p-0 focus:bg-transparent">
                    <Link
                      href={service.href}
                      className="flex items-center cursor-pointer w-full p-2 rounded-sm text-[var(--nav-text-muted)] bg-transparent transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[var(--gradient-blue)] hover:to-[var(--gradient-cyan)] hover:text-white dark:hover:text-black hover:font-medium data-[highlighted]:bg-transparent"
                    >
                      <service.icon className="mr-2 h-4 w-4 transition-colors duration-300" />
                      <span>{service.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About and Contact Links */}
            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--nav-text-muted)] flex items-center group hover:bg-gradient-to-r hover:from-[var(--gradient-blue)] hover:to-[var(--gradient-cyan)] hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <link.icon className="mr-2 h-4 w-4 group-hover:text-[var(--gradient-blue)] transition-colors duration-200" />
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-[var(--nav-text-muted)] hover:text-[var(--gradient-blue)] hover:bg-[var(--nav-hover)] transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-[var(--nav-text-muted)] hover:text-[var(--gradient-blue)] hover:bg-[var(--nav-hover)] transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[var(--nav-text-muted)]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[var(--nav-sheet-bg)] border-[var(--nav-border)] backdrop-blur-md [&>button]:text-[var(--nav-text)] [&>button]:hover:text-[var(--nav-text-muted)] [&>button]:transition-colors"
              >
                <SheetHeader>
                  <SheetTitle className="text-[var(--nav-text)]">
                    <Link href="/" className="flex items-center">
                       <span className="font-bold text-3xl">
                         <span className="text-[var(--nav-text)]">Inter</span>
                         <span className="animated-gradient bg-clip-text text-transparent">
                           connect
                         </span>
                       </span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="text-[var(--nav-text-muted)]">
                    Your connection to the digital world.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4">
                  {mainLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                       <Link
                         href={link.href}
                         className="flex items-center space-x-2 rounded-md p-2 text-[var(--nav-text-muted)] hover:bg-[var(--nav-hover)] group transition-all duration-200"
                       >
                         {link.icon && <link.icon className="h-5 w-5 group-hover:text-[var(--gradient-blue)] transition-colors duration-200" />}
                         <span className="group-hover:bg-gradient-to-r group-hover:from-[var(--gradient-blue)] group-hover:to-[var(--gradient-cyan)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">{link.label}</span>
                       </Link>
                    </SheetClose>
                  ))}
                  <div className="px-2 text-[var(--nav-text-muted)] text-sm font-medium py-1">Services</div>
                  {serviceLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                       <Link
                         href={link.href}
                         className="flex items-center space-x-2 rounded-md p-2 pl-4 text-[var(--nav-text-muted)] hover:bg-[var(--nav-hover)] group transition-all duration-200"
                       >
                         <link.icon className="h-5 w-5 group-hover:text-[var(--gradient-blue)] transition-colors duration-200" />
                         <span className="group-hover:bg-gradient-to-r group-hover:from-[var(--gradient-blue)] group-hover:to-[var(--gradient-cyan)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">{link.label}</span>
                       </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
} 