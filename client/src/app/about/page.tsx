import AsideAbout from "@/components/about/AsideAbout";
import ProfessionalInfo from "@/components/about/ProfessionalInfo";
import React from "react";

const About = () => {
  return (
    <section className="grow h-full  flex relative">
      <div className="grow flex">
        <AsideAbout />
        <ProfessionalInfo />
      </div>
    </section>
  );
};

export default About;
