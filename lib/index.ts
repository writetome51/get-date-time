import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import {
	getDateTimeOptions, getDefaultsFor_getDateTimeOptions, getDateID, getTimeID
} from './privy';

// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
// Default `options`:  {
//				includeFullYear: false, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator:	'-', separateEach: false
//			}
// (See `getDateTimeOptions` at the bottom for more info.)
// You can change the order that year, month, day appear using `ymdOrder`.
// You can change the order that hour, minutes, seconds appear using `hmsOrder`.
// You can use any `separator` you want.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.


export function getDateTimeID(
	// If left undefined, we use `defaults`.
	options: getDateTimeOptions = undefined
): string {

	let defaults = getDefaultsFor_getDateTimeOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	defaults['order'] = defaults.ymdOrder;
	let dateStr = getDateID(defaults);

	defaults['order'] = defaults.hmsOrder;
	let timeStr = getTimeID(defaults);

	return (dateStr + defaults.separator + timeStr);
}
