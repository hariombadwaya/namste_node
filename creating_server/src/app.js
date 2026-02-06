const express = require("express");

const app = express();

// app.get("/contact", (req, res)=>{
//     res.send("this is contact page")
// })
// info = {
//     naam : " hariom",
//     age : 23
// }
// app.post("/post", (req,res)=>{
//     res.send(info)
// })
// app.get("/get",(req,res)=>{
//     res.send(info)
// })

// app.use("/hello",(req, res)=>{
//     res.send("Hello hello hello !");
// })
// // app.use("/post",(req,res)=>{
// //     res.send("this is post api response")
// // })

// app.use("/test",(req, res)=>{
//     res.send("Hello from the server !");
// })

// // dynamic routing 
// app.get("/user/:userId/:userName/", (req,res)=>{
//     console.log(req.params);
//     res.send({Name: "Hariom"});
// })

// app.get("/user", (req,res)=>{
//     console.log(req.query);
   
// })

app.use("/user",(req,res,next)=>{
    console.log("1st route handler");
  //  res.send("1st response")
  next()
},
(req, res)=>{
  console.log("2nd route handler")
  res.send("2nd response");
})

app.use("/",(req, res)=>{
    res.send("this is a home page")
})





app.listen(3000,()=>{
    console.log("server is running on prot no 3000")
})