#!/usr/bin/env node

var fs = require('fs');
var outfile = "hello.txt";
var primes = [];
var temp = 1;

while (primes.length <= 100) {
	if (temp >= 0) {
		primes.push(temp);
		}
	temp++
	}

//fs.writeFileSync(outfile, primes);
console.log(primes);
