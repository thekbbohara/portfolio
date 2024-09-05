import { ArrowDownSFill } from "@/assets/spfyicons";
import cn from "@/utils/cn";
import React from "react";

const SubHeader = ({
  category,
  className,
  showIcon = true,
  rotate,
  onClick,
  ...props
}: {
  category: string;
  className?: string;
  showIcon?: boolean;
  rotate?: string;
  onClick?: () => void;
}) => {
  return (
    <header
      {...props}
      onClick={onClick}
      className={cn(
        "flex text-s4 border border-transparent border-b-line px-4 py-2 select-none",
        className,
      )}
    >
      {showIcon && (
        <ArrowDownSFill
          className={cn("text-s4 md:rotate-0 transition-[rotate]", rotate)}
        />
      )}
      {category}
    </header>
  );
};

export default SubHeader;
