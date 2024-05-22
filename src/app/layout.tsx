import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUiProvider from "@/app/Components/NextUIProvider/NextUIProvider";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import SmoothScrollWrapper from "./Components/SmoothScroll/SmothScroll";

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
      <body>
        <NextUiProvider>
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
