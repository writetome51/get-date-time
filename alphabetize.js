"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function alphabetize(strings) {
    strings.sort(function (a, b) {
        return a.localeCompare(b, 'en', { caseFirst: 'upper' });
    });
}
exports.alphabetize = alphabetize;
