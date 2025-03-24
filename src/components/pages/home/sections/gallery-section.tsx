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
            id: 1, src: '/gallery/480515831_122253279692011368_3665798471102718709_n.jpg', alt: 'Photo 1',
            base64: '/gallery/480515831_122253279692011368_3665798471102718709_n_tiny.base64'
        },
        {
            id: 2, src: '/gallery/480873034_122254149908011368_4080191001506018990_n.jpg', alt: 'Photo 2',
            base64: '/gallery/480873034_122254149908011368_4080191001506018990_n_tiny.base64'
        },
        {
            id: 3, src: '/gallery/480656234_122253297350011368_8031625183236284881_n.jpg', alt: 'Photo 3',
            base64: '/gallery/480656234_122253297350011368_8031625183236284881_n_tiny.base64'
        },
        {
            id: 4, src: '/gallery/480792703_122253155354011368_5276088947480805374_n.jpg', alt: 'Photo 4',
            base64: '/gallery/480792703_122253155354011368_5276088947480805374_n_tiny.base64'
        },
        {
            id: 5, src: '/gallery/480670326_122253155360011368_405284199575784683_n.jpg', alt: 'Photo 5',
            base64: '/gallery/480670326_122253155360011368_405284199575784683_n_tiny.base64'
        },
        {
            id: 6, src: '/gallery/480800373_971162121626412_475214326180915934_n.jpg', alt: 'Photo 6',
            base64: '/gallery/480800373_971162121626412_475214326180915934_n_tiny.base64'
        },
        {
            id: 7, src: '/gallery/480866512_122253155366011368_3614139722600043425_n.jpg', alt: 'Photo 7',
            base64: '/gallery/480866512_122253155366011368_3614139722600043425_n_tiny.base64'
        },
        {
            id: 8, src: '/gallery/481659578_122253268010011368_3885109405305600710_n.jpg', alt: 'Photo 8',
            base64: '/gallery/481659578_122253268010011368_3885109405305600710_n_tiny.base64'
        },
        {
            id: 9, src: '/gallery/480821957_122253155294011368_2117994692405556923_n.jpg', alt: 'Photo 9',
            base64: '/gallery/480821957_122253155294011368_2117994692405556923_n_tiny.base64'
        },
        {
            id: 10, src: '/gallery/481764712_1271916723907265_4775923972243723330_n.jpg', alt: 'Photo 10',
            base64: '/gallery/481764712_1271916723907265_4775923972243723330_n_tiny.base64'
        },
        {
            id: 11, src: '/gallery/480574699_122253267668011368_5622279642932557059_n.jpg', alt: 'Photo 11',
            base64: '/gallery/480574699_122253267668011368_5622279642932557059_n_tiny.base64'
        },
        {
            id: 12, src: '/gallery/480675183_122252991878011368_5224232788079875141_n.jpg', alt: 'Photo 12',
            base64: '/gallery/480675183_122252991878011368_5224232788079875141_n_tiny.base64'
        },
        {
            id: 13, src: '/gallery/481480283_122252991998011368_3486971956366228585_n.jpg', alt: 'Photo 13',
            base64: '/gallery/481480283_122252991998011368_3486971956366228585_n_tiny.base64'
        },
        {
            id: 14, src: '/gallery/480663781_122253155372011368_8853995181422873893_n.jpg', alt: 'Photo 14',
            base64: '/gallery/480663781_122253155372011368_8853995181422873893_n_tiny.base64'
        },
        {
            id: 15, src: '/gallery/481186238_122252991902011368_2401423948361809853_n.jpg', alt: 'Photo 15',
            base64: '/gallery/481186238_122252991902011368_2401423948361809853_n_tiny.base64'
        },
        {
            id: 16, src: '/gallery/481260861_122252991848011368_7653043730461299424_n.jpg', alt: 'Photo 16',
            base64: '/gallery/481260861_122252991848011368_7653043730461299424_n_tiny.base64'
        },
        {
            id: 17, src: '/gallery/481129071_122252991872011368_7694916732258148784_n.jpg', alt: 'Photo 17',
            base64: '/gallery/481129071_122252991872011368_7694916732258148784_n_tiny.base64'
        },
        {
            id: 18, src: '/gallery/476339392_122249307602011368_1117639152581130051_n.jpg', alt: 'Photo 18',
            base64: '/gallery/476339392_122249307602011368_1117639152581130051_n_tiny.base64'
        },
        {
            id: 19, src: '/gallery/476148890_122249710568011368_4942463736761389528_n.jpg', alt: 'Photo 19',
            base64: '/gallery/476148890_122249710568011368_4942463736761389528_n_tiny.base64'
        },
        {
            id: 20, src: '/gallery/480729251_122252949830011368_5602459083436066805_n.jpg', alt: 'Photo 20',
            base64: '/gallery/480729251_122252949830011368_5602459083436066805_n_tiny.base64'
        },
        {
            id: 21, src: '/gallery/462144168_2235330666839481_5930278963158573713_n.jpg', alt: 'Photo 21',
            base64: '/gallery/462144168_2235330666839481_5930278963158573713_n_tiny.base64'
        }
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