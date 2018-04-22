var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');
var app = express(),
    IndexContent = require('./models/indexContent');
    addAdminRoutes = require('./app/adminRoutes');
    BlogPost = require('./models/blogPost');

mongoose.connect("mongodb://localhost/sdb", {useMongoClient: true});

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
    IndexContent.find({}, function(err, indexContentList){
        if(err){
            console.log("error");
        }else{
            console.log(indexContentList);
            //res.render('index');
            res.render('index', {indexContent:indexContentList[0] });
        }
    });
});


app.get('/blog', function(req, res){
    BlogPost.find({}, function(err, blogPosts){
        if(err){
            console.log("error");
        }else{
            res.render('blog', {blogPosts: blogPosts});
        }
    });
});

app.listen( "3000", function(){
    console.log("start3");
})