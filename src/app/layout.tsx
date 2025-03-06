import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
        <div className="px-5 sm:px-10 w-full lg:max-w-screen-xl">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
