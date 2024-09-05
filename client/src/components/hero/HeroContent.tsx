import React from "react";

const HeroContent = () => {
  return (
    <section className="flex flex-col  gap-10 sm:gap-20 px-6 sm:px-0 sm:mx-0 mx-auto">
      <h1 className="text-s4 flex flex-col sm:leading-[1]">
        <em className="not-italic">Hi all. I am</em>
        <strong className=" text-head font-normal leading-[0.8]">
          Kb Bohara
        </strong>
        <em className="not-italic flex justify-start items-center sm:text-subhead text-s3">
          <span aria-label="the" className="flex justify-self-start">
            &gt;
          </span>
          <span className="text-nowrap">Full-stack Developer.</span>
        </em>
      </h1>
      <div>
        <p className="text-s1 sm:block hidden">
          {"// complete the game to continue".toString()}
        </p>
        <p className="text-s1 sm:block hidden">
          {"// you can also see it on my Github page".toString()}
        </p>
        <p className="text-s1 block sm:hidden">
          {"// find my profile on Github:".toString()}
        </p>
        <p className="text-code">
          <span className="text-s3">const</span>{" "}
          <span className="text-s2">githubLink</span>{" "}
          <span className="text-s4">=</span>{" "}
          <span className="text-a1  sm:text-code">
            “github.com/thekbbohara”
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
