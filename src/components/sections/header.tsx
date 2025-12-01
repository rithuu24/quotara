"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const GigaLogo = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        d="M14.901 0.038C18.057 -0.179 21.208 0.544 23.953 2.118C26.699 3.691 28.917 6.044 30.325 8.878C31.734 11.711 32.27 14.899 31.867 18.038C31.327 22.246 29.137 26.068 25.78 28.662C22.422 31.256 18.171 32.41 13.963 31.87C10.825 31.467 7.875 30.142 5.489 28.063C3.104 25.985 1.388 23.245 0.559 20.191C-0.27 17.137 -0.175 13.906 0.832 10.906C1.84 7.906 3.714 5.272 6.218 3.338C8.722 1.403 11.744 0.255 14.901 0.038Z"
        fill="currentColor"
      />
    </svg>
);

const NavLink = ({ href, children, isExternal = false }: { href: string; children: React.ReactNode; isExternal?: boolean }) => {
  const commonClasses = "block text-sm font-inter text-foreground rounded-2xl px-[18px] py-1 transition-all duration-200 hover:bg-black/5";
  
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={commonClasses}>
      {children}
    </Link>
  );
};


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{ backgroundColor: 'transparent' }}
      className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 transition-all duration-300"
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-0">
        <div className={`flex h-10 md:h-12 w-full max-w-5xl mx-auto items-center justify-between rounded-full border px-3 md:px-4 transition-all duration-300 ${
          isScrolled 
            ? 'border-border bg-white shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/95' 
            : 'border-border/60 bg-white/60 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/50'
        } animate-in fade-in slide-in-from-top-2 ease-out`}>
          <Link href="/" aria-label="Quotara Home" className="flex items-center gap-2">
            <GigaLogo />
            <span className="ml-1 text-xs md:text-sm font-medium tracking-tight text-foreground">Quotara</span>
          </Link>
          
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-1">
              <li>
                <NavLink href="/features">Features</NavLink>
              </li>
              <li>
                <NavLink href="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink href="/product">Product</NavLink>
              </li>
              <li>
                <NavLink href="/changelog">Changelog</NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-x-2 md:gap-x-3">
            <a 
              href="/login"
              className="hidden sm:block text-xs md:text-sm text-black transition-colors hover:text-neutral-700"
            >
              Sign in
            </a>
            <Link 
              href="/generate"
              className="btn-text flex h-8 md:h-10 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 px-4 md:px-6 text-xs md:text-sm text-white transition-all duration-200 hover:scale-105 shadow-md"
            >
              Generate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 md:top-24 bg-white rounded-2xl border border-border shadow-xl p-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="block px-4 py-3 text-sm rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="block px-4 py-3 text-sm rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product" className="block px-4 py-3 text-sm rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Product
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="block px-4 py-3 text-sm rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Changelog
                </Link>
              </li>
              <li className="sm:hidden pt-2 border-t border-border">
                <Link href="/login" className="block px-4 py-3 text-sm rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}