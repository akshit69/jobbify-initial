import express from "express";

import dotenv from "dotenv";

// db and authentication
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMidlleware from "./middleware/error-handler.js";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  // throw new Error("error");
  res.send("welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMidlleware);

const port = process.env.port || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening at port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
