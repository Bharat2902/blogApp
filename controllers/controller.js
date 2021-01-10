const { createIndexes, findById } = require("../model/model");
const Blog = require("../model/model");

//Find all blogs present in the database
exports.getall= async(req,res)=>{

    // Blog.find().then((data)=>{
    //     res.status(200).json(data);
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err);
    // });
    let data;
    try{
        data = await Blog.find();
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    res.status(200).json(data);
}

//add data in the database
exports.create= async(req,res)=>{
    const newBlog = new Blog({
        title:req.body.title,
        author: req.body.author,
        desc: req.body.desc
    });

    // newBlog.save().then((blog)=>{
    //     res.status(201).json({
    //         "msg":"created",
    //         "blog":blog
    //     });
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err);
    // })

    let blog;
    try{
        blog = await newBlog.save();
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    res.status(201).json({
        "msg": "created",
        "blog": blog
    });
}

//find single block
exports.getOne = async(req,res)=>{
    // Blog.findById(req.params.blogID).then((data)=>{
    //     if(!data) return res.status(404).json({"msg": "Blog not found"});

    //     res.status(200).json(data);
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err);
    // });
    let data;
    try{
        data = await Blog.findById(req.params.blogID);
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg": "Blog not found"});
    
    else return res.status(200).json(data);
    
}
//find on th basis of title
exports.getTitle = async(req,res)=>{
    // Blog.find({title:req.params.blogTitle}).then((data)=>{
    //     if(!data) return res.status(404).json({"msg": "Blog not found"});

    //     res.status(200).json(data);
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err); 
    // })
    let data;
    try{
        data = await Blog.find({title:req.params.blogTilte});
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg": "Blog not found"});
    
    else return res.status(200).json(data);
}
//find on th basis of author
exports.getAuthor = async(req,res)=>{
    // Blog.find({author:req.params.blogAuthor}).then((data)=>{
    //     if(!data) return res.status(404).json({"msg": "Blog not found"});

    //     res.status(200).json(data);
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err); 
    // })
    
    let data;
    try{
        data = await Blog.find({author:req.params.blogAuthor});
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg": "Blog not found"});
    
    else return res.status(200).json(data);
}
//find on th basis of desc
exports.getDesc = async(req,res)=>{
    // Blog.find({desc:req.params.blogDesc}).then((data)=>{
    //     if(!data) return res.status(404).json({"msg": "Blog not found"});

    //     res.status(200).json(data);
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err); 
    // })
    
    let data;
    try{
        data = await Blog.find({desc:req.params.blogDesc});
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg": "Blog not found"});
    
    else return res.status(200).json(data);
}
//to update record
exports.updateRecord = async(req,res)=>{
    if(!req.body.title||!req.body.desc||!req.body.author)
        return res.status(500).json({"msg": "Fill all fields"});
    // Blog.findByIdAndUpdate(req.params.blogID,{
    //     title: req.body.title,
    //     author: req.body.author,
    //     desc: req.body.desc
    // },{new:true}).then((data)=>{
    //     if(!data) return res.status(404).json({"msg": "Blog not found"});

    //     res.status(202).json({
    //         "msg": "updated", 
    //         "doc":data});
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err);
    // });
    let data;
    try{
        data = await Blog.findByIdAndUpdate(req.params.blogID,{
            title: req.body.title,
            author: req.body.author,
            desc: req.body.desc
        },{new:true});
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg": "Blog not found"});
    else{
        return res.status(202).json({
            "msg": "updated", 
            "doc":data});
    }
}

//Function to delete record
exports.deleteRecord = async(req,res)=>{
    // Blog.findByIdAndDelete(req.params.blogID).then(data=>{
    //     if(!data) return res.status(404).json({"msg": "Record not found"});

    //     res.status(202).json({
    //         "msg": "Deleted",
    //         "doc": data
    //     })
    // }).catch(err=>{
    //     if(err) return res.status(500).json(err);
    // })
    let data;
    try{
        data = await Blog.findByIdAndDelete(req.params.blogID);
    } catch(err){
        if(err) return res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg": "Record not found"});

    else{
        return res.status(202).json({
            "msg": "Deleted",
            "doc": data
        })
    }
}