import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import KissSoftLogo from '@/assets/kisssoft_logo.svg';
import Image from 'next/image';

// New TitleSubtitle Component
interface TitleSubtitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaText?: React.ReactNode;
  ctaHref?: string;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref = '/#contact'
}) => {
  return (
    <div className="max-w-2xl">
      <h1 className="
        text-3xl     // Base (mobile) size
        sm:text-4xl  // Small screens
        md:text-5xl  // Medium screens
        lg:text-5xl  // Large screens
        xl:text-6xl  // Extra-large screens
        2xl:text-8xl // 2X large screens
        font-bold 
        mb-4
      ">{title}</h1>
      {subtitle && (
        <p className="
          text-lg     // Base (mobile) size
          sm:text-xl  // Small screens
          md:text-xl  // Medium screens
          lg:text-2xl // Large screens
          xl:text-2xl // Extra-large screens
          2xl:text-3xl // 2X large screens
          mb-8
        ">
          {subtitle}
        </p>
      )}
      {ctaText && (
        <Button
          size={'xl'}
          asChild
        >
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      )}
    </div>
  );
};

interface HeroProps {
  ctaHref?: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroProps> = ({
  ctaHref = '/#contact',
  imageUrl = '/hero.jpg' // Default to remote image path
}) => {
  const t = useTranslations('HomePage.hero');

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] text-white flex items-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay with direct inline style for opacity */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.4 }}
        ></div>

        {/* Content */}
        <div className="container animate-fade-in mx-auto px-4 max-w-7xl relative z-10">
          <TitleSubtitle
            title={t('title')}
            subtitle={t('subtitle')}
            ctaText={t('ctaText')}
            ctaHref={ctaHref}
          />
        </div>
      </div>

      {/* Representative Banner */}
      {t('representativeOf') && (
        <div className="bg-gray-200 py-12">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <p className="text-gray-700">
              <span className="font-medium">{t('representativeLabel')} </span>
              <span className="text-blue-800 text-2xl font-semibold">
                {/* {t('representativeOf')} */}
                <Image className='inline-block' src={KissSoftLogo} alt="KissSoft Logo" width={100} height={100} />
              </span>
            </p>
            {t.raw('countries') && (
              <p className="text-gray-600 mt-2">
                {(t.raw('countries') as string[]).join(' · ')}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;