'use client'
import ContactCodeview from "./ContactCodeview";
import ContactSidebar from "./ContactSidebar";
import Messenger from "./Messenger";
import React, { useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState<string>("");
  return (
    <section className="flex h-full grow">
      <ContactSidebar />
      <div className="flex grow">
        <Messenger msg={msg} setMsg={setMsg} />
        <ContactCodeview msg={msg} />
      </div>
    </section>
  );
};

export default Contact;
