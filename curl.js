const request = require('request');
//must run npm install request
//it's a node package manager

module.exports = (url, done) => {
  request(url, (err, response, body) => {
    if (err){
      done(err.stack);
    } else {
      done(body);
    }
  })
}

