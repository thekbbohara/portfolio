import { AddCircleFill, CameraFill, SendRounded, ThumbUpFilled, Emoji16Filled, MicFill, Image2Fill } from '@/assets/spfyicons';
import { format } from 'path';
import React from 'react'
import { useMessengerContext } from './provider';

const MessengerFooter = () => {
  const { msg, setMsg, sendMsg } = useMessengerContext();
  return (
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
          ? <span onClick={() => sendMsg()}> <SendRounded /></span>
          : <span onClick={() => {
            sendMsg({ sender: "user", msg: <ThumbUpFilled className="text-s4" /> })
            console.log("onclick")
          }}> <ThumbUpFilled /></span>}
      </button>
    </footer>
  )
}

export default MessengerFooter
