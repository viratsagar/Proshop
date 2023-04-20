import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo DB Connected ${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default connectDB;
