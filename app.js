require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const Port = 3000;
const app = express();

//Body parser used getting data from frontend to backend it comes in 2 ways 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.Promise = global.Promise;

//Promise based function using .then and catch 
mongoose.connect(process.env.MongoURL,{useNewUrlParser:true}).then(()=>{
    console.log("Db is connected");
}).catch((err)=>{
    console.log(err);
    process.exit();
});



app.get("/", (req,res)=>{
    res.send("welcome to th class");
});

require("./routes/routes")(app);



app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`Port is live at ${Port}`)
});
