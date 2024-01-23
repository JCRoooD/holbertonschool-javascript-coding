#!/usr/bin/node
/* Script that display the name of a Star Wars movie
where the episode number matches a given integer. */

const request = require('request');
const peliculaID = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${peliculaID}/`;

request(url, (err, response, body) => {
  if (err) {
    console.err('Error fetching SWAPI:', err);
    return;
  }

  const data = JSON.parse(body);
  console.log(data.title);
});
