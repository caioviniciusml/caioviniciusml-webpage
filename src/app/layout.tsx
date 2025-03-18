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
  description: "Caio Vinicicus Portfolio - FullStack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="en">
	  <body className={`flex flex-col items-center gap-10 ${inter.className} bg-black text-white`}>
		<Header />
		<main className="px-5 sm:px-10 w-full max-w-screen-xl">
		  {children}
		</main>
		<Footer />
	  </body>
	</html>
  );
}
