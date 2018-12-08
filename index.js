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





// var express = require("express");
// var app = express();

// app.get("/",function(req, res){
//     res.send("<h1>Hello world</h1>");
// });

// app.get("/google", function(req, res){
//     var n = req.params.google;
//     res.redirect("http://google.com")
// });

// app.get("/google/:search", function(req,res){
//     var n = req.params.search;
//     res.redirect("http://google.com/search?q=" + n);
// });

// app.get("/*", function(req,res){
//     res.redirect(404, "404: Page not found")
// });

// app.get("/:name/:surname", function(req, res){
//     var name = req.params.name
//     var surname = req.params.surname
//     res.send("<h1>Hello " + name + " " + surname + " </h1>");

// });
// app.listen(3000, function(){
//     console.log("Example is running on port 3000");
// });





// var express = require("express");
// var app = express();

// app.use(express.static("public"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main(){
//     console.log(mySquareObject.getArea());
// }
// main();





// var fs = require('fs');

// function main(){
//     fs.writeFile("hello.txt", "Hello world\n", function(err){
//         console.log("fs.writerFile ended");
//     });
//     console.log("fs.writeFile");
// }
// main();



// var fs = require('fs');

// function main(){
//     fs.writeFileSync("hello.txt", "Hello world\n");
//     console.log("fs.writeFile");
// }
// main();



var fs = require('fs');
var dummyText = "apple yep";

function main(){
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText == text);
    console.log(text);
    fs.writeFileSync("undummytext.txt",
        text.replace("Apple", "Microsoft")    
    );
}
main();




