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
import { type Socket } from "socket.io-client";
import { useSocket } from "./useSocket";
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
  msg?: ReactNode; // Allow ReactNode (JSX elements) in msg
  type?: "string" | "array" | "image" | "icon" | "audio" | "video"; // Added type
};

export type TMessage = {
  sender: "admin" | "user";
  time: string;
  date: string;
  msg: ReactNode; // Allow ReactNode in addition to strings
  type: "string" | "array" | "image" | "icon" | "audio" | "video"; // Added type
};
interface IMessengerContext {
  msg: ReactNode; // Allow both strings and ReactNode
  setMsg: Dispatch<SetStateAction<ReactNode>>;
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
  const [msg, setMsg] = useState<ReactNode>(""); // Updated to string | ReactNode
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messages, setMessages] = useState<TMessage[]>([]);
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const socket: Socket | undefined = useSocket();
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
      type: message?.type || "string", // Added type handling
      sender: message?.sender || "user",
      msg: message?.msg || msg,
      date,
      time,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    localStorage.setItem("messages", JSON.stringify(messages));
    setMsg(""); // Reset msg after sending

    if (
      newMessage.sender === "user" &&
      typeof newMessage.msg === "string" &&
      newMessage.type === "string"
    ) {
      debugger;
      if (socket?.connected) {
        const adminMsg: TMessage = {
          time,
          date,
          type: "string", // Ensure the message type is correct
          msg: "msg form ws server",
          sender: "admin",
        };
        setMessages((prevMessages) => [...prevMessages, adminMsg]);
      } else {
        const res = await Kaira(name, email, newMessage.msg);

        if (res && res.msg !== "null") {
          const adminMsg: TMessage = {
            time,
            date,
            type: "string", // Ensure the message type is correct
            ...res,
          };
          setMessages((prevMessages) => [...prevMessages, adminMsg]);
        }
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
