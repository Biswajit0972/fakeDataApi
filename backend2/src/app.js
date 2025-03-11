import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./router/user.router.js";
import { noteRouter } from "./router/note.router.js";

const app = express();


const whitelist = [
  'https://backend-service-frontend.vercel.app',
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., server-to-server or Postman)
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200, // Ensures proper handling of preflight requests
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(userRouter);
app.use(noteRouter);

export { app };