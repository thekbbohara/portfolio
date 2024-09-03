import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "@/components/nav/Footer";
import { FacebookFill, TwitterXFill } from "@/assets/spfyicons";
import Header from "@/components/nav/Header";

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
      <body className={fira.className}>
        <main className="bg-p2 text-s1 min-h-svh w-full flex flex-col justify-between">
          <Header
            name="kb-bohara"
            navItems={[
              { name: "hello", route: "/" },
              {
                name: "about-me",
                route: "/about",
              },
              { name: "projects", route: "/projects" },
            ]}
          />
          {children}
          <Footer
            socialLink={[
              {
                icon: <FacebookFill className="size-5" />,
                href: "https://facebook.com/thekbbohara",
              },
              {
                icon: <TwitterXFill className="size-5" />,
                href: "https://x.com/thekbbohara",
              },
            ]}
          />
        </main>
      </body>
    </html>
  );
}
