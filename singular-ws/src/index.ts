import express, { type Request, type Response, type Express } from "express";
import { createServer, type Server as HttpServer } from "http";
import { DisconnectReason, Server, type Socket } from "socket.io";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();

const { PORT, HOSTNAME } = process.env;

const app: Express = express();
app.use(cors());
const httpServer: HttpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket: Socket) => {
  console.log("Connected to", socket.id);
  socket.on("msg", (data: { sender: "user" | "admin"; msg: string }) => {
    socket.emit(data.msg);
  });
  socket.on("disconnect", (reason: DisconnectReason) => {
    console.log(`disconnected ${socket.id},reason ->`, reason);
  });
});
app.get("/", (_: Request, res: Response) => {
  res.send("ok from localhost:8080").status(200);
});
httpServer.listen(Number(PORT) || 8080, String(HOSTNAME) ?? "localhost", () => {
  console.log(`Listening on ${HOSTNAME}:${PORT}`);
});
