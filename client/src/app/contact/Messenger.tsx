'use client'
import {
  AddCircleFill,
  CameraFill,
  Emoji16Filled,
  Image2Fill,
  Information2Fill,
  MicFill,
  PhoneFill,
  SendRounded,
  ThumbUpFilled,
  VideoOnFill,
} from "@/assets/spfyicons";
import Button from "@/components/ui/Buttons";
import cn from "@/utils/cn";
import { format } from "date-fns";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const Messenger = (

  { msg, setMsg, name, setName, email, setEmail }:
    { msg: string; setMsg: Dispatch<SetStateAction<string>>; name: string; setName: Dispatch<SetStateAction<string>>; email: string; setEmail: Dispatch<SetStateAction<string>>; }) => {
  const [messages, setMessages] = useState<{
    sender: "admin" | "user",
    time: string, diff?: number,
    msg: React.ReactNode
  }[]>([])
  const [maxMsgBoxHeight, setMaxMsgBoxHeight] = useState<number>(0)
  const msgBoxRef = useRef<null | HTMLDivElement>(null)

  const sendMsg = () => {
    if (!name || !email) {
      setName("hi")
      setEmail("hi@gmail.com")
    }
    if (msg.trim().length <= 0) return;

    const formattedDate = format(new Date(), 'dd MMM yyyy, hh:mm a')
    setMessages([...messages, { sender: "user", msg: msg, time: formattedDate }])
    setMsg("")
  }
  useEffect(() => {
    if (!msgBoxRef.current) return;
    const maxHeight = msgBoxRef.current?.clientHeight;
    setMaxMsgBoxHeight(maxHeight || 0)
    msgBoxRef.current.style.maxHeight = `${maxHeight}px`;
  }, [])
  useEffect(() => {
    if (!msgBoxRef.current) return;
    msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
  }, [messages])
  return (
    <section className="w-full max-w-[98vw] mx-auto sm:mx-0  border border-transparent border-l-line sm:border-l-transparent  border-r-line p-4 flex flex-col justify-between">
      <header className="flex items-center justify-between">
        <div className="flex gap-2 items-center justify-between">
          <Image
            src="/kb.jpg"
            alt="kb"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="leading-4">
            <h1 className="font-semibold text-body">kb-bohara</h1>
            <h6 className="font-thin text-code">active 6h ago</h6>
          </div>
        </div>
        <div>
          <ul className="flex gap-2">
            <PhoneFill />
            <VideoOnFill />
            <Information2Fill />
          </ul>
        </div>
      </header>
      <div
        id="message-box"
        ref={msgBoxRef}
        className={cn(
          `grow flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:w-2`,
          { [`max-h-[${maxMsgBoxHeight}px]`]: maxMsgBoxHeight }
        )}>
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
          {messages.map((message, id) => <>
            {id == 0 && message.time &&
              <span className="mx-auto">
                {message.time.split(',')[0]}
              </span>}
            {id >= 1 && messages[id - 1]?.time.split(',')[0] != message.time.split(',')[0] &&
              <span className="mx-auto">
                {messages[id - 1]?.time}
                {message.time.split(',')[0]}
              </span>}
            <div className="ml-auto rounded-full bg-s3 py-2 px-3 flex gap-2">
              <span
                key={id}
                className=" text-s4 "
              >
                {message.msg}
              </span>
              <span className="text-p3 text-xs opacity-70 mt-auto tracking-[-0.09rem]">
                {message.time.split(',')[1]}
              </span>
            </div>
          </>)}
        </div>
      </div>
      <footer className="flex justify-between gap-1 items-center">
        <div className="flex gap-1">
          <AddCircleFill className=" sm:hidden flex" />
          <div className=" hidden xsm:flex">
            <CameraFill />
            <Image2Fill />
            <MicFill />
          </div>
        </div>
        <div className=" flex w-full justify-between items-center border border-line bg-transparent rounded-xl p-1 ">
          <input
            className="bg-transparent min-w-[10ch] w-full outline outline-transparent grow py-1 pl-1"
            placeholder="message"
            value={msg}
            onChange={(e) => { setMsg(e.target.value) }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                sendMsg();
              }
            }}
          />

          <Emoji16Filled />

        </div>
        <button className="">
          {msg.trim()
            ? <span onClick={sendMsg}> <SendRounded /></span>
            : <span onClick={() => {
              if (!name || !email) {
                setName("hi")
                setEmail("hi@gmail.com")
              }
              const formattedDate = format(new Date(), 'dd MMM yyyy, hh:mm a')
              setMessages([...messages, { sender: "user", msg: <ThumbUpFilled className="text-s4" />, time: formattedDate }])
              console.log("onclick")
            }}> <ThumbUpFilled /></span>}
        </button>
      </footer>
    </section>
  );
};

export default Messenger;
