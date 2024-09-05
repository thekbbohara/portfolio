"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderText from "../ui/HeaderText";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";
import { AddFill, MenuFill } from "@/assets/spfyicons";

const Header = ({
  name,
  navItems,
}: {
  name: string;
  navItems: { name: string; route: string }[];
}) => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header
      className={cn(
        " text-s1 w-full border border-transparent ",
        showMenu
          ? "flex flex-col fixed z-[9999999999] bg-p2 min-h-svh"
          : "flex border-b-line",
      )}
    >
      <div className="flex md:pr-20 px-6 gap-2 items-center">
        <button
          className="appearance-none"
          onClick={() => {
            setShowMenu((pm) => !pm);
          }}
        >
          {showMenu ? (
            <AddFill className="rotate-45 appearance-none transition-transform h-fit ease-in-out" />
          ) : (
            <MenuFill className="h-fit appearance-none  md:hidden" />
          )}
        </button>
        <Link href="/" className="w-full max-w-44  py-2 cursor-default">
          {name}
        </Link>
      </div>
      <nav
        className={cn(
          "grow flex select-none",
          showMenu ? " flex-col gap-2 mt-2" : " sm:justify-between",
        )}
      >
        <ul
          className={cn(
            "sm:flex ",
            showMenu ? "flex flex-col gap-2" : "hidden",
          )}
        >
          {navItems.map(({ name, route }, id) => (
            <li
              key={id}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <Link href={route}>
                <HeaderText
                  className={cn(id === navItems.length - 1 && "border-r-line")}
                  active={route === pathName}
                  activeType={showMenu ? "inline" : "default"}
                >
                  {name}
                </HeaderText>
              </Link>
            </li>
          ))}
        </ul>
        <div className={cn(showMenu ? "" : "ml-auto")}>
          <Link
            href={"/contact"}
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <HeaderText
              active={"/contact" === pathName}
              activeType={showMenu ? "inline" : "default"}
              className={cn(!showMenu && "pr-6")}
            >
              contact
            </HeaderText>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
