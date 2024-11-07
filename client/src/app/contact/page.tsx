import ContactCodeview from "./ContactCodeview";
import ContactSidebar from "./ContactSidebar";
import Messenger from "./Messenger";
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
