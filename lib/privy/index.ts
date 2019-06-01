import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { getArray_hoursMinutesSeconds, getArray_yearMonthDay }
	from '@writetome51/get-array-year-month-day-hours-minutes-seconds';
import {
	getDateIDOptions, getDateTimeIDOptions, getTimeIDOptions, SeparatorOptions, YearSeparatorOptions
}
	from './interfaces';


// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.

export function getDateID(
	options: getDateIDOptions = undefined
): string {

	let defaults = getDefaultsFor_getDateIDOptions();

	return __getDateOrTimeID(
		defaults,
		options,
		() => {
			let [year, month, day] = getArray_yearMonthDay(defaults.includeFullYear);
			return {y: year, m: month, d: day};
		}
	);
}


// Returns current time as string of digits.
// Default format is hhmmss, i.e '162020' for 4:20pm and 20 seconds.

export function getTimeID(
	options: getTimeIDOptions = undefined
): string {

	return __getDateOrTimeID(
		getDefaultsFor_getTimeIDOptions(),
		options,
		() => {
			let [hour, mins, secs] = getArray_hoursMinutesSeconds();
			return {h: hour, m: mins, s: secs};
		}
	);
}


export function __getDateOrTimeID(
	defaultOptions,
	options: getDateIDOptions | getTimeIDOptions,
	getParts: () => Object // must return object with 3 letter properties, either {y,m,d} or {h,m,s}
) {
	if (hasValue(options)) modifyObject(defaultOptions, options);
	// @ts-ignore
	defaultOptions.order = defaultOptions.order.toLowerCase();
	if (defaultOptions.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let parts = getParts();

	let sep = defaultOptions.separateEach ? defaultOptions.separator : '';

	return (parts[defaultOptions.order[0]] + sep + parts[defaultOptions.order[1]] +
		sep + parts[defaultOptions.order[2]]);
}


export function getDefaultsFor_SeparatorOptions(): SeparatorOptions {
	return {separator: default_separator, separateEach: default_separateEach};
}


export function getDefaultsFor_getTimeIDOptions(): getTimeIDOptions {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['order'] = default_hmsOrder;
	return defaults;
}


export function getDefaultsFor_YearSeparatorOptions(): YearSeparatorOptions {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['includeFullYear'] = default_includeFullYear;
	return defaults;
}


export function getDefaultsFor_getDateIDOptions(): getDateIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['order'] = default_ymdOrder;
	return defaults;
}


export function getDefaultsFor_getDateTimeIDOptions(): getDateTimeIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['ymdOrder'] = default_ymdOrder;
	defaults['hmsOrder'] = default_hmsOrder;
	return defaults;
}


export const default_ymdOrder = 'ymd';
export const default_hmsOrder = 'hms';
export const default_includeFullYear = false;
export const default_separator = '-';
export const default_separateEach = false;
