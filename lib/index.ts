import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { not } from '@writetome51/not';

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


export function getDateTime(
	// If left undefined, we use `defaults`.
	options: getDateTimeOptions = undefined
): string {

	let defaults = {
		includeFullYear: false, includeDate: true, includeTime: true, ymdOrder: 'ymd',
		hmsOrder: 'hms', separator: '-', separateEach: false
	};
	if (hasValue(options)) modifyObject(defaults, options);

	defaults['order'] = defaults.ymdOrder;
	// @ts-ignore
	let dateStr = (defaults.includeDate ? getFormattedDate(defaults) : '');

	defaults['order'] = defaults.hmsOrder;
	// @ts-ignore
	let timeStr = (defaults.includeTime ? getFormattedTime(defaults) : '');
	if (!(defaults.includeDate) || !(defaults.includeTime)) defaults.separator = '';

	return (dateStr + defaults.separator + timeStr);
}


function getYearMonthDay(): string[] {
	let date = new Date();

	let parts = [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())];

	let results = [], i = -1;
	while (++i < parts.length) results.push(ensureMoreThanOneDigit(parts[i]));
	return results;
}


function getHoursMinutesSeconds(): string[] {
	let date = new Date();

	let parts = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];

	let results = [], i = -1;
	while (++i < parts.length) results.push(ensureMoreThanOneDigit(parts[i]));
	return results;
}


function ensureMoreThanOneDigit(str) {
	if (String(str).length === 1) str = ('0' + str);

	return str;
}


function getFormattedDate(
	options = {order: 'ymd', includeFullYear: false, separateEach: false, separator: '-' }
): string {
	// @ts-ignore
	order = order.toLowerCase();
	if (options.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let [year, month, day] = getYearMonthDay();
	if (not(options.includeFullYear)) year = year.slice(2); // trims off first 2 digits.
	let keys = {y: year, m: month, d: day};

	let sep = options.separateEach ? options.separator : '';
	return (keys[options.order[0]] + sep + keys[options.order[1]] + sep + keys[options.order[2]]);
}


function getFormattedTime(
	options = {order: 'hms', separateEach: false, separator: '-'}
): string {
	// @ts-ignore
	order = order.toLowerCase();
	if (options.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let [hour, mins, secs] = getHoursMinutesSeconds();
	let keys = {h: hour, m: mins, s: secs};

	let sep = options.separateEach ? options.separator : '';
	return (keys[options.order[0]] + sep + keys[options.order[1]] + sep + keys[options.order[2]]);
}


export interface getDateTimeOptions {
	includeFullYear?: boolean,
	includeDate?: boolean,
	includeTime?: boolean,
	ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy',
	hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm',
	separator?: string,
	separateEach?: boolean
}
