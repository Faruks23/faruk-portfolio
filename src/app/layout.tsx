import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUiProvider from "@/app/Components/NextUIProvider/NextUIProvider";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import SmoothScrollWrapper from "./Components/SmoothScroll/SmothScroll";
import CursorFlower from "./utils/CoursorFlower";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faruk ",
  description:"Faruk Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WN3MX9JR" />
      
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-S87LYRG070`} />
      
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S87LYRG070', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <body>
        <NextUiProvider>
          <CursorFlower />
          <SmoothScrollWrapper>
            <Header></Header>
            {children}
            <Footer></Footer>
          </SmoothScrollWrapper>
        </NextUiProvider>
      </body>
    </html>
  );
}
