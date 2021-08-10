const express = require("express");

const app = express();


app.use(function(request, response, next){

    console.log("Middleware 1");
    next();
});
app.use("/about", function(request, response, next){

    console.log("About Middleware");
    response.send("About Middleware");
});

app.use("/", function(request, response){
    console.log("Route /");
    response.send("<h1>Hello</h1>");
});
app.listen(3000);
