import { GamepadFill, TerminalBoxFill, User4Fill } from "@/assets/spfyicons";
import React, { ReactNode } from "react";

export const about_category: { query: string; icon: ReactNode }[] = [
  {
    query: "professional",
    icon: <TerminalBoxFill />,
  },
  {
    query: "personal",
    icon: <User4Fill />,
  },
  {
    query: "hobbies",
    icon: <GamepadFill />,
  },
];
