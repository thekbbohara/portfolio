import { Information2Fill, PhoneFill, VideoOnFill } from '@/assets/spfyicons'
import Image from 'next/image'
import React from 'react'

const MessengerHeader = () => {
  return (
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
  )
}

export default MessengerHeader
