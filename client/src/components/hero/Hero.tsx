import React from "react";
import HeroContent from "./HeroContent";
import { ActivityCard } from "./activity";

const Hero = () => {
  return (
    <section className="flex sm:m-0 flex-wrap  sm:pl-32 md:pl-48 m-auto gap-2 items-center">
      <HeroContent />
      <ActivityCard className="grow mx-auto" />
    </section>
  );
};

export default Hero;
