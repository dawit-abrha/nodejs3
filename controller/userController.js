const CommentModel= require('../models/CommentModel')
const TweetModel = require('../models/TweetModel')


const getHomePage = (req, res) =>{
   TweetModel.find()
   .sort({createdAt: -1})
    .populate("comment", "_id commentOnTweet")
   .then((result) => {
    console.log(result)
    res.render('home', {tweets: result})
    })
    .catch()
}
const createTweet = (req, res) => {
    let newTweet = new TweetModel(req.body)
    newTweet.save()
    .then((result) => {
        res.redirect('/')
        })
        .catch((err) => {
            res.status(400).send(err)
            })
}
const deleteTweet = (req, res) => {
    TweetModel.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.redirect('/')
        })
        .catch((err) => {
            res.status(400).send(err)
            })
}
const addComment = (req, res) => {
    let postId = req.params.postId
    if( req.body.commentOnTweet !== "" && postId ){
        let commentBody = {
            ...req.body,
            postId: postId
        }
    let newComment = new CommentModel(commentBody)
    newComment.save()
    .then((result) => {
        TweetModel.findById(postId)
        .then((tweet) => {
            tweet.comment.push(newComment)
            tweet.save()
            .then((result) => {
                res.redirect('/')
                })
                .catch((err) => {
                    res.status(400).send(err)
                    })
                    })
        })
        .catch((err) => {
            res.status(400).send(err)
            })

    }
 }

deleteComment = (req, res) => {
    let commentId = req.params.commentId
    CommentModel.findByIdAndDelete(commentId)
    .then((result) => {
        res.redirect('/')
        })
        .catch((err) => {
            res.status(400).send(err)
            })
            }
    
            






module.exports = {
    getHomePage,
    createTweet,
    deleteTweet,
    addComment,
    deleteComment
    
}


