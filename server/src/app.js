import express from 'express';
import { userRouter } from './routes/userRoutes.js';
import { adminRoutes } from './routes/adminRoutes.js';
const app=express();
app.use(express.json({limit:"16kb"}));
app.use("api/v1/user",userRouter);
app.use("api/v1/admin",adminRoutes);
export {app}