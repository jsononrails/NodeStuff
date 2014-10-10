'use strict';
const
  fs = require('fs'),
  zmq = require('zmq'),

  // create publisher endpoint
  publisher = zmq.socket('pub'),

  filename = process.argv[2];

fs.watch(filename, function() {
	// send message to any subscribers
	publisher.send(JSON.stringify({
		type: 'changed',
		file: filename,
		timestamp: Date.now()
	}));
	
});

Array.prototype.shuffle = function() {

	var i = this.length, j, temp;
	
	// j = random number

	while(--i > 0) {
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
	
	return this;
}

// fisher yates algorithm
var arr = []
for(var i = 0; i < 1000000; i++)
	arr.push(i);
	
var result = arr.shuffle();


// listen on TCP port 5439
publisher.bind('tcp://*:5439', function(err) {
	console.log('Listening for zmq subscribers...');
	console.log(result);
});