import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
