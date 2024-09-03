import { GithubFill } from "@/assets/spfyicons";
import cn from "@/utils/cn";
import Link from "next/link";
import React from "react";

const Footer = ({
  socialLink,
}: {
  socialLink: { icon: React.ReactNode; href: string }[];
}) => {
  return (
    <footer className=" px-6 text-s1 flex border border-transparent border-t-line justify-between items-center">
      <div className="flex items-center">
        <strong className=" pr-2 font-normal">find me in:</strong>
        <ul className="flex">
          {socialLink.map(({ icon, href }, id) => (
            <li
              key={id}
              className={cn(
                "p-2 border border-transparent border-l-line",
                id === socialLink.length - 1 && "border-r-line",
              )}
            >
              <Link target="_blank" href={href}>
                <i>{icon}</i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={"https://github.com/thekbbohara"}
        target="_blank"
        className="p-2 border border-transparent border-l-line flex gap-1"
      >
        <span>@thekbbohara</span>
        <span>
          <GithubFill />
        </span>
      </Link>
    </footer>
  );
};

export default Footer;
