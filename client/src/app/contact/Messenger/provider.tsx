import Kaira from '@/lib/kaira';
import { createContext, useState, Dispatch, SetStateAction, ReactNode, useContext, useRef } from 'react';

// Define the types for the context
export type msgProps = { sender?: "admin" | "user"; msg?: ReactNode }
export type TMessage = {
  sender: "admin" | "user",
  time: string,
  date: string,
  msg: React.ReactNode
}
interface IMessengerContext {
  msg: string;
  setMsg: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  messages: TMessage[];
  setMessages: Dispatch<SetStateAction<TMessage[]>>;
  sendMsg: (message?: msgProps) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
}

// Create the context with a default value of undefined
const MessengerContext = createContext<IMessengerContext | undefined>(undefined);

interface MessengerProviderProps {
  children: ReactNode;
}

export const MessengerProvider = ({ children }: MessengerProviderProps) => {
  const [msg, setMsg] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [messages, setMessages] = useState<TMessage[]>([]);
  const dialogRef = useRef<null | HTMLDialogElement>(null); // Reference to the dialog element

  // Send message function
  const sendMsg = async (message?: msgProps) => {
    if (!name || !email) {
      if (dialogRef.current) {
        dialogRef.current.showModal(); // Show the dialog if name or email is missing
      }
      return;
    }
    if (msg.trim().length <= 0) {
      return;
    }

    // Get the current date and time using the native Date object
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });

    // Create the new message object
    const newMessage: TMessage = {
      sender: message?.sender || 'user',
      msg: message?.msg || msg,
      date,
      time,
    };

    // Update the messages state with the new message
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Clear the message input field
    setMsg('');
    if (newMessage.sender == "user" && newMessage.msg) {
      console.log("requesting response")
      const res = await Kaira(name, email, newMessage.msg.toString());
      if (res) {
        console.log("got res")
        const adminMsg: TMessage = {
          ...res,
          time,
          date
        }
        console.log({ adminMsg })
        setMessages((prevMessages) => [...prevMessages, adminMsg])
      }
    }
  };

  return (
    <MessengerContext.Provider
      value={{
        msg,
        setMsg,
        name,
        setName,
        email,
        setEmail,
        messages,
        setMessages,
        sendMsg,
        dialogRef,  // Provide the dialogRef to components that need it
      }}
    >
      {children}
    </MessengerContext.Provider>
  );
};

// Custom hook to consume the context
export const useMessengerContext = () => {
  const context = useContext(MessengerContext);
  if (!context) {
    throw new Error("useMessengerContext must be used within a MessengerProvider");
  }
  return context;
};
