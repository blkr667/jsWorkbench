var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require('mongoose');;

const options = {
  useMongoClient: true
};

//app.use(express.static('public'));
mongoose.connect("mongodb://localhost/site_prototype", options);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//SCHEMA SETUP
var userSchema = new mongoose.Schema({
    displayName:String,
    userName: String
});

var Users = mongoose.model("Users", userSchema);

app.get("/", function(req, res){
    Users.find({}, function(err, userList){
        if(err){
            console.log("error");
        }else{
            console.log(userList);
            res.render("index.ejs", {users:userList});
        }
    });
    
});

app.get("/login", function(req, res){
    res.render("login.ejs");
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
    console.log(userId);
    Users.findById(userId, function(err, specifiedUser){
        if(err){
            console.log(err);
        }else{
          console.log(specifiedUser);
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
            res.redirect("users");
        }
    });
});

app.delete("/removeuser", function(req, res){
  console.log("removeuser");
  console.log(req.body);
  res.redirect("users");
});

app.listen( "3000", function(){
    console.log("start3");
    console.log(process.env.PORT);
    console.log(process.env.IP);
})