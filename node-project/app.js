var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 8080;
const HOST = '0.0.0.0';

let acessos = 0

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/sharks",function(req,res){
  res.sendFile(path + "sharks.html");
});

router.get("/health",function(req,res){
  if (++acessos > 5) {
    res.status(500).send({ error: "failed"})
  } else{
    res.status(200).send({ health: "ok"})
  }
});

app.use(express.static(path));
app.use("/", router);

setTimeout(() => {

  app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
  })

}, 15000);
