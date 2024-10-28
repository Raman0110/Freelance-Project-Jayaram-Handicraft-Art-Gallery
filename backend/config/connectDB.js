import mongoose from "mongoose";

const DB_URL = process.env.DBURL;
const connectDB = async () => {
  try {
    const res = await mongoose.connect(DB_URL);
    if (!res) console.log("Database Connection Failed");
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB