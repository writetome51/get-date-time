"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
var not_1 = require("@writetome51/not");
// Returns array of strings representing [year, month, day] (in that order).
// Example:  ['15', '02', '20']  (meaning 2015, February, the 20th)
function getYearMonthDay_asArray(includeFullYear) {
    if (includeFullYear === void 0) { includeFullYear = false; }
    var date = new Date();
    var parts = [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())];
    if (not_1.not(includeFullYear))
        parts[0] = parts[0].slice(2); // trims off first 2 digits.
    var results = [], i = -1;
    while (++i < parts.length)
        results.push(ensureMoreThanOneDigit(parts[i]));
    return results;
}
exports.getYearMonthDay_asArray = getYearMonthDay_asArray;
function getHoursMinutesSeconds_asArray() {
    var date = new Date();
    var parts = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];
    var results = [], i = -1;
    while (++i < parts.length)
        results.push(ensureMoreThanOneDigit(parts[i]));
    return results;
}
exports.getHoursMinutesSeconds_asArray = getHoursMinutesSeconds_asArray;
function ensureMoreThanOneDigit(str) {
    if (String(str).length === 1)
        str = ('0' + str);
    return str;
}
exports.ensureMoreThanOneDigit = ensureMoreThanOneDigit;
function getFormattedDate(options) {
    if (options === void 0) { options = undefined; }
    var defaults = getDefaultsFor_getFormattedDateOptions();
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    return __getFormattedDateOrTime(defaults, function () {
        var _a = getYearMonthDay_asArray(defaults.includeFullYear), year = _a[0], month = _a[1], day = _a[2];
        return { y: year, m: month, d: day };
    });
}
exports.getFormattedDate = getFormattedDate;
function getFormattedTime(options) {
    if (options === void 0) { options = undefined; }
    var defaults = getDefaultsFor_getFormattedTimeOptions();
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    return __getFormattedDateOrTime(defaults, function () {
        var _a = getHoursMinutesSeconds_asArray(), hour = _a[0], mins = _a[1], secs = _a[2];
        return { h: hour, m: mins, s: secs };
    });
}
exports.getFormattedTime = getFormattedTime;
function __getFormattedDateOrTime(options, getKeys) {
    // @ts-ignore
    options.order = options.order.toLowerCase();
    if (options.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var keys = getKeys(); // must return object with 3 letter keys, either {y, m, d} or {h, m, s}
    var sep = options.separateEach ? options.separator : '';
    return (keys[options.order[0]] + sep + keys[options.order[1]] + sep + keys[options.order[2]]);
}
exports.__getFormattedDateOrTime = __getFormattedDateOrTime;
function getDefaultsFor_FormattingSeparatorOptions() {
    return { separator: '-', separateEach: false };
}
exports.getDefaultsFor_FormattingSeparatorOptions = getDefaultsFor_FormattingSeparatorOptions;
function getDefaultsFor_getFormattedTimeOptions() {
    var defaults = getDefaultsFor_FormattingSeparatorOptions();
    defaults['order'] = 'hms';
    return defaults;
}
exports.getDefaultsFor_getFormattedTimeOptions = getDefaultsFor_getFormattedTimeOptions;
function getDefaultsFor_YearFormattingSeparatorOptions() {
    var defaults = getDefaultsFor_FormattingSeparatorOptions();
    defaults['includeFullYear'] = false;
    return defaults;
}
exports.getDefaultsFor_YearFormattingSeparatorOptions = getDefaultsFor_YearFormattingSeparatorOptions;
function getDefaultsFor_getFormattedDateOptions() {
    var defaults = getDefaultsFor_YearFormattingSeparatorOptions();
    defaults['order'] = 'ymd';
    return defaults;
}
exports.getDefaultsFor_getFormattedDateOptions = getDefaultsFor_getFormattedDateOptions;
