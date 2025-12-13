"use client";

import Link from 'next/link';
import { Menu, X, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { QuotylLogoCompact } from '@/components/QuotylLogo';

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
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (user) {
        setDisplayName(
          (user.user_metadata?.full_name as string | undefined) ??
            (user.user_metadata?.name as string | undefined) ??
            user.email ??
            null
        );
      } else {
        setDisplayName(null);
      }
    };

    loadUser();
    const {
      data: authListener,
    } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setDisplayName(null);
    setMobileMenuOpen(false);
  };

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
          <Link href="/" aria-label="Quotyl Home" className="flex items-center gap-2">
            <QuotylLogoCompact />
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
            {displayName ? (
              <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm text-black">
                <span className="rounded-full bg-black/5 px-3 py-1">{displayName}</span>
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs md:text-sm text-black hover:bg-black/5 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            ) : (
              <a 
                href="/login"
                className="hidden sm:block text-xs md:text-sm text-black transition-colors hover:text-neutral-700"
              >
                Sign in
              </a>
            )}
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
                {displayName ? (
                  <div className="flex items-center justify-between gap-2 px-4 py-3 text-sm rounded-xl">
                    <span className="font-medium">{displayName}</span>
                    <button
                      onClick={handleSignOut}
                      className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-black hover:bg-black/5 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </div>
                ) : (
                  <Link href="/login" className="block px-4 py-3 text-sm rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}