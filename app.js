const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');



const templatePath = path.join(__dirname,"serve");

app.set("view engine","hbs");
app.set("views",templatePath);
// app.use(express.static(path.join(__dirname,"css")));
app.use(express.static(templatePath));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMessage:"Oops, Page not found"
    });
});
app.listen(port , ()=>{
    console.log("Listening at port ${port}");
});

