"use client";
import React, { Suspense } from "react";
import AsideAbout from "./AsideAbout";
import Bio from "./Bio";
import ProInfo from "./ProInfo";
import Interests from "./Interests";
import { useSearchParams } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Kb Bohara - The fullstack developer.",
  description:
    "Kb Bohara, a minimalist fullstack developer with a passion for creating useful and innovative solutions. Experienced in frameworks like Next.js, Express.js, and Hono, proficient with tools like Neovim, Docker, and Tailwind CSS. Loves coding, philosophy, and Unix aesthetics.",
  keywords: [
    "Kb Bohara",
    "fullstack developer",
    "Next.js developer",
    "Express.js developer",
    "Hono framework",
    "React developer",
    "Neovim coder",
    "tailwind CSS developer",
    "MERN stack developer",
    "Docker and Git expert",
    "MongoDB and Redis developer",
    "philosophy-driven developer",
    "web developer portfolio",
  ],
  category: "Portfolio",
  creator: "thekbbohara",
  metadataBase: new URL("https://kbbohara.com.np"),
  openGraph: {
    title: "About | Kb Bohara",
    description:
      "Kb Bohara is a fullstack developer with expertise in modern web technologies like Next.js, Express.js, and MongoDB. Known for a minimalist coding style and a passion for efficient, clean solutions, Kb crafts exceptional digital experiences while embracing a Unix-inspired workflow.",
    images: [
      {
        url: "https://kbbohara.com.np/assets/og-about.png",
        width: 1200,
        height: 630,
        alt: "Kb Bohara' info",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kb Bohara",
    description:
      "Learn about Kb Bohara, the fullstack developer skilled in frameworks like Next.js, Remix.js, Express.js, and Hono, and tools like Docker and Neovim. A coder who loves philosophy, anime, and balance in life.",
    creator: "@thekbbohara",
    site: "@thekbbohara",
    images: [
      {
        url: "https://kbbohara.com.np/assets/og-about.png",
        width: 1200,
        height: 630,
        alt: "kb bohara' info",
      },
    ],
  },
  alternates: {
    canonical: "https//:kbbohara.com.np/about",
  },
};
const AboutContent = () => {
  const searchParams = useSearchParams();
  const categoryFromParams = searchParams.get("category");
  const category: "personal" | "professional" | "hobbies" =
    categoryFromParams === "personal" ||
    categoryFromParams === "professional" ||
    categoryFromParams === "hobbies"
      ? categoryFromParams
      : "professional";

  return (
    <section className="grow h-full flex relative">
      <div className="grow flex">
        <AsideAbout category={category} />
        <div className="flex justify-between grow">
          {category === "personal" && <Bio />}
          {category === "professional" && <ProInfo />}
          {category === "hobbies" && <Interests />}
          <div className="h-full w-4 border border-y-transparen border-line">
            <div className="w-full h-2 bg-s1 mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AboutContent />
  </Suspense>
);

export default About;
