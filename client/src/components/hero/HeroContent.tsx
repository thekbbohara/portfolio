import React from "react";

const HeroContent = () => {
  return (
    <section className="flex flex-col  gap-10 sm:gap-20 px-6 sm:px-0 sm:mx-0 mx-auto">
      <h1 className="relative text-s4 flex flex-col sm:leading-[1]">
        <div className=" max-w-60 w-[90vw] h-32 top-6 left-0 rotate-45 absolute bg-a2 blur-3xl opacity-30"></div>
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
      <div className="relative">
        <div className=" select-none max-w-60 w-[90vw] h-32 -top-6 rotate-45 right-0 rounded-full absolute bg-s3 blur-3xl opacity-30"></div>
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
          <a
            target="_blank"
            href="https://github.com/thekbbohara"
            className="text-a1 z-10 sm:text-code"
          >
            "github.com/thekbbohara"
          </a>
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
