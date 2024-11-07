'use client'
import ContactCodeview from "./ContactCodeview";
import ContactSidebar from "./ContactSidebar";
import Messenger from "./Messenger";
import React, { useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <section className="flex h-full grow">
      <ContactSidebar />
      <div className="flex grow">
        <Messenger msg={msg} name={name} email={email} setMsg={setMsg} setName={setName} setEmail={setEmail} />
        <ContactCodeview msg={msg} name={name} email={email} />
      </div>
    </section>
  );
};

export default Contact;
