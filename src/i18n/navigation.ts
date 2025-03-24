import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Create navigation functions that are aware of i18n
export const { Link, redirect, usePathname, useRouter, getPathname } = 
  createNavigation(routing);