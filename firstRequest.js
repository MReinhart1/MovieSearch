var request = require("request");
var express = require("express");
var app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    var movieName = req.query.movieName;
    var url = "http://omdbapi.com/?s=" + movieName + "&apikey=thewdb"
    console.log(movieName)
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            res.render("results", {results: results});
        }
    })
});


app.listen(process.env.PORT, process.env.ID,function(){
    console.log("hi");
})
