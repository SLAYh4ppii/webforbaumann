import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Shield, Smile, Bluetooth as Tooth, Clock, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Modern dental clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t('hero.subtitle')}
            </p>
            <Button size="lg" className="text-lg" asChild>
              <Link href="/contact">{t('hero.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-primary" />}
              title={t('features.preventive.title')}
              description={t('features.preventive.description')}
            />
            <FeatureCard
              icon={<Smile className="h-12 w-12 text-primary" />}
              title={t('features.aesthetic.title')}
              description={t('features.aesthetic.description')}
            />
            <FeatureCard
              icon={<Tooth className="h-12 w-12 text-primary" />}
              title={t('features.implants.title')}
              description={t('features.implants.description')}
            />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickInfoCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title={t('quickInfo.hours.title')}
              content={t('quickInfo.hours.content')}
            />
            <QuickInfoCard
              icon={<Phone className="h-8 w-8 text-primary" />}
              title={t('quickInfo.emergency.title')}
              content={t('quickInfo.emergency.content')}
            />
            <QuickInfoCard
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title={t('quickInfo.appointment.title')}
              content={t('quickInfo.appointment.content')}
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                alt="Dental team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('welcome.title')}</h2>
              <p className="text-gray-600 mb-6">{t('welcome.description')}</p>
              <Button asChild>
                <Link href="/about">{t('welcome.cta')}</Link>
              </Button>
            </div>
          </div>
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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function QuickInfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}