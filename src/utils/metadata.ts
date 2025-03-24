import { Metadata } from 'next';

// Define the metadata structure for each language
type LocalizedMetadata = {
  [locale: string]: {
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
      title: string;
      description: string;
      locale: string;
      siteName: string;
    };
    twitter: {
      title: string;
      description: string;
      card: 'summary' | 'summary_large_image' | 'app' | 'player';
    };
  };
};

// Define the metadata for each supported language
export const localizedMetadata: LocalizedMetadata = {
  en: {
    title: 'Bauhar - Engineering Software & Consulting',
    description: 'Bauhar specializes in software development and consulting for machine element calculations.',
    keywords: ['engineering', 'KISSsoft', 'machine elements', 'gears', 'bearings', 'shafts', 'drive systems'],
    openGraph: {
      title: 'Bauhar - Engineering Software & Consulting',
      description: 'Bauhar specializes in software development and consulting for machine element calculations.',
      locale: 'en_US',
      siteName: 'Bauhar',
    },
    twitter: {
      title: 'Bauhar - Engineering Software & Consulting',
      description: 'Bauhar specializes in software development and consulting for machine element calculations.',
      card: 'summary_large_image',
    },
  },
  de: {
    title: 'Bauhar - Ingenieursoftware & Beratung',
    description: 'Bauhar entwickelt Software und bietet Beratung für Maschinenelemente-Berechnungen an.',
    keywords: ['Ingenieurwesen', 'KISSsoft', 'Maschinenelemente', 'Zahnräder', 'Lager', 'Wellen', 'Antriebssysteme'],
    openGraph: {
      title: 'Bauhar - Ingenieursoftware & Beratung',
      description: 'Bauhar entwickelt Software und bietet Beratung für Maschinenelemente-Berechnungen an.',
      locale: 'de_DE',
      siteName: 'Bauhar',
    },
    twitter: {
      title: 'Bauhar - Ingenieursoftware & Beratung',
      description: 'Bauhar entwickelt Software und bietet Beratung für Maschinenelemente-Berechnungen an.',
      card: 'summary_large_image',
    },
  },
  sl: {
    title: 'Bauhar - Programska oprema in inženirsko svetovanje',
    description: 'Bauhar razvija programsko opremo in nudi svetovanje za izračune strojnih elementov.',
    keywords: ['inženirstvo', 'KISSsoft', 'strojni elementi', 'zobniki', 'ležaji', 'gredi', 'pogonski sistemi'],
    openGraph: {
      title: 'Bauhar - Programska oprema in inženirsko svetovanje',
      description: 'Bauhar razvija programsko opremo in nudi svetovanje za izračune strojnih elementov.',
      locale: 'sl_SI',
      siteName: 'Bauhar',
    },
    twitter: {
      title: 'Bauhar - Programska oprema in inženirsko svetovanje',
      description: 'Bauhar razvija programsko opremo in nudi svetovanje za izračune strojnih elementov.',
      card: 'summary_large_image',
    },
  },
};


// Helper function to get metadata for a specific locale
export function getLocalizedMetadata(locale: string): Metadata {
  const metadata = localizedMetadata[locale] || localizedMetadata.en;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bauhar.si';
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      locale: metadata.openGraph.locale,
      siteName: metadata.openGraph.siteName,
      images: [
        {
          url: `https://bauhar.vercel.app/logo.png`,
          width: 1200,
          height: 630,
          alt: metadata.openGraph.title,
        },
      ],
    },
    twitter: {
      card: metadata.twitter.card,
      title: metadata.twitter.title,
      description: metadata.twitter.description,
      images: [`https://bauhar.vercel.app/logo.png`],
    },
    metadataBase: new URL(baseUrl),
  };
}

// Function to generate page-specific metadata
export function generatePageMetadata(
  locale: string,
  pageTitle?: string,
  pageDescription?: string,
): Metadata {
  const baseMetadata = getLocalizedMetadata(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bauhar.com';
  
  // If no page-specific title or description, return base metadata
  if (!pageTitle && !pageDescription) {
    return baseMetadata;
  }
  
  // Deep clone the base metadata to avoid mutations
  const metadata = JSON.parse(JSON.stringify(baseMetadata)) as Metadata;
  
  // Update with page-specific information if provided
  if (pageTitle) {
    const fullTitle = `${pageTitle} | ${localizedMetadata[locale]?.title || localizedMetadata.en.title}`;
    metadata.title = fullTitle;
    
    if (metadata.openGraph) {
      metadata.openGraph.title = pageTitle;
      
      // Update OG image to use static logo
      metadata.openGraph.images = [
        {
          url: `https://bauhar.vercel.app/logo.png`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ];
    }
    
    if (metadata.twitter) {
      metadata.twitter.title = pageTitle;
      metadata.twitter.images = [`https://bauhar.vercel.app/logo.png`];
    }
  }
  
  if (pageDescription) {
    metadata.description = pageDescription;
    if (metadata.openGraph) {
      metadata.openGraph.description = pageDescription;
    }
    if (metadata.twitter) {
      metadata.twitter.description = pageDescription;
    }
  }
  
  return metadata;
} 