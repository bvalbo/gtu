import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grimstad Ultraløp',
  description: 'Offisiell side for Grimstad Ultraløp - 18. mai 2025',
  metadataBase: new URL('https://grimstad.run'),
  openGraph: {
    title: 'Grimstad Ultraløp',
    description: 'Løp med oss gjennom vakre Grimstad!',
    url: 'https://grimstad.run',
    siteName: 'Grimstad Ultraløp',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grimstad Ultraløp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grimstad Ultraløp',
    description: 'Løp med oss gjennom vakre Grimstad!',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-dark">
          {children}
        </main>
        <footer className="bg-forest-950 py-6">
          <div className="container mx-auto px-4">
            <div className="text-center text-forest-300 text-sm">
              <p>© {new Date().getFullYear()} Grimstad Ultraløp</p>
              <p className="mt-2">
                <a 
                  href="https://github.com/ditt-brukernavn/grimstad-ultrarun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-forest-100 transition-colors"
                >
                  Kildekode på GitHub
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}