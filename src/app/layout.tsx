import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import mergeClasses from "@/util/mergeClasses";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function Header({ className }: { className?: string }) {
  return (
    <section className={mergeClasses("text-center", className)}>
      <h1 className="text-xl">STER</h1>
      <h2 className="text-lg">Simple Stock Tracker</h2>
    </section>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header className="mt-5" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
