# getDateTime(
	options? :  {
		includeDate?: boolean,  // default is true
		includeTime?: boolean,  // default is true
		ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy',  // default is 'ymd'
		hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm',  // default is 'hms'
		separator?: string,  // default is '-'
		separateEach?: boolean  // default is false
	}
): string

## Examples
```ts
getDateTime();
// --> '190522-142210'

getDateTime({includeTime: false, separateEach: true});
// --> '19-05-22'

getDateTime({ymdOrder: 'mdy'});
// --> '052219-142210'

getDateTime({ymdOrder: 'mdy', separator: ''});
// --> '052219142210'

getDateTime({ymdOrder: 'mdy', separateEach: true});
// --> '05-22-19-14-22-10'

getDateTime({hmsOrder: 'smh',  includeDate: false,  separator: '__',  separateEach: true});
// --> '10__22__14'
```


## Installation
`npm i  @writetome51/get-date-time`

## Loading
```ts
// if using TypeScript:
import {getDateTime} from '@writetome51/get-date-time';
// if using ES5 JavaScript:
var getDateTime = require('@writetome51/get-date-time').getDateTime;
```
