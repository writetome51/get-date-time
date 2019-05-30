"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var res = index_1.getDateTime();
console.log(res);
res = index_1.getDateTime({ ymdOrder: 'mdy' });
console.log(res);
var u = undefined;
res = index_1.getDateTime(u, u, '_');
console.log(res);
res = index_1.getDateTime(u);
console.log(res);
res = index_1.getDateTime({ ymdOrder: 'mdy', hmsOrder: 'smh', separateEach: true, separator: '*' });
console.log(res);
res = index_1.getDateTime({
    ymdOrder: 'mdy',
    includeTime: false,
    separateEach: true,
    separator: '*'
});
console.log(res);
res = index_1.getDateTime({
    hmsOrder: 'msh',
    includeDate: false,
    //	separateEach: true,
    separator: '*'
});
console.log(res);
