"use client";
import ContactCodeview from "./ContactCodeview";
import ContactSidebar from "./ContactSidebar";
import Messenger from "./Messenger";
import { MessengerProvider } from "./Messenger/provider";
import { SocketProvider } from "./Messenger/useSocket";

const Contact = () => {
  return (
    <section className="flex h-full grow">
      <ContactSidebar />
      <div className="flex grow">
        <SocketProvider>
          <MessengerProvider>
            <Messenger />
            <ContactCodeview />
          </MessengerProvider>
        </SocketProvider>
      </div>
    </section>
  );
};

export default Contact;
