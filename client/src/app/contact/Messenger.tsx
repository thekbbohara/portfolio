"use client";

import Button from "@/components/ui/Buttons";
import cn from "@/utils/cn";
import Image from "next/image";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import UsrInfoDialog from "./usrInfoDialog";
import MessengerHeader from "./Messenger/header";
import { useMessengerContext } from "./Messenger/provider";
import MessengerFooter from "./Messenger/footer";

export interface IMessenger {
  msg: string | ReactNode;
  setMsg: Dispatch<SetStateAction<string | ReactNode>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const Messenger = () => {
  const { messages, dialogRef } = useMessengerContext();
  const [maxMsgBoxHeight, setMaxMsgBoxHeight] = useState<number>(0);
  const msgBoxRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (!msgBoxRef.current) return;
    const maxHeight = msgBoxRef.current?.clientHeight;
    setMaxMsgBoxHeight(maxHeight || 0);
    msgBoxRef.current.style.maxHeight = `${maxHeight}px`;
  }, []);
  useEffect(() => {
    if (!msgBoxRef.current) return;
    msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
  }, [messages]);
  return (
    <section className="w-full max-w-[98vw] mx-auto sm:mx-0  border border-transparent border-l-line sm:border-l-transparent  border-r-line p-4 flex flex-col justify-between">
      <UsrInfoDialog ref={dialogRef} />
      <MessengerHeader />
      <div
        id="message-box"
        ref={msgBoxRef}
        className={cn(
          `grow flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:w-2`,
          { [`max-h-[${maxMsgBoxHeight}px]`]: maxMsgBoxHeight },
        )}
      >
        <div
          id="info-div"
          className="flex flex-col items-center mt-auto leading-9 mb-6"
        >
          <Image
            src="/kb.jpg"
            alt="kb"
            width={100}
            height={100}
            className="rounded-full"
          />
          <strong className="text-subhead  font-semibold">kb-bohara</strong>
          <p className="flex flex-col text-center leading-4">
            <span>Full-stack developer</span>
            <span>Lives at Kathmandu Nepal</span>
          </p>
          <Button theme="ghost" className="py-0 my-2 border-line">
            view-profile
          </Button>
        </div>
        <div className="flex flex-col gap-2 pb-1 ">
          {messages.map((message, id) => (
            <>
              {id == 0 && <span className="mx-auto">{message.date}</span>}
              {id >= 1 &&
                message.msg &&
                message.msg.toString() != "null" &&
                message.date != message.date && (
                  <span className="mx-auto">
                    {message.date}
                    {message.time}
                  </span>
                )}
              {Array.isArray(message.msg)
                ? message.msg.map((reply: string, i) => {
                    return reply == "null" ? null : (
                      <div
                        key={i}
                        className={cn(
                          "leading-5 rounded-2xl max-w-[70%]  py-2 px-3 flex flex-col gap-2",
                          message.sender === "admin"
                            ? "mr-auto bg-s2"
                            : "ml-auto bg-s3",
                        )}
                      >
                        <span className=" text-s4 ">{reply}</span>
                        <span className="text-p3 min-w-fit text-xs opacity-70 ml-auto mt-auto tracking-[-0.09rem] flex items-end justify-end">
                          {message.time}
                        </span>
                      </div>
                    );
                  })
                : message.msg &&
                  message.msg.toString() != "null" && (
                    // <span key={id} className=" text-s4 ">
                    //   {message.msg.toString()}
                    // </span>
                    <div
                      key={id}
                      className={cn(
                        "leading-5 rounded-2xl max-w-[70%]  py-2 px-3 flex flex-col gap-2",
                        message.sender === "admin"
                          ? "mr-auto bg-s2"
                          : "ml-auto bg-s3",
                      )}
                    >
                      <span className=" text-s4 ">
                        {React.isValidElement(message.msg)
                          ? message.msg
                          : message.msg.toString()}
                      </span>

                      <span className="text-p3 min-w-fit text-xs opacity-70 mt-auto ml-auto tracking-[-0.09rem] flex items-end justify-end">
                        {message.time}
                      </span>
                    </div>
                  )}
            </>
          ))}
        </div>
      </div>
      <MessengerFooter />
    </section>
  );
};

export default Messenger;
