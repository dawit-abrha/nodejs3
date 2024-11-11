const express = require("express");
require("./config/db")
const route = require("./config/routes")
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(route);







app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})