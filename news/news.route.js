let router = require("express").Router();
let News= require("./news.model");

router.get("/", function(req, res, next) {
    News.findAllNews()
      .then(function(news) {
        res.send(news);
      })
      .catch(next);
  });

module.exports=router;