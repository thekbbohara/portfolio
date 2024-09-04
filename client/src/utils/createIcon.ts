import React from "react";
import cn from "./cn";

interface IconProps {
  size?: number;
  className?: string;
}

type pathType = {
  [key: string]: string;
  d: string;
  fill: string;
};

type svgReturnType = {
  path: pathType[];
  viewBox: string;
  [key: string]: any;
};

export const createIcon = (svgData: svgReturnType): React.FC<IconProps> => {
  // Create the component
  const IconComponent: React.FC<IconProps> = ({
    size = 24,
    className,
    ...restProps
  }: IconProps) =>
    React.createElement(
      "svg",
      {
        viewBox: svgData.viewBox,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        className: cn(
          "w-6 h-6 text-s1 flex justify-center items-center",
          className,
        ),
        ...restProps,
      },
      svgData.path.map((p, i) =>
        React.createElement("path", { d: p.d, key: i, fill: p.fill }),
      ),
    );

  // Assign a display name
  IconComponent.displayName = "IconComponent";

  return IconComponent;
};
