const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.get("/register", (req,res)=>{

    res.render("auth/signup")


})


// router.get("/fakeUser",async(req,res)=>{

//     const user = new User({username: "fakeUser", email: "abcd@gmail.com"});

//      const newUser = await User.register(user , "12345");

//     res.send(newUser);

// })


router.post("/register",async(req,res)=>{

    const {username,password,email}= req.body;

        const user = new User({username, email})

      const newUser = await User.register(user , password);

      req.flash("success", " you have registered sucessfully")

    res.redirect("/login")

})


router.get("/login",(req,res)=>{

    res.render("auth/login")

})

router.post("/login", (req,res)=>{


    




})




module.exports=router;