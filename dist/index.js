"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
var not_1 = require("@writetome51/not");
var privy_1 = require("./privy");
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
    var dateStr = (defaults.includeDate ? privy_1.getFormattedDate(defaults) : '');
    defaults['order'] = defaults.hmsOrder;
    // @ts-ignore
    var timeStr = (defaults.includeTime ? privy_1.getFormattedTime(defaults) : '');
    if (not_1.not(defaults.includeDate) || not_1.not(defaults.includeTime))
        defaults.separator = '';
    return (dateStr + defaults.separator + timeStr);
}
exports.getDateTime = getDateTime;
