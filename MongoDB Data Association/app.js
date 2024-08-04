const express=require('express');
const app=express();
const userModel = require("./models/user");
const postModel=require("./models/user");




app.get("/", function (req,res){
    res.send("Hello World!");
})

app.get("/create", async function (req,res){
    let user= await userModel.create({
        username:"John Doe",
        age:"10",
        email:"johndoe@example.com",
        password:"password123"
    })
    res.send(user);
})

app.get("/post/create", async function (req,res){
   let post=await postModel.create
    ({
        postData: "Hello hi",
        user:"66ae1f19d1f98147b57ff49d"
    })
        let user= await userModel.findOne
        ({
            _id:"66ae1f19d1f98147b57ff49d"
        });
        user.posts.push(post._id);
        await user.save();
        res.send({post,user});
})

app.listen(3000);