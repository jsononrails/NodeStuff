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
var arr = [1,2,3,4,5,6,7,8]
var result = arr.shuffle();

console.log(result);