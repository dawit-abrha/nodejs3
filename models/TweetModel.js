const mongoose = require("mongoose");
const schema = mongoose.Schema


let moment = require("moment")


tweetSchema = new schema({
    text:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: function(createdAt){
            return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
            }
            },
            comment :[{
                type: schema.Types.ObjectId,
                ref: "comment"
            }]

            
        });
     

        module.exports = mongoose.model("tweet", tweetSchema);  //export the model