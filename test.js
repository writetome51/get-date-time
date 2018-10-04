"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_1 = require("./alphabetize");
var strings = ['book', 'copy', 'zaa', 'aac', '_10', 100, 'aaa', 'atco',
    'Zebra', 'bat', '__100', '!', 'aab', '@', 'Ã', '#', '$', '%', '^',
    '&', '*', '000', 'AE', '(', ')', '-', 'Atco', '+', '=', 'aardvark', 2,
    '1000', '30', 0, 'A', 'qqq', '~', 'x', 'Ô', 'Â', '<', '>', ',', '.', 'Í', 'Ǣ',
    'i', '/', '?', 'Zaa', '∏', '|', '\\'];
alphabetize_1.alphabetize(strings);
console.log(strings);
