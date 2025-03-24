import AboutSection from '@/components/pages/home/sections/about-section';
import HeroSection from '@/components/pages/home/sections/hero-section';
import ServicesSection from '@/components/pages/home/sections/specialties-section';

import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';
import SchemaMarkup from '@/components/schema-markup';
import GallerySection from '@/components/pages/home/sections/gallery-section';
import ServiceSection from '@/components/pages/home/sections/service-section';
import naseStoritve from '@/const/services';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'sl' }];
}

// Generate metadata for this specific page
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;

  // For the home page, we'll use the base metadata but can customize if needed
  // Here we're just passing the locale to use the base metadata for the home page
  return generatePageMetadata(locale);
}

export default function Home() {
  // Await params before using them


  // Enable static rendering




  return (
    <div>
      <SchemaMarkup></SchemaMarkup>
      <HeroSection />
      <ServiceSection title="Naše storitve" services={naseStoritve} />
      <ServicesSection />
      <GallerySection></GallerySection>
      <AboutSection />
    </div>
  );
}