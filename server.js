const express=require("express");
const app=express();

app.get("/", function(req,res){
res.send ('<h1>Hello World</h1>');

});

app.get("/contact",function(req,res){
  res.send("Contact me at : aks.singh774@gmail.com");
});

app.get("/about",function(req,res){
  res.send("This Local Server has been created by Abhi9 who loves tea and travelling");
});

app.get("/hobbies",function(req,res){
  res.send("Code eat sleep blunts and repeat");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
