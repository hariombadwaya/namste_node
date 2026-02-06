const express = require("express");
const {adminAuth,userAuth}= require("./middleware/Auth")
const app = express();

app.use("/admin", adminAuth)
app.use("/user", userAuth)

app.post("/user/login", (req, res)=>{
  res.send("User login successfully");
})

app.get("/user",(req, res)=>{
  res.send("user data sent")
})

app.get("/admin/getAllData", (req, res)=>{
  res.send("All data sent")
})

app.listen(3000,()=>{
    console.log("server is running on prot no 3000")
})