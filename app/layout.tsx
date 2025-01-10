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
          <meta
            name="description"
            content={
              metadata.description ??
              "Senior Software Engineer with 13+ years of experience"
            }
          />
          <meta
            name="keywords"
            content="Software Engineer, Full Stack, React, Next.js"
          />
          <meta
            property="og:title"
            content={String(
              metadata.title ?? "Adelino Masioli - Software Engineer"
            )}
          />
          <meta
            property="og:description"
            content={
              metadata.description ??
              "Senior Software Engineer with 13+ years of experience"
            }
          />
          <meta property="og:type" content="website" />

          {/* Definindo a imagem de Open Graph e Twitter */}
          <meta
            property="og:image"
            content="https://adelinomasioli.com/adelino-masioli.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={String(
              metadata.title ?? "Adelino Masioli - Software Engineer"
            )}
          />
          <meta
            name="twitter:description"
            content={
              metadata.description ??
              "Senior Software Engineer with 13+ years of experience"
            }
          />
          <meta
            name="twitter:image"
            content="https://adelinomasioli.com/adelino-masioli.png"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
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
