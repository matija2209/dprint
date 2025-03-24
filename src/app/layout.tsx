import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div dangerouslySetInnerHTML={{ 
          __html: '<feedback-widget widgetid="67dacbdd74255d7247364606"></feedback-widget>' 
        }} />
        <Script type="module" src="https://widget.fiidbakk.com/main.js" />
        <GoogleAnalytics gaId="G-C2WY3ND8XW" />
      </body>
    </html>
  );
}
