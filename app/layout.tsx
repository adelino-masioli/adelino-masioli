import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adelino Masioli - Software Engineer",
  description: "Senior Software Engineer with 13+ years of experience",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Head>
          <title>Adelino Masioli - Software Engineer</title>
          <meta
            name="description"
            content="Senior Software Engineer with 13+ years of experience"
          />

          <meta property="og:url" content="https://adelinomasioli.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Adelino Masioli - Software Engineer"
          />
          <meta
            property="og:description"
            content="Senior Software Engineer with 13+ years of experience"
          />
          <meta
            property="og:image"
            content="https://adelinomasioli.com/adelino-masioli.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="adelinomasioli.com" />
          <meta property="twitter:url" content="https://adelinomasioli.com" />
          <meta
            name="twitter:title"
            content="Adelino Masioli - Software Engineer"
          />
          <meta
            name="twitter:description"
            content="Senior Software Engineer with 13+ years of experience"
          />
          <meta
            name="twitter:image"
            content="https://adelinomasioli.com/adelino-masioli.png"
          />
        </Head>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
