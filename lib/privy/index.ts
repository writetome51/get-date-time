import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';

// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.

export function getDateID(
	options: getDateIDOptions = undefined
): string {
	let defaults = getDefaultsFor_getDateIDOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	return __getDateOrTimeID(defaults, () => {
		let [year, month, day] = getYearMonthDayIDs(defaults.includeFullYear);
		return {y: year, m: month, d: day};
	});
}


// Returns current time as string of digits.
// Default format is hhmmss, i.e '162020' for 4:20pm and 20 seconds.

export function getTimeID(
	options: getTimeIDOptions = undefined
): string {
	let defaults = getDefaultsFor_getTimeIDOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	return __getDateOrTimeID(defaults, () => {
		let [hour, mins, secs] = getHoursMinutesSeconds();
		return {h: hour, m: mins, s: secs};
	});
}


export function __getDateOrTimeID(options, getParts: () => Object) {
	// @ts-ignore
	options.order = options.order.toLowerCase();
	if (options.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let parts = getParts(); // must return object with 3 letter properties, either {y,m,d} or {h,m,s}

	let sep = options.separateEach ? options.separator : '';
	return (parts[options.order[0]] + sep + parts[options.order[1]] + sep + parts[options.order[2]]);
}


export type DateFormatOrder = 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy';
export type TimeFormatOrder = 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm';


export interface SeparatorOptions {
	separator?: string,
	separateEach?: boolean
}


export interface getTimeIDOptions extends SeparatorOptions {
	order?: TimeFormatOrder
}


export interface YearSeparatorOptions extends SeparatorOptions {
	includeFullYear?: boolean
}


export interface getDateIDOptions extends YearSeparatorOptions {
	order?: DateFormatOrder,
}


export interface getDateTimeIDOptions extends YearSeparatorOptions {
	ymdOrder?: DateFormatOrder,
	hmsOrder?: TimeFormatOrder
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
