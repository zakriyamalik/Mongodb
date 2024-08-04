//Cookie setting 

// const cookieParser=require('cookie-parser');
// const express=require('express');
// const app=express();
// const bcrypt=require('bcrypt');
// app.use(cookieParser());

// app.get("/",function(req,res){
//     bcrypt.compare("popopopopo", "$2b$10$qXH6dJemwHmMXoJ.FvAuweKQhjhOxTMp6oxDTDLxjpsyPYgsrZe6C", function(err, result) {
//        console.log(result)
//     });
//     // res.cookie("name","harsh");
//     // res.send("done");
// })


// app.get("/read",function(req,res){
//    console.log(req.cookies);

//     res.send("read page");
// })


// app.listen(3000);

//Authorization

// const express=require('express');
// const app=express();
// const bcrypt =require('bcrypt');
// const jwt= require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// app.get("/",function (req,res){
//     let token =jwt.sign({email:"harsh@example.com"},"secret");
//     res.cookie("token",token);
//     res.send("done");
//     console.log(token);
// })
// app.get("/read",function(req,res){
//     let data=jwt.verify(req.cookies.token,"secret");
//     console.log(data);
// })
// app.listen(3000);