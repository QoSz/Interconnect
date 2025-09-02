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
  CircleHelp
} from "lucide-react";

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
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/30 bg-gray-950/30 backdrop-blur-md">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-white text-2xl">
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
              className="text-gray-300 flex items-center group hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-200"
            >
              <Home className="mr-2 h-4 w-4 group-hover:text-blue-400 transition-colors duration-200" />
              <span>Home</span>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-300 flex items-center group hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-200">
                  <CircleHelp className="mr-2 h-4 w-4 group-hover:text-blue-400 transition-colors duration-200" />
                  <span>Services</span>
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:text-blue-400 transition-colors duration-200" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.href} asChild className="p-0 focus:bg-transparent">
                    <Link
                      href={service.href}
                      className="flex items-center cursor-pointer w-full p-2 rounded-sm text-gray-300 bg-transparent transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-black hover:font-medium data-[highlighted]:bg-transparent"
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
                className="text-gray-300 flex items-center group hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                <link.icon className="mr-2 h-4 w-4 group-hover:text-blue-400 transition-colors duration-200" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-gray-900/90 border-gray-800 backdrop-blur-md [&>button]:text-white [&>button]:hover:text-gray-300 [&>button]:transition-colors"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">
                    <Link href="/" className="flex items-center">
                       <span className="font-bold text-3xl">
                         <span className="text-white">Inter</span>
                         <span className="animated-gradient bg-clip-text text-transparent">
                           connect
                         </span>
                       </span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="text-gray-400">
                    Your connection to the digital world.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4">
                  {mainLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                       <Link
                         href={link.href}
                         className="flex items-center space-x-2 rounded-md p-2 text-gray-300 hover:bg-gray-800/40 group transition-all duration-200"
                       >
                         {link.icon && <link.icon className="h-5 w-5 group-hover:text-blue-400 transition-colors duration-200" />}
                         <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">{link.label}</span>
                       </Link>
                    </SheetClose>
                  ))}
                  <div className="px-2 text-gray-400 text-sm font-medium py-1">Services</div>
                  {serviceLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                       <Link
                         href={link.href}
                         className="flex items-center space-x-2 rounded-md p-2 pl-4 text-gray-300 hover:bg-gray-800/40 group transition-all duration-200"
                       >
                         <link.icon className="h-5 w-5 group-hover:text-blue-400 transition-colors duration-200" />
                         <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">{link.label}</span>
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