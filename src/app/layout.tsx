import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Caio Vinicius",
  description: "Caio Vinicicus Website - FullStack Software Engineer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center bg-black text-white`}>
        <div className="px-5 sm:px-10 lg:px-20 w-full max-w-screen-xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
