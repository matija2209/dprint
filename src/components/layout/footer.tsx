import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png';
import CurrentYear from '../current-year';
import { useTranslations } from 'next-intl';

export function FooterSection({ locale }: { locale: string }) {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Link href={`/${locale}`} className="flex items-center">

              <Image
                src={Logo}
                alt="D-Print Logo"
                width={180}
                height={60}
                className="mb-4"
              />
            </Link>
            <div className="text-sm space-y-1">
              <p className="font-semibold">{process.env.NEXT_PUBLIC_COMPANY_NAME}</p>
              <p>{process.env.NEXT_PUBLIC_STREET}</p>
              <p>{process.env.NEXT_PUBLIC_ZIP} {process.env.NEXT_PUBLIC_CITY}</p>
              <p>ID za DDV: {process.env.NEXT_PUBLIC_VAT_ID}</p>
            </div>
          </div>

          {/* Company Description */}
          <div className="col-span-1 md:col-span-2 space-y-3 text-sm">
            <p className="font-semibold text-gray-900 mb-2">{t('about.title')}</p>
            <p>
              {t('about.description1')}
            </p>
            <p>
              {t('about.description2')}
            </p>
          </div>
        </div>

        {/* Contact and Navigation */}
        <div className="mt-8 pt-8 border-t border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-900 mb-2">{t('contact.title')}</p>

            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="block hover:text-blue-600 transition-colors"
            >
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-900 mb-2">{t('navigation.title')}</p>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-600 transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#services`} className="hover:text-blue-600 transition-colors">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#contact`} className="hover:text-blue-600 transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-900 mb-2">{t('legal.title')}</p>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/zasebnost`} className="hover:text-blue-600 transition-colors">
                  {t('legal.privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/pogoji-uporabe`} className="hover:text-blue-600 transition-colors">
                  {t('legal.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-gray-600 text-center">
          © <CurrentYear /> {process.env.NEXT_PUBLIC_COMPANY_NAME}. {t('copyright')}
        </p>
      </div>
    </footer>
  );
} 