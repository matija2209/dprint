interface ServiceItem {
  title: string;
  description: string;
  image: string;
  features?: string[];
  badge?: string;
}

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  services: ServiceItem[];
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}
