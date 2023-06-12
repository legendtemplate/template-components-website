import "@/src/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "./provider/page";
const inter = Inter({ subsets: ["latin"] });
import { Footer, Navbar } from "@/components/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  colorScheme: "dark", // not change
  creator: "Jiachi Liu", // not change
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
