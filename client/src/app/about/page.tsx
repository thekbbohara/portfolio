import AsideAbout from "@/components/about/AsideAbout";
import ProfessionalInfo from "@/components/about/ProfessionalInfo";
import React from "react";

const About = () => {
  return (
    <section className="grow h-full  flex relative">
      <div className="grow flex">
        <AsideAbout />
        <div className="flex justify-between grow">
          <ProfessionalInfo />
          <div className="h-full w-4 border border-y-transparen border-line">
            <div className="w-full h-2 bg-s1 mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
