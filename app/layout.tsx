import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './component/shared/Footer/Footer';
import TopBar from './component/shared/AppBar/TopBar';
import Script from 'next/script';
import { GA_TRACKING_ID } from '../lib/gtag';
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://manifest.trade'),
  title: 'Manifest',
  description: 'The Unlimited Orderbook',
   keywords: ['DeFi', 'Crypto', 'Solana', 'Manifest', 'DEX', 'Finance', 'Decentralized Finance', 'CLOB', 'On-Chain Orderbook', 'Crypto API', 'DeFi Data'],
   creator: 'CKS Systems',
   twitter: {
    card: 'summary_large_image',
    title: 'Manifest',
    description: 'Manifest: The zero-fee Solana CLOB DEX with formally verified security. Features cheap permissionless market creation, capital-efficient global orders, AMM-compatible reverse orders. The endgame liquidity primitive for SVM.',
    creator: '@ManifestTrade',
    images: [{
      url: '',
      alt: 'Manifest X Image'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: false,
                    allow_google_signals: true,
                    allow_ad_personalization_signals: true,
                    cookie_flags: 'max-age=7200;secure;samesite=none'
                  });
                `,
              }}
            />
          </>
        )}
        
        <GoogleAnalytics />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
