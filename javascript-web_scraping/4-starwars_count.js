#!/usr/bin/node
/* Script that prints the number of movies where the character “Wedge Antilles” is present. */

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  let count = 0;
  const films = JSON.parse(body).results;

  films.forEach((film) => {
    film.characters.forEach(character => {
      if (character.endswith('/18/')) {
        count++;
      }
    });
  });
  console.log(count);
});
