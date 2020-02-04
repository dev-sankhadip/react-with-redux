const jwt=require('jsonwebtoken');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  
    if (token) {
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }

      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            console.log('not valid')
          return res.json({
            success: false,
            code:'304',
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          userEmail=req.decoded.email;
          next();
        }
      });
    } else {
        console.log('not supplied');
      return res.json({
        success: false,
        message: 'Auth token is not supplied',
        code:'305'
      });
    }
  };

  module.exports={
      checkToken:checkToken
  }