export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const locale = params?.locale || 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <div lang={locale} dir={dir}>
      {children}
    </div>
  );
}
