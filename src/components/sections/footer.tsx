import { X, LinkedinIcon } from 'lucide-react';
import QuotylLogo from '@/components/QuotylLogo';

const GigaLogoWithText = () => (
  <a href="/" className="flex items-center gap-2.5">
    <QuotylLogo size="small" />
  </a>
);

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms Of Service', href: '/terms' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background-light border-t border-border">
      <div className="container py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-10 md:gap-12 pb-8 sm:pb-10 md:pb-12">
          <div className="flex-shrink-0">
            <GigaLogoWithText />
          </div>
          <div className="flex flex-wrap justify-start sm:justify-end gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col min-w-[120px]">
                <h3 className="text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">{column.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-[10px] sm:text-xs text-[#999999] text-center sm:text-left">
            Copyright © 2025 Quotyl Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" aria-label="X social media">
              <X className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-[#999999] hover:text-primary transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn social media">
              <LinkedinIcon className="h-[18px] w-[18px] sm:h-5 sm:w-5 text-[#999999] hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;