import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./connection.js";
import employeeRouter from "./routes/employee.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
// read the data from the body
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/employee", employeeRouter);

// Start server after database connection
const startServer = async () => {
  await connectToMongoDB();

  app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
  });
};

startServer();
