# alphabetize(strings): void

Re-orders `strings` alphabetically.  
If not every item in `strings` is type 'string', the function will attempt to  
coerce the item into a string before doing the comparisons.  None of the  
items are modified.


An example of result:
```
[
    '__100',  '_10',  '-',  ',',  '!',  '?',  '.',  '(',  ')',  '@',  '*',   '/', 
    '\\', '&',  '#',  '%',  '^', '+','<',  '=',  '>',  '$',  '0',  '000',  '100',  
    '1000',  '2', '30',  'A',  'Â',  'Ã',  'aaa',  'aab',  'aac', 'aardvark', 'AE',  
    'Ǣ',  'Atco', 'atco',  'bat',  'book',  'copy',  'i',  'Í',  'Ô',  'q',  'x',  
    'Zaa', 'zaa',  'Zebra'
]
```

## Installation
`npm i  @writetome51/alphabetize`

## Loading
```
// if using TypeScript:
import {alphabetize} from '@writetome51/alphabetize';
// if using ES5 JavaScript:
var alphabetize = require('@writetome51/alphabetize').alphabetize;
```