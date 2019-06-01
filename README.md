# getDateTimeID(options?): string

## options
```ts
{
    includeFullYear?: boolean, // default false
    ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy', // default 'ymd'
    hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm', // default 'hms'
    separator?: string, // default '-' 
    separateEach?: boolean // default false
}
```

## Examples
```ts
getDateTime();
// --> '190522-142210'

getDateTime({ymdOrder: 'mdy'});
// --> '052219-142210'

getDateTime({ymdOrder: 'mdy', separator: ''});
// --> '052219142210'

getDateTime({ymdOrder: 'mdy', separateEach: true});
// --> '05-22-19-14-22-10'
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
