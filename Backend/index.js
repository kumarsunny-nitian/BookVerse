import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // ✅ must be before using process.env

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// ✅ connect to MongoDB (with async handling)
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // ✅ essential for stable connection
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// ✅ Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// ✅ Base route check (optional but safe)
app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server is listening on port ${port}`);
});
