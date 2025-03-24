// app/gallery/page.jsx
'use client'; // Required for client-side interactivity (lightbox)

import ContainedSection from '@/components/layout/container-section';
import SectionHeading from '@/components/layout/section-heading';
import { Gallery } from '@/components/modules/gallery';
import { Photo } from '@/components/modules/gallery/types';
import { useTranslations } from 'next-intl';

export default function GallerySection() {
    const t = useTranslations('HomePage.gallery');

    // Define photos in the section and pass them to the gallery component
    const photos: Photo[] = [
        {
            id: 1, src: '/gallery/bauher_1.jpg', alt: 'Photo 1',
            base64: '/gallery/bauher_1_tiny.base64'
        },
        {
            id: 2, src: '/gallery/bauher_2.jpg', alt: 'Photo 2',
            base64: '/gallery/bauher_2_tiny.base64'
        },
        {
            id: 3, src: '/gallery/bauher_3.jpg', alt: 'Photo 3',
            base64: '/gallery/bauher_3_tiny.base64'
        },
        {
            id: 4, src: '/gallery/bauher_4.jpg', alt: 'Photo 4',
            base64: '/gallery/bauher_4_tiny.base64'
        },
        {
            id: 5, src: '/gallery/bauher_5.jpg', alt: 'Photo 5',
            base64: '/gallery/bauher_5_tiny.base64'
        },
    ];

    return (
        <ContainedSection sectionClassName='bg-gray-100 py-36'>
            <SectionHeading>
                <SectionHeading.Title>
                    {t('title')}
                </SectionHeading.Title>
                <SectionHeading.Description className='text-secondary-background font-light'>
                    {t('description')}
                </SectionHeading.Description>
            </SectionHeading>

            {/* Gallery Component */}
            <Gallery photos={photos} />
        </ContainedSection>
    );
}