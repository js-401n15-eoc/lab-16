'use strict';

const events = require('./events.js');
const fs = require('fs');
const file = `${__dirname}/files/chicken-scratch.txt`;

function alterFile(input) {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = (data + input).toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved successfully!`);
    });
  });
};

events.on('save', alterFile);