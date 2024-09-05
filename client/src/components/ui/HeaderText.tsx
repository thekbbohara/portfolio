import cn from "@/utils/cn";
import React from "react";

const HeaderText = ({
  className,
  children,
  active = false,
  activeType = "default",
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  active?: boolean;
  activeType?: "default" | "inline";
}) => {
  return (
    <div
      className={cn(
        " cursor-pointer px-8 py-2 border border-b-2 border-transparent border-l-line",
        active ? "text-s4 border-b-a1" : "text-s1",
        activeType === "inline" && "border-line border-b-1",
        className,
      )}
      {...props}
    >
      <span>_{children}</span>
    </div>
  );
};

export default HeaderText;
