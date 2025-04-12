'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              {t('contact')}
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-base text-gray-500">Zahnarztpraxis Hünfeld</p>
              <p className="text-base text-gray-500">Musterstraße 123</p>
              <p className="text-base text-gray-500">36088 Hünfeld</p>
              <p className="text-base text-gray-500">Tel: +49 (0) 6652 12345</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              {t('openingHours')}
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-base text-gray-500">{t('monday')}: 8:00 - 17:00</p>
              <p className="text-base text-gray-500">{t('tuesday')}: 8:00 - 17:00</p>
              <p className="text-base text-gray-500">{t('wednesday')}: 8:00 - 17:00</p>
              <p className="text-base text-gray-500">{t('thursday')}: 8:00 - 17:00</p>
              <p className="text-base text-gray-500">{t('friday')}: 8:00 - 14:00</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              {t('legal')}
            </h3>
            <div className="mt-4 space-y-2">
              <p>
                <Link href="/impressum" className="text-base text-gray-500 hover:text-gray-900">
                  {t('imprint')}
                </Link>
              </p>
              <p>
                <Link href="/datenschutz" className="text-base text-gray-500 hover:text-gray-900">
                  {t('privacy')}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Zahnarztpraxis Hünfeld. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}