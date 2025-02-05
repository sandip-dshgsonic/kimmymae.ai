"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DoubleHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 64); // Height of first header
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#' },
    { name: 'Industries', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Learning', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Salesforce+', href: '#' },
  ];

  const secondaryNavItems = [
    { name: 'Overview', href: '#' },
    { name: 'How it works', href: '#' },
    { name: 'Use Cases', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  return (
    <>
      {/* First Header */}
      <nav className={cn(
        "bg-white border-b border-gray-200 fixed w-full top-0 z-50 transition-transform duration-300",
        isScrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center h-[64px] px-6">
            {/* Logo and primary navigation */}
            <div className="flex items-center flex-1">
              {/* <Link href="/" className="flex-shrink-0 mr-8">
                <img
                  className="h-[25px] w-auto"
                  src="https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg"
                  alt="Salesforce"
                />
              </Link> */}
              <div className="hidden lg:flex lg:items-center lg:space-x-7">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[14px] text-[#032D60] hover:text-[#0176D3] font-semibold flex items-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Secondary Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <button 
                className="text-[#032D60] hover:text-[#0176D3]"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link 
                href="#" 
                className="text-[14px] text-[#032D60] hover:text-[#0176D3]"
              >
                Contact Us
              </Link>
              <Link 
                href="#" 
                className="text-[14px] text-[#032D60] hover:text-[#0176D3]"
              >
                1800-420-7332
              </Link>
              <button 
                className="text-[#032D60] hover:text-[#0176D3]"
                aria-label="Select Region"
              >
                <Globe className="h-5 w-5" />
              </button>
              <Link
                href="#"
                className="text-[14px] text-[#032D60] hover:text-[#0176D3] font-semibold"
              >
                Login
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-5 py-[10px] text-[14px] font-semibold rounded-[4px] text-white bg-[#0176D3] hover:bg-[#0B5CAB] transition-colors"
              >
                Try for free
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-[#032D60]"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={cn(
            "lg:hidden absolute w-full bg-white border-b border-gray-200",
            isOpen ? "block" : "hidden"
          )}>
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-[14px] text-[#032D60] hover:text-[#0176D3] font-semibold"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Link
                  href="#"
                  className="block text-[14px] text-[#032D60] hover:text-[#0176D3]"
                >
                  Contact Us
                </Link>
                <Link
                  href="tel:1800-420-7332"
                  className="block text-[14px] text-[#032D60] hover:text-[#0176D3]"
                >
                  1800-420-7332
                </Link>
                <Link
                  href="#"
                  className="block text-[14px] text-[#032D60] hover:text-[#0176D3] font-semibold"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="block w-full text-center px-5 py-[10px] text-[14px] font-semibold rounded-[4px] text-white bg-[#0176D3] hover:bg-[#0B5CAB] transition-colors"
                >
                  Try for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Header */}
      <nav className={cn(
        "bg-white border-b border-gray-200 fixed w-full z-40 transition-all duration-300",
        isScrolled ? "top-0" : "top-[64px]"
      )}>
        <div className="max-w-[1440px] mx-auto">
          <div className={cn(
            "flex items-center px-6 transition-all duration-300",
            isScrolled ? "h-[52px]" : "h-[64px]"
          )}>
            <Link href="/" className="flex-shrink-0 mr-8">
              <img
                className={cn(
                  "w-auto transition-all duration-300",
                  isScrolled ? "h-[20px]" : "h-[25px]"
                )}
                src="/images/120.png"
                alt="Agentforce"
              />
            </Link>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[14px] text-[#032D60] hover:text-[#0176D3] font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-auto hidden lg:flex lg:items-center lg:space-x-4">
              <Link
                href="#"
                className="px-4 py-2 text-[14px] font-semibold text-white bg-[#0176D3] rounded-[4px] hover:bg-[#0B5CAB] transition-colors"
              >
                Watch demos
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-[14px] font-semibold text-[#0176D3] border border-[#0176D3] rounded-[4px] hover:bg-[#F4F6F9] transition-colors"
              >
                Join the community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed headers */}
      <div className={cn(
        "transition-all duration-300",
        isScrolled ? "h-[32px]" : "h-[128px]"
      )} />
    </>
  );
}