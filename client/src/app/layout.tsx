import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thekbbohara",
  description: "fullstack developer portfolio website.",
  keywords:
    "fullstack developer, portfolio, web development, programming , thekbbohara, kbbohara, nextjs developer, golang developer, web developer",
  category: "tsx",
  creator: "thekbbohara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
