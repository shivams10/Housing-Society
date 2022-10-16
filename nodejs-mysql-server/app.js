require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/user/user.router");
const resourceRouter = require("./api/user/resources.router");
const occupancyRouter = require("./api/user/occupancy.router");
app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/resources",resourceRouter);
app.use("/api/occupancy",occupancyRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server is running on:", process.env.APP_PORT);
} )  