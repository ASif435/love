const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const loveShema = require("./Shemas")
const Loved = new mongoose.model("ok",loveShema);
const LoveTrue = new mongoose.model("yes",loveShema);

router.get("",(req,res)=>{
    res.send("hello word");
});

router.post('/result',async (req,res)=>{
    const love = new Loved(req.body);
    await love.save((err)=>{
        if(err){
            res.status(500).json({
                error:"there was a server side erorr"
            })
        }
        else{
            res.status(200).json({
                succuss:"data inster succesfully"
            })
        }
    })
});



module.exports = router;