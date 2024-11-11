'use client'
import React, { isValidElement, useRef, useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Button from '@/components/ui/Buttons';
import { useMessengerContext } from './Messenger/provider';
const UsrInfoDialog = ({ ...props }) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const { setEmail, setName, dialogRef } = useMessengerContext()
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [isSubmittedOnce, setIsSubmittedOnce] = useState<boolean>(false);
  return (
    <Dialog {...props} ref={dialogRef} className='bg-btn-default text-s4'>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl uppercase'>
            Create profile
          </DialogTitle>
          <DialogDescription className='opacity-75'>
            Create Profile to be able to chat.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-1 items-center">
            <label className="min-w-[5ch]">name</label>
            <input
              ref={nameRef} type="text"
              className="bg-transparent border border-s4 outline-none rounded-md w-full p-1" />
          </div>
          <div >
            {isSubmittedOnce && invalidEmail
              && <div className='ml-[5ch] pl-[6px] text-red-500'>invalid email</div>
            }
            <div className="flex gap-1 items-center bg-transparent">
              <label className="min-w-[5ch]">email</label>
              <input ref={emailRef} type="email"
                className="bg-transparent border border-s4 outline-none rounded-md w-full p-1" />
            </div>
          </div>
        </div>
        <DialogFooter className="mt-2">
          <Button
            onClick={() => {
              if (!nameRef.current && !emailRef.current) return;
              const name = nameRef.current?.value
              const email = emailRef.current?.value
              if (name && email) {
                setIsSubmittedOnce(true)
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email)) {
                  setInvalidEmail(true)
                  return;
                }
                localStorage.setItem("name", name)
                localStorage.setItem("email", email)
                setName(name)
                setEmail(email)
                dialogRef.current?.close()
              }
            }}
            theme="ghost"
            className="text-s4 border-transparent ml-auto mr-4">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default UsrInfoDialog
