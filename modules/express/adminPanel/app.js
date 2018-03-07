var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var users =[
	{name:"Yosemite", userName: "unegunda"}, 
	{name:"Zions Park", userName:"dudas666"}, 
	{name:"Yellowstone", userName:"ulcia prymulcia"}
];

//app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("users", {users:users});
});

app.get("/login", function(req, res){
    res.render("login.ejs");
});

app.get("/users", function(req, res){
    res.render("users", {users:users});
});

app.post("/adduser", function(req, res){
  users.push( 
    {
      name: req.body.name, 
      userName: req.body.userName
  });
  res.redirect("users");
});

app.listen( "3000", function(){
    console.log("start3");
    console.log(process.env.PORT);
    console.log(process.env.IP);
})