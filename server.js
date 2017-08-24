var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var request = require("request");
var logger = require("morgan");

var Article = require("./models/Article.js");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful!");
});


app.get('/api/saved', function(req, res) {

  Article.find({}, function(error, doc) {
    
    if (error) {
      console.log(error);
    }
    
    else {
      res.json(doc);
    }
  });

});

app.post('/api/saved', function(req, res){

  var newArticle = new Article({
    title: req.body.title,    
    url: req.body.url,
    date: req.body.date
  });

  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } 
    else {
      res.json(doc);
    }
  });

});

app.delete('/api/saved/:id', function(req, res){

   Article.find({'_id': req.params.id}).remove().exec(function(err, doc) {
      res.send(doc);
  });

});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})


app.listen(3000, function() {
  console.log("App listening on PORT: " + 3000);
});