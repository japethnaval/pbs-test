import express from "express";
import referralRouter from './routes/referrals';
import cors from 'cors'

export const initServer = () => {
  const app = express()

  app.use(cors()); // Enable CORS for all routes

  app.use(express.json()) // Parse the req.body

  // /api/referrals
  app.use("/api/referrals", referralRouter)

  return app;
}