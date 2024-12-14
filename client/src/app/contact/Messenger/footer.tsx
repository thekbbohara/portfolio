import React, { ChangeEvent } from "react";
import {
  AddCircleFill,
  CameraFill,
  SendRounded,
  ThumbUpFilled,
  Emoji16Filled,
  MicFill,
  Image2Fill,
} from "@/assets/spfyicons";
import { useMessengerContext } from "./provider";

const MessengerFooter = () => {
  const { msg, setMsg, sendMsg } = useMessengerContext();

  const handleSend = () => {
    if (typeof msg === "string" && msg.trim()) {
      sendMsg({ msg }); // Send a string message
    } else if (React.isValidElement(msg)) {
      sendMsg({ msg }); // Send a React element
    }
  };
  return (
    <footer className="flex justify-between gap-1 items-center">
      <div className="flex gap-1">
        <AddCircleFill className="sm:hidden flex" />
        <div className="hidden xsm:flex">
          <CameraFill />
          <Image2Fill />
          <MicFill />
        </div>
      </div>
      <div className="flex w-full justify-between items-center border border-line bg-transparent rounded-xl p-1">
        <input
          className="bg-transparent min-w-[10ch] w-full outline outline-transparent grow py-1 pl-1"
          placeholder="message"
          value={typeof msg == "string" ? msg : msg?.toString()}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMsg();
            }
          }}
        />
        <Emoji16Filled />
      </div>

      <button className="">
        {typeof msg === "string" && msg.trim() ? (
          <span onClick={() => sendMsg()}>
            <SendRounded />
          </span>
        ) : (
          <span
            onClick={() => {
              // Send message with JSX element (ThumbUpFilled icon)
              sendMsg({
                sender: "user",
                msg: <ThumbUpFilled className="text-s4" />, // JSX element being sent
              });
            }}
          >
            <ThumbUpFilled />
          </span>
        )}
      </button>
    </footer>
  );
};

export default MessengerFooter;
