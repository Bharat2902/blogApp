const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},
{//used for creation of time stamp of updation of data
    timestamps:true
});

module.exports = mongoose.model("Blog",blogSchema);//name of the scheme we use in the document