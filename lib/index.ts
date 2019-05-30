import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';

// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
// Default `options`:  {
// 				includeDate: true, includeTime: true, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator: '-', separateEach: false
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
		includeDate: true, includeTime: true, ymdOrder: 'ymd', hmsOrder: 'hms',
		separator: '-', separateEach: false
	};
	if (hasValue(options)) modifyObject(defaults, options);

	let date = new Date();
	let year = String(date.getFullYear()).slice(2); // trims off first 2 digits.

	let [month, day, hour, mins, secs] = getMonthDayHourMinutesSeconds();

	let dateStr = (defaults.includeDate ? getFormatted('date', defaults.ymdOrder) : '');
	let timeStr = (defaults.includeTime ? getFormatted('time', defaults.hmsOrder) : '');
	if (!(defaults.includeDate) || !(defaults.includeTime)) defaults.separator = '';
	return ('' + dateStr + defaults.separator + timeStr);


	function getMonthDayHourMinutesSeconds() {
		let parts = [(date.getMonth() + 1), (date.getDate()), (date.getHours()),
			(date.getMinutes()), (date.getSeconds())];
		let results = [], i = -1;
		while (++i < parts.length) results.push(ensureTwoDigits(parts[i]));
		return results;
	}


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
	includeDate?: boolean,
	includeTime?: boolean,
	ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy',
	hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm',
	separator?: string,
	separateEach?: boolean
}
