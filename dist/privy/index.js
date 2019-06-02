"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
var get_array_year_month_day_hours_minutes_seconds_1 = require("@writetome51/get-array-year-month-day-hours-minutes-seconds");
var year_separator_options_1 = require("@writetome51/year-separator-options");
// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.
function getDateID(options) {
    if (options === void 0) { options = undefined; }
    return __getDateOrTimeID(getDefaultsFor_getDateIDOptions(), options, function (combinedOptions) {
        var _a = get_array_year_month_day_hours_minutes_seconds_1.getArray_yearMonthDay(combinedOptions.includeFullYear), year = _a[0], month = _a[1], day = _a[2];
        return { y: year, m: month, d: day };
    });
}
exports.getDateID = getDateID;
// Returns current time as string of digits.
// Default format is hhmmss, i.e '162020' for 4:20pm and 20 seconds.
function getTimeID(options) {
    if (options === void 0) { options = undefined; }
    return __getDateOrTimeID(getDefaultsFor_getTimeIDOptions(), options, function () {
        var _a = get_array_year_month_day_hours_minutes_seconds_1.getArray_hoursMinutesSeconds(), hour = _a[0], mins = _a[1], secs = _a[2];
        return { h: hour, m: mins, s: secs };
    });
}
exports.getTimeID = getTimeID;
function __getDateOrTimeID(defaultOptions, userProvidedOptions, 
// `combinedOptions` is `defaultOptions` with `userProvidedOptions` merged into it.
// must return object with 3 letter properties, either {y,m,d} or {h,m,s} .
getParts) {
    if (has_value_no_value_1.hasValue(userProvidedOptions))
        modify_object_1.modifyObject(defaultOptions, userProvidedOptions);
    // @ts-ignore
    defaultOptions.order = defaultOptions.order.toLowerCase();
    if (defaultOptions.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var parts = getParts(defaultOptions);
    var sep = defaultOptions.separateEach ? defaultOptions.separator : '';
    return (parts[defaultOptions.order[0]] + sep + parts[defaultOptions.order[1]] +
        sep + parts[defaultOptions.order[2]]);
}
exports.__getDateOrTimeID = __getDateOrTimeID;
function getDefaultsFor_getTimeIDOptions() {
    var defaults = year_separator_options_1.getDefaultsFor_SeparatorOptions();
    defaults['order'] = exports.default_hmsOrder;
    return defaults;
}
exports.getDefaultsFor_getTimeIDOptions = getDefaultsFor_getTimeIDOptions;
function getDefaultsFor_getDateIDOptions() {
    var defaults = year_separator_options_1.getDefaultsFor_YearSeparatorOptions();
    defaults['order'] = exports.default_ymdOrder;
    return defaults;
}
exports.getDefaultsFor_getDateIDOptions = getDefaultsFor_getDateIDOptions;
exports.default_ymdOrder = 'ymd';
exports.default_hmsOrder = 'hms';
