import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/nav/Footer";
import { TwitterXFill, LinkedinSolid } from "@/assets/spfyicons";
import Header from "@/components/nav/Header";
const jetbrain = JetBrains_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#011627",
};
export const metadata: Metadata = {
  title: "thekbbohara",
  description:
    "Fullstack developer available for on-site, remote, contract, or freelance opportunities. Experienced in web development with expertise in MERN stack, Next.js, Remix, and more. Contact me for top-tier development solutions.",
  keywords: [
    "fullstack developer",
    "remote fullstack developer",
    "contract fullstack developer",
    "freelance fullstack developer",
    "web developer",
    "MERN stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "freelance developer",
    "remote developer",
    "fullstack development services",
  ],
  category: "Portfolio",
  creator: "thekbbohara",
  metadataBase: new URL("https://kbbohara.com.np"),
  openGraph: {
    title: "thekbbohara | Fullstack Developer",
    description:
      "Explore the best portfolio of kb bohara. The best fullstack developer. Check out my work, skills, and contact information.",
    images: [
      {
        url: "https://kbbohara.com.np/assets/og-hello.png",
        width: 1200,
        height: 630,
        alt: "Kb Bohara' portfolio website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "thekbbohara | Fullstack Developer",
    description:
      "kbbohara.com.np - explore the best portfolio of kb bohara. The best fullstack developer. Check out my work, skills, and contact information.",
    creator: "@thekbbohara",
    site: "@thekbbohara",
    images: [
      {
        url: "https://kbbohara.com.np/assets/og-hello.png",
        width: 1200,
        height: 630,
        alt: "thekbbohara",
      },
    ],
  },
  alternates: {
    canonical: "https//:kbbohara.com.np",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrain.className} `}>
        <main className="bg-p2 text-s1 text-ellipsis overflow-hidden min-h-svh w-full flex flex-col justify-between">
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
                icon: <TwitterXFill className="size-5" />,
                href: "https://x.com/thekbbohara",
              },
              {
                icon: <LinkedinSolid className="size-5" />,
                href: "https://linkedin.com/in/thekbbohara",
              },
            ]}
          />
        </main>
      </body>
    </html>
  );
}
