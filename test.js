"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_1 = require("./alphabetize");
var strings = [];
var moreStrings = ['book', 'copy', 'aardvark', '_10', 'atco', 'Atco', 'zebra', 'billings', '__100',
    'Army of one', '100'];
var i = -1;
while (++i < 10000) {
    strings = strings.concat(moreStrings);
}
alphabetize_1.alphabetize(strings);
console.log(strings.length);
