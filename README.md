Function that orders an array of strings alphabetically and returns void.
If not every item in the array is a string, the function will attempt to coerce
it into a string by using String(item).

alphabetize(strings);

An example of result:

[
'__100',  '_10',  '-',  ',',  '!',  '?',  '.',  '(',  ')',  '@',  '*',   '/', '\\', '&',  '#',  '%',  '^',
'+','<',  '=',  '>',  '$',  '0',  '000',  '100',  '1000',  '2',  '30',  'A',  'Â',  'Ã',  'aaa',  'aab',  'aac',
'aardvark',  'AE',  'Ǣ',  'Atco',  'atco',  'bat',  'book',  'copy',  'i',  'Í',  'Ô',  'q',  'x',  'Zaa',
'zaa',  'Zebra'
]

