import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const ServiceSection: React.FC<ServiceSectionProps> = ({
    title,
    subtitle,
    services,
    containerClassName = '',
    titleClassName = '',
    subtitleClassName = '',
}) => {
    return (
        <section className={`py-16 ${containerClassName}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${titleClassName}`}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className={`text-xl text-gray-600 ${subtitleClassName}`}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                {service.badge && (
                                    <Badge className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-white">
                                        {service.badge}
                                    </Badge>
                                )}
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                {service.features && service.features.length > 0 && (
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-primary"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection; 