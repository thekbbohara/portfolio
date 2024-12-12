import React from "react";
import HeroContent from "./HeroContent";
import { ActivityCard } from "./activity";

const Hero = () => {
  return (
    <section className="flex max-h-screen flex-col md:flex-row  m-auto md:m-0 sm:px-28 md:px-48 gap-12 md:gap-2 md:items-center">
      <HeroContent />
      <ActivityCard className="grow md:ml-auto  flex flex-col gap-4 sm:gap-4 sm:px-0 sm:mx-0 mx-auto" />
    </section>
  );
};

export default Hero;
