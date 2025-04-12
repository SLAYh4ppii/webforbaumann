import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { requestLocale, getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Resolve the locale using requestLocale if not provided
  const resolvedLocale = locale || (await requestLocale());
  if (!resolvedLocale) {
    notFound();
  }

  let messages;
  try {
    // Dynamically import the messages for the resolved locale
    messages = (await import(`../../messages/${resolvedLocale}.json`)).default;
  } catch (error) {
    notFound(); // Handle missing locale messages
  }

  return (
    <html lang={resolvedLocale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={resolvedLocale} messages={messages}>
          <Navigation />
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}