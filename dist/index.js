"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-102210' .
// Default `options`: {ymdOrder: 'ymd', hmsOrder: 'hms', separator: '-', separateEach: false}
//
// You can change the order that year, month, day appear using `ymdOrder`.
// You can change the order that hour, minutes, seconds appear using `hmsOrder`.
// (For both those parameters you use only 3 characters.)
// You can use any `separator` you want.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.
function getDateTime(options) {
    if (options === void 0) { options = undefined; }
    var defaults = { ymdOrder: 'ymd', hmsOrder: 'hms', separator: '-', separateEach: false };
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    var date = new Date();
    var year = String(date.getFullYear()).slice(2); // trims off first 2 digits.
    var month = ensureTwoDigits(date.getMonth() + 1);
    var day = ensureTwoDigits(date.getDate());
    var hour = ensureTwoDigits(date.getHours());
    var mins = ensureTwoDigits(date.getMinutes());
    var secs = ensureTwoDigits(date.getSeconds());
    var dateStr = getFormatted('date', defaults.ymdOrder);
    var timeStr = getFormatted('time', defaults.hmsOrder);
    return ('' + dateStr + defaults.separator + timeStr);
    function ensureTwoDigits(str) {
        if (String(str).length === 1)
            str = ('0' + str);
        return str;
    }
    function getFormatted(dateOrTime, order) {
        order = String(order).toLowerCase();
        if (order.length !== 3)
            throw new Error('Input must be string 3 characters long');
        var keys = (dateOrTime === 'date' ? { y: year, m: month, d: day } : { h: hour, m: mins, s: secs });
        var sep = defaults.separateEach ? defaults.separator : '';
        return ('' + keys[order[0]] + sep + keys[order[1]] + sep + keys[order[2]]);
    }
}
exports.getDateTime = getDateTime;
