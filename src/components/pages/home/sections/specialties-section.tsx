import FeatureBlock from '@/components/feature-block'
import GridLines from '@/components/visuals-patterns/grid-lines'
import React from 'react'
import { useTranslations } from 'next-intl'
import PolkaDots from '@/components/visuals-patterns/polka-dots'
import ZigzagPattern from '@/components/visuals-patterns/zigzag-pattern'
import GroovyPattern from '@/components/visuals-patterns/groovy-pattern'
import HideoutPattern from '@/components/visuals-patterns/hideout-pattern'

function SpecialtiesSection() {
  const t = useTranslations('HomePage.services')

  return (
    <section id='services' className="bg-gray-100 py-36 relative">
      <HideoutPattern></HideoutPattern>
      <div className="mx-auto px-4 max-w-7xl space-y-36">
        <FeatureBlock
          media={{ src: "/video_1.mp4", type: "video" }}
          kicker={t('service1.kicker')}
          title={t('service1.title')}
          subtitle={t('service1.subtitle')}
          inverted={true}
          titleClassName="text-blue-600"
        />
        <FeatureBlock
          media={{ src: "/video_2.mp4", type: "video" }}
          kicker={t('service2.kicker')}
          title={t('service2.title')}
          subtitle={t('service2.subtitle')}
          inverted={false}
          titleClassName="text-blue-600"
        />
        <FeatureBlock
          media={{ src: "/video_3.mp4", type: "video" }}
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

export default SpecialtiesSection