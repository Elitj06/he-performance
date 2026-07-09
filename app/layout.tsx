import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://he-performance.vercel.app"),
  title: {
    default: "Clínica HE Performance | Viva na sua melhor versão",
    template: "%s | Clínica HE Performance",
  },
  description:
    "Saúde, metabologia e performance com avaliação 360, endocrinologia, nutrição e medicina esportiva na Barra da Tijuca.",
  applicationName: "HE Performance",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HE Performance",
  },
  openGraph: {
    title: "Clínica HE Performance",
    description: "Viva na sua melhor versão.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Clínica HE Performance",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "HE Performance — saúde, metabologia e performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica HE Performance",
    description: "Viva na sua melhor versão.",
    images: ["https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#07111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-obsidian text-ivory">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Clínica HE Performance",
              description: "Saúde, metabologia e performance no Rio de Janeiro.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Evandro Lins e Silva, 840",
                addressLocality: "Barra da Tijuca, Rio de Janeiro",
                addressRegion: "RJ",
                addressCountry: "BR",
              },
              telephone: "+5521984606091",
              url: "https://he-performance.vercel.app",
            }),
          }}
        />
        <Script src="/sw-register.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
