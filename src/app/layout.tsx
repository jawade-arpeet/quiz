import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "./utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upraised",
  description: "A quizzing website",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", inter.className)}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
