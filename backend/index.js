import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json()); //to use json body
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.use(cors()); //all origins

app.use("/books", bookRoutes);

app.get(`/`, (req, res) => {
  res.send("hello");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Database is connected");
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
