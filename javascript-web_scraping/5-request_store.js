#!/usr/bin/node
/* Script that writes a string to a file. */
request = require('request');
fs = require('fs');
url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  fs.writeFile(process.argv[3], body, 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
