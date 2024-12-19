import express, { type Express } from "express";
import { Server, type Socket } from "socket.io";
import { createServer } from "http";
import { configDotenv } from "dotenv";
configDotenv();
const { PORT, HOSTNAME } = process.env;
const app: Express = express();
const server = createServer(app);
const io = new Server(server);

io.on("connect", (socket: Socket) => {
  console.log("connected id:", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("msg", (data) => {
    console.log("msg:", data);
    socket.emit("msg", String(data).split("").reverse().join(""));
  });
});

server.listen(Number(PORT), String(HOSTNAME), () => {
  console.log(`running on ${HOSTNAME}:${PORT}`);
});
