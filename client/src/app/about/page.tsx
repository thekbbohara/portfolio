"use client";
import React, { Suspense } from "react";
import AsideAbout from "@/components/about/AsideAbout";
import Bio from "@/components/about/Bio";
import { useSearchParams } from "next/navigation";
import ProInfo from "@/components/about/ProInfo";
import Interests from "@/components/about/Interests";

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
