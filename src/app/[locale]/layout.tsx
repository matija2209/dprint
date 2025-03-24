import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import LanguageSwitcher from '@/components/language-switcher';
import { FooterSection } from '@/components/layout/footer';
import { Suspense } from 'react';
import CookieConsent from '@/components/cookie-consent';
import Navbar from '@/components/layout/navbar';
import { getLocalizedMetadata } from '@/utils/metadata';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata dynamically based on locale
export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  return getLocalizedMetadata(params.locale);
}

export default async function IntlLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  // Validate that the incoming locale is supported
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <header>
            <Navbar locale={locale}></Navbar>
          </header>
          <main>{children}</main>
          <Suspense fallback={null}>
            <CookieConsent />
          </Suspense>
        </NextIntlClientProvider>
      </body>
      <FooterSection locale={locale} />
    </html>
  );
}