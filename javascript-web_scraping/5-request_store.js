#!/usr/bin/node
/* Script that writes a string to a file. */
const request = require('request');
const fs = require('fs');
const url = process.argv[2];

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
