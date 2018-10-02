"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
function alphabetize(strings) {
    errorIfNotArray_1.errorIfNotArray(strings);
    strings.sort(function (a, b) {
        return a.localeCompare(b, 'en', { caseFirst: 'upper' });
    });
}
exports.alphabetize = alphabetize;
