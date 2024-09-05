"use client";
import Link from "next/link";
import React from "react";
import HeaderText from "../ui/HeaderText";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";
import { MenuFill } from "@/assets/spfyicons";

const Header = ({
  name,
  navItems,
}: {
  name: string;
  navItems: { name: string; route: string }[];
}) => {
  const pathName = usePathname();
  return (
    <header className="flex  text-s1 w-full border border-transparent border-b-line">
      <div className="flex md:pr-20 px-6 gap-2 items-center">
        <MenuFill className="h-fit md:hidden" />
        <Link href="/" className="w-full max-w-44  py-2 cursor-default">
          {name}
        </Link>
      </div>
      <nav className="grow flex sm:justify-between  select-none">
        <ul className="sm:flex hidden">
          {navItems.map(({ name, route }, id) => (
            <li key={id}>
              <Link href={route}>
                <HeaderText
                  className={cn(id === navItems.length - 1 && "border-r-line")}
                  active={route === pathName}
                >
                  {name}
                </HeaderText>
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <Link href={"/contact"}>
            <HeaderText active={"/contact" === pathName} className="pr-6">
              contact
            </HeaderText>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
