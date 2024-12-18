"use client";

import React, { Suspense } from "react";
import Head from "next/head"; // Import next/head for SEO
import AsideAbout from "./AsideAbout";
import Bio from "./Bio";
import ProInfo from "./ProInfo";
import Interests from "./Interests";
import { useSearchParams } from "next/navigation";

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
  <>
    {/* Add meta tags dynamically */}
    <Head>
      <title>About | Kb Bohara - The fullstack developer</title>
      <meta
        name="description"
        content="Kb Bohara, a minimalist fullstack developer with a passion for creating useful and innovative solutions. Experienced in frameworks like Next.js, Express.js, and Hono, proficient with tools like Neovim, Docker, and Tailwind CSS. Loves coding, philosophy, and Unix aesthetics."
      />
      <meta
        name="keywords"
        content="Kb Bohara, fullstack developer, Next.js developer, Express.js developer, Hono framework, React developer, Neovim coder, tailwind CSS developer, MERN stack developer, Docker and Git expert, MongoDB and Redis developer, philosophy-driven developer, web developer portfolio"
      />
      <meta name="author" content="Kb Bohara" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="About | Kb Bohara - Minimalist Fullstack Developer"
      />
      <meta
        property="og:description"
        content="Learn about Kb Bohara, the fullstack developer skilled in frameworks like Next.js, Remix.js, Express.js, and tools like Docker and git."
      />
      <meta
        property="og:image"
        content="https://kbbohara.com.np/assets/og-about.png"
      />
      <meta property="og:url" content="https://kbbohara.com.np/about" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About | Kb Bohara - Minimalist Fullstack Developer"
      />
      <meta
        name="twitter:description"
        content="Learn about Kb Bohara, the fullstack developer skilled in frameworks like Next.js, Remix.js, Express.js, and tools like Docker and git."
      />
      <meta
        name="twitter:image"
        content="https://kbbohara.com.np/assets/og-about.png"
      />
      <meta name="twitter:creator" content="@thekbbohara" />
    </Head>

    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  </>
);

export default About;
