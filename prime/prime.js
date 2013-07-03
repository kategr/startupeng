#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

var primes = [];
var placeholder = 1;

function Prime(x) {
    var square_root = Math.sqrt(x);
    for (var i = 2; i <= square_root; i++) {
        if (x % i === 0) 
            return false;
        }
        return true;
    }

while (primes.length <= 100) {
    if (Prime(placeholder)) {
        primes.push(placeholder);
        placeholder++;
    }
    else {
        placeholder++;
    }
}

fs.writeFileSync(outfile, primes.toString());
console.log("Script: " + __filename + "\nWrote: " + primes.toString() + "To: " + outfile);