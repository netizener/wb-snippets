var express = require("express");
     mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/auth_demo_app",{useNewUrlParser:true, useUnifiedTopology:true});

var app = express();
app.set('view engine','ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/secret',function(req,res){
    res.render("secret");
});

app.listen(process.env.PORT || 5000, function(){
    console.log("server has started");
});