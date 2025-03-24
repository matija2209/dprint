'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '../language-switcher';
import logoImg from '@/assets/logo.png';
import logoImgBlack from '@/assets/logo.png';
const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/#services`, label: t('services') },
    { href: `/${locale}/#about`, label: t('about') },
    { href: `/${locale}/#contact`, label: t('contact') },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src={isScrolled ? logoImgBlack : logoImg}
              alt="D-Print Logo"
              width={55}
              height={20}
              className="h-auto w-auto "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
              >
                {link.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Language Switcher - Directly integrated */}
            {/* <div className={isScrolled ? 'text-gray-800' : 'text-white'}>
              <LanguageSwitcher />
            </div> */}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`fixed top-4 right-4 z-50 rounded-full w-10 h-10 flex items-center justify-center ${isScrolled ? 'bg-white text-gray-800 shadow-md' : 'text-white'
                    }`}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Image src={logoImgBlack} alt="D-Print Logo" width={120} height={40} className="h-auto w-auto" />
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>

                  <nav className="flex-1 overflow-y-auto py-4">
                    <div className="space-y-1 px-2">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={`flex items-center px-3 py-3 rounded-lg text-base font-medium transition-colors relative group ${pathname === link.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-700 hover:text-primary'
                              }`}
                          >
                            {link.label}
                            <span className="absolute left-3 bottom-1 h-0.5 w-0 bg-current group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  <div className="border-t border-gray-100 p-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">{t('language')}</p>
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;