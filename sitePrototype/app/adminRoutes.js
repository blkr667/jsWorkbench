var passport = require('passport'),
	LocalStrategy = require('passport-local'),
	User = require('../models/user'),
	IndexContent = require('../models/indexContent'),
	ObjectID = require('mongodb').ObjectID;

const NO_ADMIN_ACCESS_VIEW = "admin/noAdminAccess";
const ADMIN_PANEL_VIEW = "admin/panel";
const LOGIN_VIEW = "admin/login";
const REGISTER_VIEW = "admin/register";


const LOGIN_ROUTE = "/login";
const REGISTER_ROUTE = "/register";
const LOGOUT_ROUTE = "/logout";
const ADMIN_ROUTE = "/admin";

function addAdminRoutes(app) {
	app.use(passport.initialize());
	app.use(passport.session());
	passport.use(new LocalStrategy(User.authenticate()));
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());


	// ADMIN PANEL
	app.get(ADMIN_ROUTE, isLoggedIn, function(req, res){
    	User.find({}, function(err, userList){
	        if(err){
	            console.log("error");
	        }else{
				IndexContent.find({}, function(err, indexContentList){
					if(err){
						console.log("error");
					}else{
						let model = {
							users: userList, 
							loggedUsername: req.user.username, 
							indexContent: indexContentList[0]
						}
						res.render(ADMIN_PANEL_VIEW, model);
					}
				});
	        }
	    });
	});

	app.get(REGISTER_ROUTE, function(req, res){
	    res.render(REGISTER_VIEW);
	});



	app.post(REGISTER_ROUTE, function(req, res){
	    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
	        if(err){
	            console.log(err);
	            return res.render(REGISTER_VIEW);
	        }else{
	            passport.authenticate("local")(req, res, function(){
	                res.redirect(ADMIN_ROUTE);
	            });
	        }
	    })
	});

	app.post("/indexcontent", function(req, res){
		IndexContent.findOne( {}, function (err, content){
			content.title =  req.body.title;
			content.heading =  req.body.heading;
			content.message =  req.body.message;
			content.save();
		  });
		res.redirect('/');
	});


	

	app.get(LOGIN_ROUTE, function(req, res){
	    res.render(LOGIN_VIEW);
	});

	app.post(LOGIN_ROUTE, passport.authenticate('local', {
	    successRedirect: ADMIN_ROUTE,
	    failureRedirect: LOGIN_ROUTE
	}), function(req, res){
	  
	});

	app.get(LOGOUT_ROUTE, function(req, res){
	    req.logout();
	    res.redirect('/');
	});

	function isLoggedIn(req, res, next){
	    if(req.isAuthenticated()){
	        return next();
	    }
	    res.redirect(LOGIN_ROUTE);
	}
}

module.exports = addAdminRoutes;