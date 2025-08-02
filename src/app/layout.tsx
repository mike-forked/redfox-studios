import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'RedFox Studios',
    template: '%s | RedFox Studios'
  },
  description: 'RedFox Studios - Building innovative digital experiences',
  keywords: ['RedFox Studios', 'web development', 'digital agency', 'software development'],
  authors: [{ name: 'RedFox Studios', url: 'https://redfox-studios.org' }],
  creator: 'RedFox Studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://redfox-studios.org',
    siteName: 'RedFox Studios',
    title: 'RedFox Studios',
    description: 'Building innovative digital experiences',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RedFox Studios',
    description: 'Building innovative digital experiences',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
