#!/usr/bin/node
/* Script that display the status code of a GET request. */
const https = require('https');
const http = require('http');

const url = process.argv[2];
const protocol = url.slice(0, 5);

if (protocol === 'https') {
  https.get(url, (res) => {
    console.log(`code: ${res.statusCode}`);
  });
}
if (protocol === 'http:') {
  http.get(url, (res) => {
    console.log(`code: ${res.statusCode}`);
  });
}
