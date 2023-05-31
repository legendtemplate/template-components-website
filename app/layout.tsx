import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./chakura/providers";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/layout/footer/page";
import Navbar from "@/components/layout/navbar/page";
import { Metadata } from 'next';

const data = {
  title:'Deault',
  description:'Deault',
  Url : 'https://acme.com'
}
export const metadata:Metadata = {
  colorScheme: "light",  // not change
  creator: "Jiachi Liu",  // not change
  publisher: "Sebastian Markbåge", // not change
  themeColor: "black", // not change
  openGraph: {
    siteName: 'Next.js',
  
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
