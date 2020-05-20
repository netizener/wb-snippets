/*
How to use this?
> Run npm install to install the required dependencies

*/
const bodyParser = require("body-parser"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

// connect to database
const dbName = "add your database name here";
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb://localhost/${dbName}`,{useNewUrlParser:true});

app.set("view engine","ejs");
app.use(express.static("public")); //to serve static CSS, JS and other assets
app.use(bodyParser.urlencoded({extended:true}));

//Index Route
app.get("/",(req,res)=>{
    res.send("App is running!");
});

//Check whether app is running
app.listen(process.env.PORT||5000,function(){
    console.log("Server is running!");
});