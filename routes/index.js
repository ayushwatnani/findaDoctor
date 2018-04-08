var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

var query = "SELECT * FROM findadoc.categories";
client.execute(query, [], function(err,req, res, results){
    if (err){
        res.status(404).send({msg:err});
    } else {
        app.locals.cats = results;
    }
})
});
module.exports = router;
