const mongoose = require("mongoose");
const loveShema = new mongoose.Schema({
    title:{
        type:String,
    }
})


module.exports = loveShema;