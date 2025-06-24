"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { PageTransition } from "@/components/shared/page-transition";
import { Toaster } from "@/components/ui/sonner";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-1">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}