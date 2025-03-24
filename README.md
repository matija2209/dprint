# Bauhar - Multilingual Next.js App

This is a multilingual Next.js application with internationalization support using next-intl. The application includes dynamic metadata generation for SEO optimization in multiple languages.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Multi-language support (EN, DE, SL)
- Dynamic metadata and SEO optimization for each language
- Dynamic OG image generation for social media sharing

## Metadata System

The application uses Next.js Metadata API to provide language-specific metadata for all pages. The metadata system includes:

1. **Base Metadata Configuration**: Defined for each language in `src/utils/metadata.ts`
2. **Dynamic Metadata Generation**: Using `generateMetadata` function in layouts and pages
3. **Dynamic OG Image Generation**: For social media sharing, generated on-the-fly

### How it works

- Each language has its own set of metadata (title, description, keywords, etc.)
- The metadata is dynamically generated based on the current locale from the URL
- Page-specific metadata extends the base language metadata
- Social media images are dynamically generated using the Edge Runtime

### Folder Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx (locale-specific layout with metadata)
│   │   ├── page.tsx (home page with metadata)
│   │   ├── o-nas/ (about page)
│   │   └── zasebnost/ (privacy page)
│   ├── api/
│   │   └── og/
│   │       └── route.tsx (dynamic OG image generation)
│   └── layout.tsx (root layout)
├── utils/
│   └── metadata.ts (metadata utility functions)
└── i18n/
    └── routing.ts (i18n routing configuration)
```

## Adding a New Language

To add a new language:

1. Add the language code to the locales in `src/i18n/routing.ts`
2. Create a new translation file in `messages/{locale}.json`
3. Add the language-specific metadata in `src/utils/metadata.ts`

## Adding a New Page with Metadata

To add a new page with localized metadata:

1. Create the page in the appropriate directory under `src/app/[locale]/`
2. Add the following code for metadata:

```tsx
import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

type Props = {
  params: { locale: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  
  const titles = {
    en: 'Page Title in English',
    de: 'Page Title in German',
    sl: 'Page Title in Slovenian',
  };
  
  const descriptions = {
    en: 'Description in English',
    de: 'Description in German',
    sl: 'Description in Slovenian',
  };
  
  const pageTitle = titles[locale] || titles.en;
  const pageDescription = descriptions[locale] || descriptions.en;
  
  return generatePageMetadata(locale, pageTitle, pageDescription);
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

MIT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


https://github.com/vercel/next.js/issues/51477