import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://abc21:D7qralS1qXrbWiKi@dev.fqxzcyp.mongodb.net/smart11?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function dbConnect() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Using existing MongoDB connection");
      return;
    }

    mongoose.set("strictQuery", true);

    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

export default dbConnect;
