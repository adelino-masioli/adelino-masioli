import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

// Definindo a fonte
const inter = Inter({ subsets: ["latin"] });

// Definindo os metadados globais
export const metadata: Metadata = {
  metadataBase: new URL("https://adelinomasioli.com/"), // Substitua pelo seu URL real
  title: "Adelino Masioli - Software Engineer",
  description: "Senior Software Engineer with 13+ years of experience",
  manifest: "/manifest.json",
  openGraph: {
    url: "https://adelinomasioli.com/",
    type: "website",
    title: "Adelino Masioli - Software Engineer",
    description: "Senior Software Engineer with 13+ years of experience",
    images: [
      {
        url: "https://adelinomasioli.com/adelino-masioli.png",
        width: 800,
        height: 600,
        alt: "Adelino Masioli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adelinomasioli",
    title: "Adelino Masioli - Software Engineer",
    description: "Senior Software Engineer with 13+ years of experience",
    images: [
      {
        url: "https://adelinomasioli.com/adelino-masioli.png",
        width: 800,
        height: 600,
        alt: "Adelino Masioli",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
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
