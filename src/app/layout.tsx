import type { Metadata } from "next";
import { AlertProvider } from "@/components/alert/useAlert";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Ecommerce Page | Gabriel Crispim",
  description: "Ecommerce page made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AlertProvider>
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
