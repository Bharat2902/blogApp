module.exports=(app)=>{
    const blog = require("../controllers/controller.js");
    //to get data
    app.get("/api/blog", blog.getall);
    app.get("/api/blog/:blogID", blog.getOne);
    app.get("/api/blogTitle/:blogTitle", blog.getTitle);
    app.get("/api/blogAuthor/:blogAuthor", blog.getAuthor);
    app.get("/api/blogDesc/:blogDesc", blog.getDesc);
    //to create data
    app.post("/api/create", blog.create);

    //to update by id
    app.put("/api/update/:blogID", blog.updateRecord);

    //to delete record by id
    app.delete("/api/delete/:blogID", blog.deleteRecord);
 
}