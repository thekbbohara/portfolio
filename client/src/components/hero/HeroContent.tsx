import React from "react";

const HeroContent = () => {
  return (
    <section className="flex flex-col gap-20">
      <h1 className="text-s4 flex flex-col leading-[1.2]">
        <em className="not-italic">Hi all. I am</em>
        <strong className="text-[62px] font-normal">Kb Bohara</strong>
        <em className="not-italic flex justify-start items-center text-subhead text-s3">
          <span aria-label="the" className="flex justify-self-start">
            &gt;
          </span>
          <span className="text-nowrap">Full-stack Developer.</span>
        </em>
      </h1>
      <div>
        <p className="text-s1">
          {"// complete the game to continue".toString()}
        </p>
        <p className="text-s1">
          {"// you can also see it on my Github page".toString()}
        </p>
        <p>
          <span className="text-s3">const</span>{" "}
          <span className="text-s2">githubLink</span>{" "}
          <span className="text-s4">=</span>{" "}
          <span className="text-a1">“github.com/thekbbohara”</span>
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
