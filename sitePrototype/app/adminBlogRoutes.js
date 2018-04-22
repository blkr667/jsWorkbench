var passport = require('passport'),
	LocalStrategy = require('passport-local'),
	BlogPost = require('../models/blogPost'),
	ObjectID = require('mongodb').ObjectID;



const ADMIN_BLOG_ROUTE = "/admin/blog";
const ADMIN_BLOG_NEW_POST_ROUTE = "/admin/blog/new";
const ADMIN_BLOG_EDIT_POST_ROUTE = "/admin/blog/edit/:postId";
const ADMIN_BLOG_DELETE_POST_ROUTE = "/admin/blog/delete/:postId";

const ADMIN_BLOG_VIEW = "admin/blog-posts";
const ADMIN_BLOG_NEW_POST_VIEW = "admin/blog-post-new";
const ADMIN_BLOG_EDIT_POST_VIEW = "admin/blog-post-edit";

function addAdminBlogRoutes(app) {

	// RENDER BLOG POSTS
	app.get(ADMIN_BLOG_ROUTE, function(req, res){
    	BlogPost.find({}, function(err, blogPosts){
	        if(err){
	            console.log("error");
	        }else{
				res.render(ADMIN_BLOG_VIEW, {blogPosts: blogPosts});
			}
		});
	});

	// RENDER NEW BLOG POST
	app.get(ADMIN_BLOG_NEW_POST_ROUTE, function(req, res){
    	res.render(ADMIN_BLOG_NEW_POST_VIEW);
	});

	// RENDER EDIT BLOG POST 
	app.get(ADMIN_BLOG_EDIT_POST_ROUTE, function(req, res){
		const postId = req.params.postId;
		BlogPost.findOne( {_id: postId}, function (err, foundBlogPost){
			res.render(ADMIN_BLOG_EDIT_POST_VIEW, {blogPost: foundBlogPost, blogPostId: postId});
		});
    	
	});

	// ADD NEW BLOG POST
	app.post(ADMIN_BLOG_NEW_POST_ROUTE, function(req, res){
		let newBlogPost = new BlogPost({
			title: req.body.title,
			content: req.body.content,
			author: req.body.author});
			newBlogPost.save(function(err, user){
	        if(err){
	            console.log(err);
	        }else{
	            res.redirect(ADMIN_BLOG_ROUTE);
	        }
	    })
	});

	// MODIFY BLOG POST
	app.post(ADMIN_BLOG_EDIT_POST_ROUTE, function(req, res){
		BlogPost.findOne( {_id: req.params.postId}, function (err, foundBlogPost){
			foundBlogPost.title =  req.body.title;
			foundBlogPost.content =  req.body.content;
			foundBlogPost.author =  req.body.author;
			foundBlogPost.save();
			if(err){
	            console.log(err);
	        }else{
	            res.redirect(ADMIN_BLOG_ROUTE);
	        }
		  });
	});

	// DELETE BLOG POST
	app.get(ADMIN_BLOG_DELETE_POST_ROUTE, function(req, res){
		BlogPost.findOne( {_id: req.params.postId}, function (err, foundBlogPost){
			foundBlogPost.remove();
			if(err){
	            console.log(err);
	        }else{
	            res.redirect(ADMIN_BLOG_ROUTE);
	        }
		  });
	});


}

module.exports = addAdminBlogRoutes;