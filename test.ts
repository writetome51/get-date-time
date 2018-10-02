import { alphabetize } from './alphabetize';


let strings = [];
let moreStrings = ['book', 'copy', 'aardvark', '_10', 'atco', 'Atco', 'zebra', 'billings', '__100',
	'Army of one', '100'];
let i = -1;
while (++i < 10000) {
	strings = strings.concat(moreStrings);
}

alphabetize(strings);

console.log(strings.length);