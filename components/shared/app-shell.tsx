"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { PageTransition } from "@/components/shared/page-transition";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <PageTransition />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}