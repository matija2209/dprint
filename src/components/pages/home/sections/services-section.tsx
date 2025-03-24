import FeatureBlock from '@/components/feature-block'
import GridLines from '@/components/visuals-patterns/grid-lines'
import React from 'react'
import serviceOne from '@/assets/software_demo.jpg'
import serviceTwo from '@/assets/man_looking_at_computer.jpg'
import serviceThree from '@/assets/gears_3.jpg'
import { useTranslations } from 'next-intl'

function ServicesSection() {
  const t = useTranslations('HomePage.services')
  
  return (
    <section id='services' className="bg-gray-100 py-36 relative">
        <GridLines></GridLines>
        <div className="mx-auto px-4 max-w-7xl space-y-36">
        <FeatureBlock
        image={serviceOne.src}
        kicker={t('service1.kicker')}
        title={t('service1.title')}
        subtitle={t('service1.subtitle')}
        inverted={true}
        titleClassName="text-blue-600"
      />
      <FeatureBlock
        image={serviceTwo.src}
        kicker={t('service2.kicker')}
        title={t('service2.title')}
        subtitle={t('service2.subtitle')}
        inverted={false}
        titleClassName="text-blue-600"
      />
      <FeatureBlock
        image={serviceThree.src}
        kicker={t('service3.kicker')}
        title={t('service3.title')}
        subtitle={t('service3.subtitle')}
        inverted={true}
        titleClassName="text-blue-600"
      />
        </div>

    </section>
  )
}

export default ServicesSection