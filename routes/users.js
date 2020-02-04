var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken')
const config={
  secret:'iamthebest'
}
const sqlConnection=require('../config/database/db');

router.post('/login', function(req, res, next) {
  const email=req.body.email;
  const password=req.body.password;
  var sql="select * from users where email = ?";
  sqlConnection.query(sql,[email], function(err, result)
  {
    if(err)
    {
      res.send({
        code:500,
        message:"Internal error"
      })
    }
    if(result.length>0)
    {
      if(result[0].password==password)
      {
        let token = jwt.sign({email: email},
          config.secret,
          { 
            expiresIn: '1h' //expires in 24 hours
          }
        )
        res.send({
          code:200,
          message:"Successfully Loggedin",
          token:token
        })
      }
      else
      {
        res.send({
          code:302,
          message:"Wrong Password"
        })
      }
    }
    else
    {
      res.send({
        code:301,
        message:"Invalid email"
      })
    }
  })
});
module.exports = router;
