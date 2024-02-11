import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
  console.log("connected to DB")
}).catch((err)=>{
  console.log(err)
})
const app = express();

app.listen(3000, () => {
  console.log("Server  is At Running at port 3000");
});

app.get("/", (req, res) => {});