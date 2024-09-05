import React from "react";
import CheckBox from "./CheckBox";

const CheckLogo = ({
  isChecked = false,
  icon,
  name,
}: {
  isChecked?: boolean;
  icon: React.ReactNode;
  name: string;
}) => (
  <div className="flex gap-4">
    <CheckBox isChecked={isChecked} />
    <span className="flex select-none gap-2 cursor-pointer">
      {icon}
      {name}
    </span>
  </div>
);

export default CheckLogo;
