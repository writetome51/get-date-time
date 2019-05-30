import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';

// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-102210' .
// Default `options`: {ymdOrder: 'ymd', hmsOrder: 'hms', separator: '-', separateEach: false}
//
// You can change the order that year, month, day appear using `ymdOrder`.
// You can change the order that hour, minutes, seconds appear using `hmsOrder`.
// (For both those parameters you use only 3 characters.)
// You can use any `separator` you want.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.


export function getDateTime(
	options: getDateTimeOptions = undefined
): string {

	let defaults = {ymdOrder: 'ymd', hmsOrder: 'hms', separator: '-', separateEach: false};
	if (hasValue(options)) modifyObject(defaults, options);
	let date = new Date();

	let year = String(date.getFullYear()).slice(2); // trims off first 2 digits.
	let month = ensureTwoDigits(date.getMonth() + 1);
	let day = ensureTwoDigits(date.getDate());

	let hour = ensureTwoDigits(date.getHours());
	let mins = ensureTwoDigits(date.getMinutes());
	let secs = ensureTwoDigits(date.getSeconds());

	let dateStr = getFormatted('date', defaults.ymdOrder);
	let timeStr = getFormatted('time', defaults.hmsOrder);

	return ('' + dateStr + defaults.separator + timeStr);


	function ensureTwoDigits(str) {
		if (String(str).length === 1) str = ('0' + str);

		return str;
	}


	function getFormatted(dateOrTime: 'date' | 'time', order: string) {
		order = String(order).toLowerCase();
		if (order.length !== 3) throw new Error('Input must be string 3 characters long');

		let keys = (dateOrTime === 'date' ? {y: year, m: month, d: day} : {h: hour, m: mins, s: secs});

		let sep = defaults.separateEach ? defaults.separator : '';
		return ('' + keys[order[0]] + sep + keys[order[1]] + sep + keys[order[2]]);
	}


}


export interface getDateTimeOptions {
	ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy',
	hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm',
	separator?: string,
	separateEach?: boolean
}
