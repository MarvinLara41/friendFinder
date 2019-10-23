//basic template for setting up a server using express    



var express = require("express");
var path = require("path");
var app = express();
var bodyParser=require("body-parser");


var port = process.env.PORT || 3765;
app.listen(port, ()=> console.log("Listening on port", port));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.use(express.static("app/public"));




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });




