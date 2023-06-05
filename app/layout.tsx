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
  colorScheme: "dark",  // not change
  creator: "Jiachi Liu",  // not change
  publisher: "Sebastian Markbåge", // not change
  themeColor: "black", // not change
 
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
