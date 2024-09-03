import { CheckFill } from "@/assets/spfyicons";
import cn from "@/utils/cn";
import React from "react";

const CheckBox = ({ isChecked = false }: { isChecked?: boolean }) => {
  return (
    <div
      className={cn(
        "bg-p2 w-5 h-5 border-2 border-s1 rounded-[4px]",
        isChecked && "bg-s1",
      )}
    >
      {isChecked && <CheckFill className="text-s4 size-4" />}
    </div>
  );
};

export default CheckBox;
