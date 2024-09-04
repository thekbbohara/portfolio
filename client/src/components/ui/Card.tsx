import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";
import Button from "./Buttons";

interface CardProps extends LinkProps {
  img: string;
  alt: string;
  children: string;
  primaryTech?: React.ReactSVGElement;
}
const Card = ({
  href,
  img,
  alt,
  primaryTech,
  children,
  ...props
}: CardProps) => {
  return (
    <Link
      {...props}
      href={href}
      className="max-w-[370px] relative grid grid-rows-2 min-h-[314px] max-h-[350px] bg-p3 rounded-lg overflow-hidden"
    >
      <div className=" w-full h-full overflow-hidden ">
        <Image
          src={img}
          height={150}
          width={384}
          alt={alt}
          className="max-w-[370px] hover:scale-100 scale-105 w-full object-cover"
        />
        <i>{primaryTech}</i>
      </div>
      <div className="px-6 py-4 flex flex-col gap-3 self-center">
        <p>{children}</p>
        <Button className="max-w-fit ">view-poroject</Button>
      </div>
    </Link>
  );
};

export default Card;
