import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, type Socket } from "socket.io-client";

const SocketContext = createContext<Socket | undefined>(undefined);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  // const [isConnected, setIsConnected] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket>(() => io("ws://localhost:8080"));
  useEffect(() => {
    console.log(socket.connected);
    if (!socket) {
      setSocket(() => io("ws://localhost:8080"));
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
