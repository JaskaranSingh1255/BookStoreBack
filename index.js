import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookrouter from "./route/book.route.js";
import userroute from "./route/user.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Routes
app.use("/book", bookrouter);
app.use("/user", userroute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
