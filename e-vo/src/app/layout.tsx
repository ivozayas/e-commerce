import type { Metadata } from "next";
import { textFont } from "../config/fonts";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar/NavBar";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "E-VO",
  description: "E-Commerce proyect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={textFont.className}>
        {children}
      </body>
    </html>
  );
}
