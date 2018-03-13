var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');
var app = express(),
    addAdminRoutes = require('./app/adminRoutes');

mongoose.connect("mongodb://localhost/sss", {useMongoClient: true});

app.use(require('express-session')({
    secret: "Crystal is something",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));



addAdminRoutes(app);



// =========
// ROUTES
// =========

app.get('/', function(req, res){
    res.render('index');
});


















//SCHEMA SETUP
/*
var userSchema = new mongoose.Schema({
    displayName:String,
    userName: String
});

var Users = mongoose.model("Users", userSchema);

app.get("/x", function(req, res){
    Users.find({}, function(err, userList){
        if(err){
            console.log("error");
        }else{
            res.render("index.ejs", {users:userList});
        }
    });
    
});

app.get("/users", function(req, res){
    Users.find({}, function(err, userList){
        if(err){
            console.log("error");
        }else{
            res.render("users", {users:userList});
        }
    });
});

app.get("/users/new", function(req, res){
  res.render("add-user");
}); 

app.get("/users/:userId", function(req, res){
    var userId = req.params.userId;
    Users.findById(userId, function(err, specifiedUser){
        if(err){
            console.log(err);
        }else{
            res.render("edit-user", {user:specifiedUser});
        }
    });
});   

   

app.post("/adduser", function(req, res){

  var newUser = {
      displayName: req.body.displayName, 
      userName: req.body.userName
  };

  Users.create(newUser, function(err, addedUser){
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
});

app.delete("/users/:userId", function(req, res){
    var userId = req.params.userId;
    Users.findByIdAndRemove(userId, function(err, deletedUser){
        if(err){
          console.log("err");
        }else{
            res.redirect("/");        
          }
    });
});
*/
app.listen( "3000", function(){
    console.log("start3");
    //console.log(process.env.PORT);
    //console.log(process.env.IP);
})