const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://wediabrhana:yesno1212@cluster4.9cf8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB", err));
