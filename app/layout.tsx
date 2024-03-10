import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Header  from "@/app/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBS-NextJs",
  description: "This is BBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
