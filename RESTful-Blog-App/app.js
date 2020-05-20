const bodyParser = require("body-parser"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

// connect to database
const dbName = "restful_blog_app";
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb://localhost/${dbName}`,{useNewUrlParser:true});

app.set("view engine","ejs");
app.use(express.static("public")); //to serve static CSS, JS and other assets
app.use(bodyParser.urlencoded({extended:true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title : String,
    image : String,
    body : String,
    created : {type: Date, default:Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);


// Blog.create({
//     title : "Test Blog",
//     image : "https://images.unsplash.com/photo-1588614853720-5782f8bd4df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed turpis tincidunt id aliquet risus. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Luctus accumsan tortor posuere ac ut consequat semper. Sapien nec sagittis aliquam malesuada bibendum. Lacus laoreet non curabitur gravida arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Morbi tristique senectus et netus et malesuada fames ac. Fermentum dui faucibus in ornare quam viverra. Feugiat vivamus at augue eget. Eu volutpat odio facilisis mauris sit. Sit amet porttitor eget dolor morbi non arcu risus. Aliquam ut porttitor leo a. In vitae turpis massa sed elementum. Morbi enim nunc faucibus a pellentesque."
// });

/* ROUTES OF THE APPLICATION */

//Index Route
app.get("/",(req,res)=>{
    res.redirect("/blogs");
});

app.get("/blogs",(req,res)=>{
    Blog.find({},(err,blogs)=>{
        if(err){
            console.log("error");
        } else {
            res.render("index",{blogs:blogs});
        }
    });    
});

//Check whether app is running
app.listen(process.env.PORT||5000,function(){
    console.log("Server is running!");
});