"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_array_1 = require("error-if-not-array");
function alphabetize(strings) {
    error_if_not_array_1.errorIfNotArray(strings);
    strings.sort(function (a, b) {
        return String(a).localeCompare(String(b), 'en', { caseFirst: 'upper' });
    });
}
exports.alphabetize = alphabetize;
