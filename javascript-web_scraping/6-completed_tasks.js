#!/usr/bin/node
/* Script that computes the number of tasks completed by user id. */
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const todos = JSON.parse(body);
  const completed = {};

  todos.forEach(todo => {
    if (todo.completed) {
      if (completed[todo.userId]) {
        completed[todo.userId]++;
      } else {
        completed[todo.userId] = 1;
      }
    }
  });
  console.log(completed);
});
