"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { PageTransition } from "@/components/shared/page-transition";
import { Toaster } from "@/components/ui/sonner";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}