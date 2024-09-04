"use client";
import React, { Suspense } from "react";
import AsideAbout from "@/components/about/AsideAbout";
import Bio from "@/components/about/Bio";
import { useSearchParams } from "next/navigation";

const AboutContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "personal";

  return (
    <section className="grow h-full flex relative">
      <div className="grow flex">
        <AsideAbout category={category} />
        <div className="flex justify-between grow">
          <Bio category={category} />
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
