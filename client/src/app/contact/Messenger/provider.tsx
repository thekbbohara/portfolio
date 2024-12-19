"use client";
import Kaira from "@/lib/kaira";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
  useRef,
  useEffect,
} from "react";
// Create the context with a default value of undefined
const MessengerContext = createContext<IMessengerContext | undefined>(
  undefined,
);
// Custom hook to consume the context
export const useMessengerContext = () => {
  const context = useContext(MessengerContext);
  if (!context) {
    throw new Error(
      "useMessengerContext must be used within a MessengerProvider",
    );
  }
  return context;
};

// Update this in your MessengerProvider
export type msgProps = {
  sender?: "admin" | "user";
  msg?: string | string[] | ReactNode; // Allow ReactNode (JSX elements) in msg
};
export type TMessage = {
  sender: "admin" | "user";
  time: string;
  date: string;
  msg: string | ReactNode; // Allow ReactNode in addition to strings
};

interface IMessengerContext {
  msg: string | ReactNode; // Allow both strings and ReactNode
  setMsg: Dispatch<SetStateAction<string | ReactNode>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  messages: TMessage[];
  setMessages: Dispatch<SetStateAction<TMessage[]>>;
  sendMsg: (message?: msgProps) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
}

interface MessengerProviderProps {
  children: ReactNode; // Allow any valid ReactNode as children
}
export const MessengerProvider = ({ children }: MessengerProviderProps) => {
  const [msg, setMsg] = useState<string | ReactNode>(""); // Updated to string | ReactNode
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messages, setMessages] = useState<TMessage[]>([]);
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem("messages")!) || []);
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const sendMsg = async (message?: msgProps) => {
    if (!name || !email) {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
      return;
    }
    // Only proceed if msg is valid
    debugger;
    if (
      typeof msg === "string" &&
      msg.trim().length === 0 &&
      msg === undefined &&
      !message?.msg
    ) {
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const newMessage: TMessage = {
      sender: message?.sender || "user",
      msg: message?.msg || msg,
      date,
      time,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    localStorage.setItem("messages", JSON.stringify(messages));
    setMsg(""); // Reset msg after sending

    if (newMessage.sender === "user" && typeof newMessage.msg === "string") {
      const res = await Kaira(name, email, newMessage.msg);
      if (res && res.msg !== "null") {
        const adminMsg: TMessage = {
          ...res,
          time,
          date,
        };
        setMessages((prevMessages) => [...prevMessages, adminMsg]);
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
        dialogRef,
      }}
    >
      {children}
    </MessengerContext.Provider>
  );
};
