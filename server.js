import express from "express";
import userRoute from "./Router/userRoute.js";
import connectDb from "./dbConnection.js";
const app = express();
app.use(express.json());
connectDb();
app.use("/api/users", userRoute);

app.listen(8080, console.log("server is running on port 8000"));
