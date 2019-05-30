"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
// Default `options`:  {
// 				includeDate: true, includeTime: true, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator: '-', separateEach: false
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
        includeDate: true, includeTime: true, ymdOrder: 'ymd', hmsOrder: 'hms',
        separator: '-', separateEach: false
    };
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    var date = new Date();
    var year = String(date.getFullYear()).slice(2); // trims off first 2 digits.
    var _a = getMonthDayHourMinutesSeconds(), month = _a[0], day = _a[1], hour = _a[2], mins = _a[3], secs = _a[4];
    var dateStr = (defaults.includeDate ? getFormatted('date', defaults.ymdOrder) : '');
    var timeStr = (defaults.includeTime ? getFormatted('time', defaults.hmsOrder) : '');
    if (!(defaults.includeDate) || !(defaults.includeTime))
        defaults.separator = '';
    return ('' + dateStr + defaults.separator + timeStr);
    function getMonthDayHourMinutesSeconds() {
        var parts = [(date.getMonth() + 1), (date.getDate()), (date.getHours()),
            (date.getMinutes()), (date.getSeconds())];
        var results = [], i = -1;
        while (++i < parts.length)
            results.push(ensureTwoDigits(parts[i]));
        return results;
    }
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
