import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { not } from '@writetome51/not';


// Returns array of strings representing [year, month, day] (in that order).
// Example:  ['15', '02', '20']  (meaning 2015, February, the 20th)

export function getYearMonthDay_asArray(includeFullYear = false): string[] {
	let date = new Date();

	let parts = [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())];
	if (not(includeFullYear)) parts[0] = parts[0].slice(2); // trims off first 2 digits.

	let results = [], i = -1;
	while (++i < parts.length) results.push(ensureMoreThanOneDigit(parts[i]));
	return results;
}


export function getHoursMinutesSeconds_asArray(): string[] {
	let date = new Date();

	let parts = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];

	let results = [], i = -1;
	while (++i < parts.length) results.push(ensureMoreThanOneDigit(parts[i]));
	return results;
}


export function ensureMoreThanOneDigit(str) {
	if (String(str).length === 1) str = ('0' + str);

	return str;
}


export function getFormattedDate(
	options: getFormattedDateOptions = undefined
): string {
	let defaults = getDefaultsFor_getFormattedDateOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	return __getFormattedDateOrTime(defaults, () => {
		let [year, month, day] = getYearMonthDay_asArray(defaults.includeFullYear);
		return {y: year, m: month, d: day};
	});
}


export function getFormattedTime(
	options: getFormattedTimeOptions = undefined
): string {
	let defaults = getDefaultsFor_getFormattedTimeOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	return __getFormattedDateOrTime(defaults, () => {
		let [hour, mins, secs] = getHoursMinutesSeconds_asArray();
		return {h: hour, m: mins, s: secs};
	});
}


export function __getFormattedDateOrTime(options, getKeys: () => Object) {
	// @ts-ignore
	options.order = options.order.toLowerCase();
	if (options.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let keys = getKeys(); // must return object with 3 letter keys, either {y, m, d} or {h, m, s}

	let sep = options.separateEach ? options.separator : '';
	return (keys[options.order[0]] + sep + keys[options.order[1]] + sep + keys[options.order[2]]);
}


export type DateFormatOrder = 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy';
export type TimeFormatOrder = 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm';


export interface FormattingSeparatorOptions {
	separator?: string,
	separateEach?: boolean
}


export interface getFormattedTimeOptions extends FormattingSeparatorOptions {
	order?: TimeFormatOrder
}


export interface YearFormattingSeparatorOptions extends FormattingSeparatorOptions {
	includeFullYear?: boolean
}


export interface getFormattedDateOptions extends YearFormattingSeparatorOptions {
	order?: DateFormatOrder,
}


export interface getDateTimeOptions extends YearFormattingSeparatorOptions {
	includeDate?: boolean,
	includeTime?: boolean,
	ymdOrder?: DateFormatOrder,
	hmsOrder?: TimeFormatOrder
}


export function getDefaultsFor_FormattingSeparatorOptions(): FormattingSeparatorOptions {
	return {separator: '-', separateEach: false};
}


export function getDefaultsFor_getFormattedTimeOptions(): getFormattedTimeOptions {
	let defaults = getDefaultsFor_FormattingSeparatorOptions();
	defaults['order'] = 'hms';
	return defaults;
}


export function getDefaultsFor_YearFormattingSeparatorOptions(): YearFormattingSeparatorOptions {
	let defaults = getDefaultsFor_FormattingSeparatorOptions();
	defaults['includeFullYear'] = false;
	return defaults;
}


export function getDefaultsFor_getFormattedDateOptions(): getFormattedDateOptions {
	let defaults = getDefaultsFor_YearFormattingSeparatorOptions();
	defaults['order'] = 'ymd';
	return defaults;
}
