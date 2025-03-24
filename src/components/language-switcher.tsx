'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Check, Globe } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languageOptions = [
  { locale: 'en', label: 'English', flag: '🇬🇧' },
  { locale: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { locale: 'sl', label: 'Slovenščina', flag: '🇸🇮' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  
  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Find the current language option
  const currentLanguage = languageOptions.find(option => option.locale === locale) || languageOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-black" />
          <span>{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.locale}
            onClick={() => handleLanguageChange(option.locale)}
            className="flex items-center gap-2 cursor-pointer text-foreground hover:text-foreground"
          >
            <span>{option.flag}</span>
            <span>{option.label}</span>
            {locale === option.locale && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}