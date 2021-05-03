import express from "express";
import path from "path";

require("dotenv").config();

const app = express();

console.log(process.env.CLIENT_PATH);
const CLIENT_PATH = process.env.CLIENT_PATH ?? "../client/build";

app.use(express.static(path.resolve(__dirname, CLIENT_PATH))); // ../../client/build

app.use("/gallery", express.static("gallery"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, CLIENT_PATH, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running now at https://localhost:${PORT}`
  );
});
