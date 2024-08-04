// const express =require('express');
// const app=express();
// const userModel= require('./usermodel');
// app.get('/',(req,res)=>{
//     res.send('hey');
// })

// app.get('/create', async (req,res)=>
// {
//     const user = await userModel.create({
//         name: "Zakriya",
//         email: "zakriyamalik@gmail.com",
//         username: "zakriya"
//     })
//     res.send(user);
// })
// app.get('/update', async (req,res)=>
//     {
//         let updatedUser= await userModel.findOneAndUpdate({username:"zakriya"},{name:"zakriya malik"},{new:true})
//         res.send(updatedUser);
//     })
// app.get('/read', async (req,res)=>
//     {
//         let Users= await userModel.find({username:"zakriya"})
//         res.send(Users);
//     })

//     app.get('/delete', async (req,res)=>
//         {
//             let Users= await userModel.findOneAndDelete({username:"zakriya"})
//             res.send(Users);
//         })
    

// app.listen(3000);



const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render("index");
})



app.post('/create', async (req,res)=>
    {
        let {name,email,image}=req.body
     let createdUser=  await userModel.create({
            name,
            email,
            image
       })
       res.redirect("/read")
    })
    app.get('/read', async (req,res)=>
        {
            let users= await userModel.find();
            res.render("read",{users});
        })
    app.get('/edit/:userid', async (req,res)=>
        {
            let users= await userModel.findOne({_id: req.params.userid});
            res.render("edit",{users});
        })
    app.post('/update/:userid', async (req,res)=>
        {
            let {name,email,image}=req.body
            let users= await userModel.findOneAndUpdate({_id: req.params.userid},{image,name,email},{new:true});
            res.redirect("/read");
        })

        app.get('/delete/:id', async (req,res)=>
            {
                let users= await userModel.findOneAndDelete({_id: req.params.id});
                res.redirect("/read");
            })
    
app.listen(3000);