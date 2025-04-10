'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Shield, Smile, Bluetooth as Tooth, Baby, Brain, Syringe } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('Services');

  const mainServices = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: t('main.preventive.title'),
      description: t('main.preventive.description'),
      link: '#preventive',
    },
    {
      icon: <Smile className="h-12 w-12 text-primary" />,
      title: t('main.aesthetic.title'),
      description: t('main.aesthetic.description'),
      link: '#aesthetic',
    },
    {
      icon: <Tooth className="h-12 w-12 text-primary" />,
      title: t('main.implants.title'),
      description: t('main.implants.description'),
      link: '#implants',
    },
    {
      icon: <Baby className="h-12 w-12 text-primary" />,
      title: t('main.children.title'),
      description: t('main.children.description'),
      link: '#children',
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: t('main.surgery.title'),
      description: t('main.surgery.description'),
      link: '#surgery',
    },
    {
      icon: <Syringe className="h-12 w-12 text-primary" />,
      title: t('main.emergency.title'),
      description: t('main.emergency.description'),
      link: '#emergency',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
          alt="Dental services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl mb-8">{t('hero.subtitle')}</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t('hero.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('mainServices.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <div className="text-center">
                  <Button variant="link" asChild>
                    <Link href={service.link}>{t('mainServices.learnMore')}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('detailed.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="preventive">
              <AccordionTrigger>{t('detailed.preventive.title')}</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm">
                  <p className="text-gray-600">{t('detailed.preventive.description')}</p>
                  <ul className="list-disc list-inside mt-2">
                    {t('detailed.preventive.services').split(',').map((service) => (
                      <li key={service} className="text-gray-600">{service.trim()}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="aesthetic">
              <AccordionTrigger>{t('detailed.aesthetic.title')}</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm">
                  <p className="text-gray-600">{t('detailed.aesthetic.description')}</p>
                  <ul className="list-disc list-inside mt-2">
                    {t('detailed.aesthetic.services').split(',').map((service) => (
                      <li key={service} className="text-gray-600">{service.trim()}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="implants">
              <AccordionTrigger>{t('detailed.implants.title')}</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm">
                  <p className="text-gray-600">{t('detailed.implants.description')}</p>
                  <ul className="list-disc list-inside mt-2">
                    {t('detailed.implants.services').split(',').map((service) => (
                      <li key={service} className="text-gray-600">{service.trim()}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8">{t('cta.description')}</p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">{t('cta.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}