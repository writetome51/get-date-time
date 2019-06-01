"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.
function getDateID(options) {
    if (options === void 0) { options = undefined; }
    var defaults = getDefaultsFor_getDateIDOptions();
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    return __getDateOrTimeID(defaults, function () {
        var _a = getYearMonthDayIDs(defaults.includeFullYear), year = _a[0], month = _a[1], day = _a[2];
        return { y: year, m: month, d: day };
    });
}
exports.getDateID = getDateID;
// Returns current time as string of digits.
// Default format is hhmmss, i.e '162020' for 4:20pm and 20 seconds.
function getTimeID(options) {
    if (options === void 0) { options = undefined; }
    var defaults = getDefaultsFor_getTimeIDOptions();
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    return __getDateOrTimeID(defaults, function () {
        var _a = getHoursMinutesSeconds(), hour = _a[0], mins = _a[1], secs = _a[2];
        return { h: hour, m: mins, s: secs };
    });
}
exports.getTimeID = getTimeID;
function __getDateOrTimeID(options, getParts) {
    // @ts-ignore
    options.order = options.order.toLowerCase();
    if (options.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var parts = getParts(); // must return object with 3 letter properties, either {y,m,d} or {h,m,s}
    var sep = options.separateEach ? options.separator : '';
    return (parts[options.order[0]] + sep + parts[options.order[1]] + sep + parts[options.order[2]]);
}
exports.__getDateOrTimeID = __getDateOrTimeID;
function getDefaultsFor_SeparatorOptions() {
    return { separator: exports.default_separator, separateEach: exports.default_separateEach };
}
exports.getDefaultsFor_SeparatorOptions = getDefaultsFor_SeparatorOptions;
function getDefaultsFor_getTimeIDOptions() {
    var defaults = getDefaultsFor_SeparatorOptions();
    defaults['order'] = exports.default_hmsOrder;
    return defaults;
}
exports.getDefaultsFor_getTimeIDOptions = getDefaultsFor_getTimeIDOptions;
function getDefaultsFor_YearSeparatorOptions() {
    var defaults = getDefaultsFor_SeparatorOptions();
    defaults['includeFullYear'] = exports.default_includeFullYear;
    return defaults;
}
exports.getDefaultsFor_YearSeparatorOptions = getDefaultsFor_YearSeparatorOptions;
function getDefaultsFor_getDateIDOptions() {
    var defaults = getDefaultsFor_YearSeparatorOptions();
    defaults['order'] = exports.default_ymdOrder;
    return defaults;
}
exports.getDefaultsFor_getDateIDOptions = getDefaultsFor_getDateIDOptions;
function getDefaultsFor_getDateTimeIDOptions() {
    var defaults = getDefaultsFor_YearSeparatorOptions();
    defaults['ymdOrder'] = exports.default_ymdOrder;
    defaults['hmsOrder'] = exports.default_hmsOrder;
    return defaults;
}
exports.getDefaultsFor_getDateTimeIDOptions = getDefaultsFor_getDateTimeIDOptions;
exports.default_ymdOrder = 'ymd';
exports.default_hmsOrder = 'hms';
exports.default_includeFullYear = false;
exports.default_separator = '-';
exports.default_separateEach = false;
