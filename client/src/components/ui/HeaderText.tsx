import cn from "@/utils/cn";
import React from "react";

const HeaderText = ({
  className,
  children,
  active = false,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        " cursor-pointer px-8 py-2 border border-b-2 border-transparent border-l-line",
        active ? "text-s4 border-b-a1" : "text-s1",
        className,
      )}
      {...props}
    >
      <span>_{children}</span>
    </div>
  );
};

export default HeaderText;
