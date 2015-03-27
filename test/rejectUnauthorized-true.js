var https = require('https'),
    sslRootCAs = require('../ssl-root-cas');

function test() {
  var options = {
    hostname: 'owncloud.michielbdejong.com',
    port: 443,
    method: 'GET',
    path: '/',
    rejectUnauthorized: true,
    headers: { }
  };
  
  console.log('sending request', options);
  var req = https.request(options, function(res) {
    res.on('data', function(chunk) {
      console.log('got chunk');
    });

    res.on('error', function(err) {
      console.log('got error', err);
    });

    res.on('end', function() {
      console.log('got end');
    });
  });
  req.end();
}

sslRootCAs.inject().addFile('./ca.pem');

test();
