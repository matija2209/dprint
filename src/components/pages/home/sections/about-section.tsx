import React from 'react';
import { useTranslations } from 'next-intl';
import GridLines from '@/components/visuals-patterns/grid-lines';
import { ContactForm } from '@/components/contact-form';
import ContainedSection from '@/components/layout/container-section';
import SectionHeading from '@/components/layout/section-heading';
// import { ContactForm } from '@/components/contact-form';

function AboutSection() {
  const t = useTranslations('HomePage');

  return (
    <>
      <ContainedSection id='about' sectionClassName='bg-primary/70 text-white py-32 relative'>
        <SectionHeading>
          <SectionHeading.Title className='text-secondary-background'>{t('about.title')}</SectionHeading.Title>
          <SectionHeading.Description className='text-secondary-background'>{t('about.paragraph1')}</SectionHeading.Description>
          <SectionHeading.Description className='text-secondary-background'>{t('about.paragraph2')}</SectionHeading.Description>
        </SectionHeading>
        {/* Create the slanted edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-bottom-right"></div>
      </ContainedSection>
      <ContainedSection id='contact' sectionClassName='bg-white py-16'>
        {/* Contact section with form */}
        <div className="mx-auto px-4 flex flex-col md:flex-row items-start gap-8">
          {/* Contact info column */}
          <div className="md:w-1/3 w-full">
            <h3 className="text-2xl font-bold mb-6">{t('contact.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{process.env.NEXT_PUBLIC_COMPANY_NAME}<br />{process.env.NEXT_PUBLIC_STREET}<br />{process.env.NEXT_PUBLIC_ZIP} {process.env.NEXT_PUBLIC_CITY}<br />{process.env.NEXT_PUBLIC_COUNTRY}</span>
              </div>
            </div>
          </div>
          {/* Contact form column */}
          <div className="md:w-2/3 w-full mt-8 md:mt-0">
            <ContactForm />
          </div>
        </div>

      </ContainedSection>
    </>

  );
}

export default AboutSection;