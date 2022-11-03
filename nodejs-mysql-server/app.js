require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');

const userRouter = require("./api/routers/user.router");
const resourceRouter = require("./api/routers/resources.router");
const occupancyRouter = require("./api/routers/occupancy.router");

app.use(express.json());
app.use(cors());

app.use("/api/user",userRouter);
app.use("/api/resources",resourceRouter);
app.use("/api/occupancy",occupancyRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server is running on:", process.env.APP_PORT);
} )  
// app.use("/api", (req,res) => {
//     res.send({message:"API is Working"})
// })

module.exports = app; 