import ContactCodeview from "@/components/contact/ContactCodeview";
import ContactSidebar from "@/components/contact/ContactSidebar";
import Messenger from "@/components/contact/Messenger";
import React from "react";

const Contact = () => {
  return (
    <section className="flex h-full grow">
      <ContactSidebar />
      <div className="flex grow">
        <Messenger />
        <ContactCodeview />
      </div>
    </section>
  );
};

export default Contact;
