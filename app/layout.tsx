import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const voiceflowProjectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Response - 24/7 AI for UK Estate Agents",
  description: "Never miss another lead with our AI response system",
};

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

        {/* Voiceflow Chat Widget - V3 SIMPLIFIED */}
        <Script
          id="voiceflow-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          console.log('Loading Voiceflow V3 with Project ID: ${voiceflowProjectId}');
          
          window.voiceflow.chat.load({
            verify: { projectID: '${voiceflowProjectId}' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          }).then(() => {
            console.log('✅ Voiceflow V3 chat widget loaded successfully');
          });
        };
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `,
          }}
        />
      </body>
    </html>
  );
}