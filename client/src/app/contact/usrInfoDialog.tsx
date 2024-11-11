import React, { useRef } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Button from '@/components/ui/Buttons';
import { useMessengerContext } from './Messenger/provider';
const UsrInfoDialog = ({ ...props }) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const { setEmail, setName, dialogRef } = useMessengerContext()

  return (
    <Dialog {...props} ref={dialogRef}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create profile
          </DialogTitle>
          <DialogDescription>
            Create Profile to be able to chat.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <label className="min-w-[5ch]">name</label>
            <input
              ref={nameRef} type="text"
              className="bg-transparent border border-p1 outline-none rounded-md w-full p-1" />
          </div>
          <div className="flex gap-1 items-center bg-transparent">
            <label className="min-w-[5ch]">email</label>
            <input ref={emailRef} type="email"
              className="bg-transparent border border-p1 outline-none rounded-md w-full p-1" />
          </div>
        </div>
        <DialogFooter className="mt-2">
          <Button
            onClick={() => {
              if (!nameRef.current && !emailRef.current) return;
              const name = nameRef.current?.value
              const email = emailRef.current?.value
              if (name && email) {
                localStorage.setItem("name", name)
                localStorage.setItem("email", email)
                setName(name)
                setEmail(email)
                dialogRef.current?.close()
              }
            }}
            theme="ghost"
            className="text-p1 border-transparent ml-auto mr-4">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default UsrInfoDialog
