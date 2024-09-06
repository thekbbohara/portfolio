import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <section className="flex flex-col  gap-20 px-6 sm:px-0 sm:mx-0 mx-auto">
      <h1 className="relative text-s4 flex flex-col sm:leading-[1]">
        <div className="pointer-events-none max-w-48 w-[60vw] h-48 rounded-lg sm:-top-6 -left-18 sm:left-16 rotate-6 absolute bg-a2 blur-3xl opacity-30"></div>
        <strong className="not-italic flex sm:flex-row flex-col opacity-75">
          안녕
        </strong>
        <Link
          href="/about"
          className="text-head font-normal leading-[0.8] sm:gap-2 flex flex-col sm:flex-row"
        >
          <span>Kb</span>
          <span>Bohara</span>
        </Link>
        <em className="not-italic flex justify-start items-center text-[24px] sm:text-subhead text-s3">
          <span aria-label="the" className="flex justify-self-start">
            &gt;
          </span>
          <Link href="/projects" className="text-nowrap">
            Full-stack Developer.
          </Link>
        </em>
      </h1>
      <div className="relative cursor-default">
        <p className="text-s1 sm:block hidden">
          {"// complete the game to continue".toString()}
        </p>
        <p className="text-s1 sm:block hidden">
          {"// you can also see it on my Github page".toString()}
        </p>
        <p className="text-s1 block sm:hidden">
          {"// find my profile on Github:".toString()}
        </p>
        <p className="text-code z-10">
          <span className="text-s3">const</span>{" "}
          <span className="text-s2">githubLink</span>{" "}
          <span className="text-s4">=</span>{" "}
          <a
            target="_blank"
            href="https://github.com/thekbbohara"
            className="text-a1 z-20 sm:text-code"
          >
            &quot;github.com/thekbbohara&quot;
          </a>
        </p>
        <div className="z-0 pointer-events-none select-none max-w-80 w-[90vw] h-32 -top-6 -right-10 rounded-full absolute bg-s3 blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroContent;
