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
    <footer className="pl-6 sm:px-6 text-s1 flex border border-transparent border-t-line sm:justify-normal justify-between  items-center">
      <strong className=" pr-2 font-normal">find me in:</strong>

      <div className="flex items-center sm:justify-between sm:grow">
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
        <Link
          href={"https://github.com/thekbbohara"}
          target="_blank"
          className="p-2 border border-transparent sm:border-l-line flex gap-1"
        >
          <span className="sm:inline-block hidden">@thekbbohara</span>
          <span>
            <GithubFill />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
