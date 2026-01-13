import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Black & Gold — Superpower Showcase',
  description: 'Web, apps, automation, motion, 3D — crafted for touch.'
};

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const locale = params?.locale || 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
