//first start by connecting json files. In this case it would the friends.js
//


var friends = require("../data/friends.js");



//this is the api "get" request. it get the friends data from friends json
module.exports= function(app){
    app.get ("/api/friends", function(req, res){
        res.json(friends);
    })



    //this is the api post requests 
    app.post("/api/friends", function(req,res){
        var totalDifference = 0 ;
        var bestMatch ={
            name: "",
            photo: "",
            friendScore: 1000
        };
    

        //takes results of users survey score and coverts it to an interger instead of a string.
    var userData = req.body;
     var userName= userData.name;
     var userScore = userData.scores;

     var b = userScore.map(function(item){
         return parseInt(item , 10);

     });


     userData= {
         name: req.body.name,
         photo:req.body.photo,
         scores: b
     }

     //console.log results

     console.log("Name :" + userName)
     console.log("User Score :" + userScore)


     var sum = b.reduce ((a, b) => a + b, 0);
     console.log("Sum of users score" + sum);
     console.log("Best match friend" + bestMatch.friendDifference);

     for (var i = 0; i <friends.length; i++ ){
         console.log(friends[i].name);
         totalDifference = 0;
         console.log("total difference "+ totalDifference);
         console.log("best match"+ bestMatch.friendDifference);

         var bfriendScore = friends[i].scores.reduce((a,b)=>a + b, 0);
         console.log("total friend score"+ bfriendScore);
         totalDifference += Math.abs(sum - bfriendScore);
         console.log("-------------" + totalDifference);



         if (totalDifference <= bestMatch.friendDifference){
             bestMatch.name = friends[i].name;
             bestMatch.photo = friends[i].photo;
             bestMatch.friendDifference = totalDifference;
         }
         console.log(totalDifference + "total difference");

     }
            // return a json with users best match
     console.log(bestMatch);
     friends.push(userData);
     console.log("User added");
     console.log(userData);
     res.json(bestMatch);

    });
};


