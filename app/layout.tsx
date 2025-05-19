import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './component/shared/Footer/Footer';
import TopBar from './component/shared/AppBar/TopBar';

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
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
