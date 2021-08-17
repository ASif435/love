const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const love = require("./love");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


const url = "mongodb+srv://love:love1234@cluster0.rssjs.mongodb.net/love?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser: true ,useUnifiedTopology: true 
})
.then(result=>{
    console.log("database connected")
})











app.use("/",love)







app.listen(5000,()=>{
    console.log("server runnig...")
})