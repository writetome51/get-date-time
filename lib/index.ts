import { DateFormatOrder, TimeFormatOrder } from 'types-date-format-order-time-format-order';
import { getDateID, getTimeID, default_ymdOrder, default_hmsOrder } from './privy';
import { getDefaultsFor_YearSeparatorOptions, YearSeparatorOptions }
	from '@writetome51/year-separator-options';
import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';


// Returns current date and time as string of digits.
// Default format is yymmdd-hhmmss, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
//
// Default `options`:  {
//				includeFullYear: false, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator: '-', separateEach: false
//			}
//
// Change the order that year, month, day appear using `ymdOrder`.
// Change the order that hour, minutes, seconds appear using `hmsOrder`.
// `separator` can be any string.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.


export function getDateTimeID(
	// If left undefined, we use `defaults`.
	options: getDateTimeIDOptions = undefined
): string {

	let defaults = getDefaultsFor_getDateTimeIDOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	defaults['order'] = defaults.ymdOrder;
	let dateStr = getDateID(defaults);

	defaults['order'] = defaults.hmsOrder;
	let timeStr = getTimeID(defaults);

	return (dateStr + defaults.separator + timeStr);
}


export function getDefaultsFor_getDateTimeIDOptions(): getDateTimeIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['ymdOrder'] = default_ymdOrder;
	defaults['hmsOrder'] = default_hmsOrder;
	return defaults;
}


export interface getDateTimeIDOptions extends YearSeparatorOptions {
	ymdOrder?: DateFormatOrder,
	hmsOrder?: TimeFormatOrder
}
