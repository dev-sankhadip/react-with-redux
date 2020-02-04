var express = require('express');
var router = express.Router();
var dbConnection=require('../config/database/db');



router.get('/', function(req, res, next) {
  var sql="select * from users";
  dbConnection.query(sql, function(err, result)
  {
    if(err)
    {
      res.send({
        code:500,
        message:'Internal error'
      })
    }
    res.send({
      code:200,
      result:result
    })
  })
});


module.exports = router;
