"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var privy_1 = require("./privy");
var res = index_1.getDateTimeID();
console.log(res);
res = index_1.getDateTimeID({ ymdOrder: 'mdy' });
console.log(res);
var u = undefined;
res = index_1.getDateTimeID(u, u, '_');
console.log(res);
res = index_1.getDateTimeID(u);
console.log(res);
res = index_1.getDateTimeID({ ymdOrder: 'mdy', hmsOrder: 'smh', separateEach: true, separator: '*' });
console.log(res);
res = index_1.getDateTimeID({
    ymdOrder: 'mdy',
    separateEach: true,
    separator: '*'
});
console.log(res);
res = index_1.getDateTimeID({
    includeFullYear: true,
    hmsOrder: 'msh',
    separator: ''
});
console.log(res);
res = privy_1.getDateID({ separateEach: true, includeFullYear: true });
console.log(res);
