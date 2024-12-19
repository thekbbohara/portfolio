import ContactCodeview from "./ContactCodeview";
import ContactSidebar from "./ContactSidebar";
import Messenger from "./Messenger";
import { MessengerProvider } from "./Messenger/provider";

const Contact = () => {
  return (
    <section className="flex h-full grow">
      <ContactSidebar />
      <div className="flex grow">
        <MessengerProvider>
          <Messenger />
          <ContactCodeview />
        </MessengerProvider>
      </div>
    </section>
  );
};

export default Contact;
