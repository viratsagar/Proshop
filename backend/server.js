import express from "express";
// import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import router from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Backend Server is Running");
});

app.use("/api/products", router);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5002;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
