#!/usr/bin/node
/* Script that prints the number of movies where the character “Wedge Antilles” is present. */

const characterID = '18';
const url = process.argv[2];
const request = require('request');

request(url, (err, response, body) => {

  if (err) {
    console.error('Error:', err);
    return;
  }

  const data = JSON.parse(body);
  let count = 0;

  for (const film of data.results) {
    for (const character of film.characters) {
      if (character.endsWith(characterID)) {
        count++;
      }
    }
  }
  console.log(count);
});
