//created a routing path that applies to the buttons on survey.html




var path = require("path");

module.exports= function(app){
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname+ "/../public/survey.html"));
    });

//this is the default path because thanks to the .use
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}