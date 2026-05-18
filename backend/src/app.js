import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import certificateRoutes from "./routes/certificateRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.use("/api/certificates", certificateRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {

    console.log("MongoDB Connected Successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log(err);
  });
