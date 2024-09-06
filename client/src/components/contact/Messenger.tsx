import {
  AddCircleFill,
  CameraFill,
  Emoji16Filled,
  Image2Fill,
  Information2Fill,
  MicFill,
  PhoneFill,
  ThumbUpFilled,
  VideoOnFill,
} from "@/assets/spfyicons";
import Image from "next/image";
import React from "react";
import Button from "../ui/Buttons";

const Messenger = () => {
  return (
    <section className="w-full mx-auto sm:mx-0 max-w-md border border-transparent border-l-line sm:border-l-transparent  border-r-line p-4 flex flex-col justify-between">
      <header className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
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
      <div className="grow flex flex-col ">
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
        <div id="message-box"></div>
      </div>
      <footer className="flex justify-between items-center">
        <div className="flex gap-1">
          <AddCircleFill />
          <CameraFill />
          <Image2Fill />
          <MicFill />
        </div>
        <div className="flex border border-line bg-transparent rounded-xl p-1">
          <input
            type="text"
            placeholder="Message"
            className="bg-transparent outline-none"
          />
          <Emoji16Filled />
        </div>
        <button>
          <ThumbUpFilled />
        </button>
      </footer>
    </section>
  );
};

export default Messenger;