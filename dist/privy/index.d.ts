import { getDateIDOptions, getTimeIDOptions } from './interfaces';
export declare function getDateID(options?: getDateIDOptions): string;
export declare function getTimeID(options?: getTimeIDOptions): string;
export declare function __getDateOrTimeID(defaultOptions: any, options: getDateIDOptions | getTimeIDOptions, getParts: () => Object): any;
export declare function getDefaultsFor_getTimeIDOptions(): getTimeIDOptions;
export declare function getDefaultsFor_getDateIDOptions(): getDateIDOptions;
export declare const default_ymdOrder = "ymd";
export declare const default_hmsOrder = "hms";
