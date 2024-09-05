"use client";
import Link from "next/link";
import React from "react";
import HeaderText from "../ui/HeaderText";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";

const Header = ({
  name,
  navItems,
}: {
  name: string;
  navItems: { name: string; route: string }[];
}) => {
  const pathName = usePathname();
  return (
    <header className="flex text-s1 w-full border border-transparent border-b-line">
      <h1 className="flex max-w-64 w-full px-6 py-2 cursor-default">{name}</h1>
      <nav className="sm:flex w-full hidden select-none">
        <ul className="md:flex hidden">
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
