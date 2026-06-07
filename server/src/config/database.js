import mongoose from "mongoose";

export async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.info("MONGODB_URI is not set. Contact API is running in preview mode.");
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    console.info("Connected to MongoDB.");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    return false;
  }
}

