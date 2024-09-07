import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";
import Button from "./Buttons";
import cn from "@/utils/cn";

interface CardProps extends LinkProps {
  img: string;
  alt: string;
  children: string;
  className: string;
  primaryTech?: React.ReactSVGElement;
}

const Card = ({
  href,
  img,
  alt,
  primaryTech,
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col bg-p3 rounded-lg overflow-hidden max-h-[364px] max-w-[370px] ",
        className,
      )}
      {...props}
    >
      <div className="flex-1 min-h-[150px] overflow-hidden relative">
        <Image
          src={img}
          height={150} // set a fixed height if you want the image to always be this height
          width={350}
          alt={alt}
          className="w-full object-fill contrast-200 h-full absolute inset-0" // use max-h to limit image height
        />
        <i>{primaryTech}</i>
      </div>
      <div className="px-6 py-2 flex flex-col gap-2">
        <p className="h-12 text-clip overflow-clip ">{children}</p>
        <Button className="max-w-fit">view-project</Button>
      </div>
    </Link>
  );
};

export default Card;
