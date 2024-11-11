const mongoose = require("mongoose")
const schema = mongoose.Schema


const commentSchema = new schema({
    commentOnTweet:{
       type: String,
    },
    created_at:{
        type: Date,
        default: Date.now,
        get: function(createdAt){
            return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
        }
    },
    tweet:{
        type: schema.Types.ObjectId,
                ref: "tweet"
    }
    })



    module.exports = mongoose.model("comment", commentSchema)  //exporting the model to use in other files