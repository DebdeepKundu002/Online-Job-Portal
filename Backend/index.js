// const express = require('express') //old process
//1
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();
//4
//create api
// app.get("/home", (req,res) => {
//     return res.status(200).json({
//         message: "Welcome to the page",
//         success : "true"
//     })
// });
//Middleware(requirement)
//3
app.use(express.json()); //body-parser
app.use(express.urlencoded({extended:true})); //body-parser
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',  //allow requests from this origin
    credentials:true //allow cookies
}

app.use(cors(corsOptions));
//2
const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})