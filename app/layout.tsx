import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/AuthButton";
import { AccountButton } from "@/components/AccountButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VinTrace",
  description: "Application de gestion de voitures",
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
                <div className="w-[90%] sm:w-[80%] lg:w-[75%] flex justify-between items-center py-3 text-sm">
                    <div className="flex gap-5 items-center">
                    <Link href="/" className="text-[1.05rem] font-semibold">VinTrace</Link>
                    <Link href="/dashboard" className="hover:text-amber-500 transition-all text-xs tracking-wider uppercase text-stone-500">
                        Dashboard
                    </Link>
                    </div>
                    <div className="flex items-center gap-4">
                    <Suspense fallback={<div>Chargement...</div>}>
                        <AccountButton />
                        <AuthButton />
                    </Suspense>
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