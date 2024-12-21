import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/global/theme-provider";
import QueryProvider from "@/components/global/query-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "VAAM",
  description: "VAAM is a revolutionary ride-sharing company with zero commission, empowering drivers to earn more and take control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col">
              <div className="flex-1">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
