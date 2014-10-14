/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/
"use strict";
const
  zmq = require('zmq'),
  
  filename = process.argv[2],
  
  // create request endpoint
  requester = zmq.socket('req');

let b=1;

// handle replies from responder
requester.on("message", function(data) {
  let response = JSON.parse(data);
  console.log("Received response:" + b + "", response);
  b++;
});

requester.connect("tcp://localhost:5433");

// send request for content
for (let i=1; i<= 1000000; i++) {
  console.log('Sending request ' + i + ' for ' + filename);
  requester.send(JSON.stringify({
    path: filename
  }));
}

