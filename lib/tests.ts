import { getDateTimeID } from './index';


let res = getDateTimeID();

console.log(res);

res = getDateTimeID({ymdOrder: 'mdy'});

console.log(res);

let u = undefined;
res = getDateTimeID(u, u, '_');

console.log(res);


res = getDateTimeID(u);
console.log(res);


res = getDateTimeID({ymdOrder: 'mdy', hmsOrder: 'smh', separateEach: true, separator: '*'});
console.log(res);


res = getDateTimeID({
	ymdOrder: 'mdy',
	separateEach: true,
	separator: '*'
});
console.log(res);


res = getDateTimeID({
	includeFullYear:true,
	hmsOrder: 'msh',
	separator: ''
});
console.log(res);
