import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grimstad Terrengultraløp',
  description: 'Offisiell side for Grimstad Terrengultraløp - 18. mai 2025',
  metadataBase: new URL('https://grimstad.run'),
  openGraph: {
    title: 'Grimstad Terrengultraløp',
    description: 'Løp med oss gjennom vakre Grimstad!',
    url: 'https://grimstad.run',
    siteName: 'Grimstad Terrengultraløp',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grimstad Terrengultraløp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grimstad Terrengultraløp',
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
              <p>© {new Date().getFullYear()} Grimstad Terrengultraløp</p>
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