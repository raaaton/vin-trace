import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mon Projet",
  description: "Description de mon application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                  <Link href="/">Accueil</Link>
                  <Link href="/dashboard" className="hover:text-accent">Dashboard</Link>
                </div>
                <div className="flex items-center gap-4">
                  <Suspense fallback={<div>Chargement...</div>}>
                    <AuthButton />
                  </Suspense>
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>

            <main className="flex-1 w-full flex flex-col items-center">
              {children}
            </main>

            <footer className="w-full flex items-center justify-center border-t py-8 text-xs">
              <p>© 2026 VinTrace</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}