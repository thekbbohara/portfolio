import { ArrowDownSFill } from "@/assets/spfyicons";
import cn from "@/utils/cn";
import React from "react";

const SubHeader = ({
  category,
  className,
  showIcon = true,
}: {
  category: string;
  className?: string;
  showIcon?: boolean;
}) => {
  return (
    <header
      className={cn(
        "flex text-s4 border border-transparent border-b-line px-4 py-2",
        className,
      )}
    >
      {showIcon && <ArrowDownSFill className={cn("text-s4")} />}
      {category}
    </header>
  );
};

export default SubHeader;
