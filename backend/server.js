const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("New client connected");

  setInterval(() => {
    socket.emit("processData", {
      apps: [{ name: "Chrome", memory: "150" }],
      allProcesses: [{ name: "System", memory: "500" }],
    });
  }, 2000);

  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(8080, () => console.log("Server running on port 8080"));
