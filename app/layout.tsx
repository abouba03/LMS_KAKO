import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAKO LMS",
  description: "Le site d'etude pour les eleves et etudiants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="fr">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider/>
          {children}
          </body>
      </html>
    </ClerkProvider >
    
  );
}
