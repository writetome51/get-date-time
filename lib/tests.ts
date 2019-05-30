import { getDateTime } from './index';


let res = getDateTime();

console.log(res);

res = getDateTime({ymdOrder: 'mdy'});

console.log(res);

let u = undefined;
res = getDateTime(u, u, '_');

console.log(res);


res = getDateTime(u);
console.log(res);


res = getDateTime({ymdOrder: 'mdy', hmsOrder: 'smh', separateEach: true, separator: '*'});
console.log(res);


res = getDateTime({
	ymdOrder: 'mdy',
	includeTime: false,
	separateEach: true,
	separator: '*'
});
console.log(res);


res = getDateTime({
	hmsOrder: 'msh',
	includeDate: false,
//	separateEach: true,
	separator: '*'
});
console.log(res);
