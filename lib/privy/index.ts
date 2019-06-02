import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { getArray_hoursMinutesSeconds, getArray_yearMonthDay }
	from '@writetome51/get-array-year-month-day-hours-minutes-seconds';
import { getDateIDOptions, getTimeIDOptions } from './interfaces';
import { getDefaultsFor_SeparatorOptions, getDefaultsFor_YearSeparatorOptions }
	from '@writetome51/year-separator-options';


// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.

export function getDateID(
	options: getDateIDOptions = undefined
): string {

	return __getDateOrTimeID(
		getDefaultsFor_getDateIDOptions(),
		options,
		(combinedOptions) => {
			let [year, month, day] = getArray_yearMonthDay(combinedOptions.includeFullYear);
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
	userProvidedOptions: getDateIDOptions | getTimeIDOptions,

	// `combinedOptions` is `defaultOptions` with `userProvidedOptions` merged into it.
	// must return object with 3 letter properties, either {y,m,d} or {h,m,s} .

	getParts: (combinedOptions) => Object
) {
	if (hasValue(userProvidedOptions)) modifyObject(defaultOptions, userProvidedOptions);
	// @ts-ignore
	defaultOptions.order = defaultOptions.order.toLowerCase();
	if (defaultOptions.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let parts = getParts(defaultOptions);

	let sep = defaultOptions.separateEach ? defaultOptions.separator : '';

	return (parts[defaultOptions.order[0]] + sep + parts[defaultOptions.order[1]] +
		sep + parts[defaultOptions.order[2]]);
}


export function getDefaultsFor_getTimeIDOptions(): getTimeIDOptions {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['order'] = default_hmsOrder;
	return defaults;
}


export function getDefaultsFor_getDateIDOptions(): getDateIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['order'] = default_ymdOrder;
	return defaults;
}


export const default_ymdOrder = 'ymd';
export const default_hmsOrder = 'hms';
