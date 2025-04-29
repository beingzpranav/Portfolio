import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Viewport } from 'next';
import React from 'react';
import AnimatedCodeIcons from './components/AnimatedCodeIcons';
import ModernLoader from './components/ModernLoader';
import '../styles/layout.css';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pranav Khandelwal - Web Developer & Designer',
  description: 'Portfolio showcasing my web development and design projects',
  keywords: 'web developer, designer, portfolio, frontend',
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#030712" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} motion-code overflow-x-hidden`}>
        <ModernLoader />
        
        <AnimatedCodeIcons position="top-right" size="lg" opacity={0.1} />
        <AnimatedCodeIcons position="bottom-left" size="md" opacity={0.08} />
        
        <div className="page-entrance-overlay">
          <div className="code-reveal">
            <div className="code-line line1">&lt;<span className="keyword">Portfolio</span>&gt;</div>
            <div className="code-line line2">
              <span className="indent"></span>const <span className="variable">developer</span> = {"{"}
            </div>
            <div className="code-line line3">
              <span className="indent"></span><span className="indent"></span>name: <span className="string">"Pranav Khandelwal"</span>,
            </div>
            <div className="code-line line4">
              <span className="indent"></span><span className="indent"></span>skills: [<span className="string">"React"</span>, <span className="string">"Next.js"</span>, <span className="string">"TypeScript"</span>, <span className="string">"UI/UX"</span>]
            </div>
            <div className="code-line line5">
              <span className="indent"></span>{"}"};
            </div>
            <div className="code-line line6">&lt;/<span className="keyword">Portfolio</span>&gt;</div>
          </div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
} 