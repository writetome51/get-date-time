"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
var privy_1 = require("./privy");
// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
// Default `options`:  {
//				includeFullYear: false, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator:	'-', separateEach: false
//			}
// (See `getDateTimeOptions` at the bottom for more info.)
// You can change the order that year, month, day appear using `ymdOrder`.
// You can change the order that hour, minutes, seconds appear using `hmsOrder`.
// You can use any `separator` you want.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.
function getDateTimeID(
// If left undefined, we use `defaults`.
options) {
    if (options === void 0) { options = undefined; }
    var defaults = privy_1.getDefaultsFor_getDateTimeOptions();
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    defaults['order'] = defaults.ymdOrder;
    var dateStr = privy_1.getDateID(defaults);
    defaults['order'] = defaults.hmsOrder;
    var timeStr = privy_1.getTimeID(defaults);
    return (dateStr + defaults.separator + timeStr);
}
exports.getDateTimeID = getDateTimeID;
