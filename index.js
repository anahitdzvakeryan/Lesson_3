// console.log("Hello Node");
// var os = require("os");
// var message = "The platform is ";

// function main() {
//     console.log(message + os.platform());
// }
// main();



// var express = require ("express");
// var app = express();
// app.get("/", function(req, res){
//     res.send("Hello world");
// });

// app.listen(3000, function(){
//     console.log("Example is runniing on port 3000");
// });


var express = require("express");
var app = express();

// app.get("/",function(req, res){
//     res.send("<h1>Hello world</h1>");
// });

// app.get("/:google", function(req, res){
//     var n = req.params.google;
//     res.redirect("http://google.com")
// });

// app.get("/google/:search", function(req,res){
//     var n = req.params.search;
//     res.redirect("http://google.com/search?q=" + n);
// });

app.get("/*", function(req,res){
    // var n = req.params.d;
    res.redirect("404: Page not found", 404)
});

// app.get("/:name/:surname", function(req, res){
//     var name = req.params.name
//     var surname = req.params.surname
//     res.send("<h1>Hello " + name + " " + surname + " </h1>");

// });
app.listen(3000, function(){
    console.log("Example is running on port 3000");
});

