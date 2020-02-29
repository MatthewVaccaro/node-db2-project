const express = require("express");
const router = require("./subRoute");

const server = express();
const port = 4000;

server.use(express.json());

server.use("/api/", router);

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

//Sanity Check
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});
