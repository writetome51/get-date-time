import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { not } from '@writetome51/not';
import { getDateTimeOptions, getFormattedDate, getFormattedTime } from './privy';

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
	if (not(defaults.includeDate) || not(defaults.includeTime)) defaults.separator = '';

	return (dateStr + defaults.separator + timeStr);
}
