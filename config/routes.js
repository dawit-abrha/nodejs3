const express = require('express');
const route = express.Router()
const userController = require('../controller/userController')



route.get("/", userController.getHomePage);
route.post("/create-tweet", userController.createTweet);
route.get("/delete-tweet/:id", userController.deleteTweet);
route.post("/addcomment/:postId", userController.addComment);
route.get("/delete-comment/:commentId", userController.deleteComment);





module.exports = route