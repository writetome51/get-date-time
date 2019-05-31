"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
var not_1 = require("@writetome51/not");
// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
// Default `options`:  {
//				includeFullYear: false, includeDate: true, includeTime: true, ymdOrder: 'ymd',
//				hmsOrder: 'hms', separator: '-', separateEach: false
//			}
// (See `getDateTimeOptions` at the bottom for more info.)
// You can change the order that year, month, day appear using `ymdOrder`.
// You can change the order that hour, minutes, seconds appear using `hmsOrder`.
// You can use any `separator` you want.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.
function getDateTime(
// If left undefined, we use `defaults`.
options) {
    if (options === void 0) { options = undefined; }
    var defaults = {
        includeFullYear: false, includeDate: true, includeTime: true, ymdOrder: 'ymd',
        hmsOrder: 'hms', separator: '-', separateEach: false
    };
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    defaults['order'] = defaults.ymdOrder;
    // @ts-ignore
    var dateStr = (defaults.includeDate ? getFormattedDate(defaults) : '');
    defaults['order'] = defaults.hmsOrder;
    // @ts-ignore
    var timeStr = (defaults.includeTime ? getFormattedTime(defaults) : '');
    if (!(defaults.includeDate) || !(defaults.includeTime))
        defaults.separator = '';
    return (dateStr + defaults.separator + timeStr);
}
exports.getDateTime = getDateTime;
function getYearMonthDay() {
    var date = new Date();
    var parts = [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())];
    var results = [], i = -1;
    while (++i < parts.length)
        results.push(ensureMoreThanOneDigit(parts[i]));
    return results;
}
function getHoursMinutesSeconds() {
    var date = new Date();
    var parts = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];
    var results = [], i = -1;
    while (++i < parts.length)
        results.push(ensureMoreThanOneDigit(parts[i]));
    return results;
}
function ensureMoreThanOneDigit(str) {
    if (String(str).length === 1)
        str = ('0' + str);
    return str;
}
function getFormattedDate(options) {
    if (options === void 0) { options = { order: 'ymd', includeFullYear: false, separateEach: false, separator: '-' }; }
    // @ts-ignore
    order = order.toLowerCase();
    if (options.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var _a = getYearMonthDay(), year = _a[0], month = _a[1], day = _a[2];
    if (not_1.not(options.includeFullYear))
        year = year.slice(2); // trims off first 2 digits.
    var keys = { y: year, m: month, d: day };
    var sep = options.separateEach ? options.separator : '';
    return (keys[options.order[0]] + sep + keys[options.order[1]] + sep + keys[options.order[2]]);
}
function getFormattedTime(options) {
    if (options === void 0) { options = { order: 'hms', separateEach: false, separator: '-' }; }
    // @ts-ignore
    order = order.toLowerCase();
    if (options.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var _a = getHoursMinutesSeconds(), hour = _a[0], mins = _a[1], secs = _a[2];
    var keys = { h: hour, m: mins, s: secs };
    var sep = options.separateEach ? options.separator : '';
    return (keys[options.order[0]] + sep + keys[options.order[1]] + sep + keys[options.order[2]]);
}
