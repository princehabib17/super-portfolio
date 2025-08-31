import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Kufi_Arabic } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const kufi = Noto_Kufi_Arabic({ weight: ['400','600'], subsets: ['arabic'], variable: '--font-kufi' });

export const metadata: Metadata = {
  title: 'Black & Gold — Superpower Showcase',
  description: 'Web, apps, automation, motion, 3D — crafted for touch.'
};

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const locale = params?.locale || 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${kufi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
