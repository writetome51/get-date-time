export declare function getYearMonthDay_asArray(includeFullYear?: boolean): string[];


export declare function getHoursMinutesSeconds_asArray(): string[];


export declare function ensureMoreThanOneDigit(str: any): any;


export declare function getDateID(options?: getFormattedDateOptions): string;


export declare function getTimeID(options?: getFormattedTimeOptions): string;


export declare function __getDateOrTimeID(options: any, getKeys: () => Object): any;


export declare type DateFormatOrder = 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy';
export declare type TimeFormatOrder = 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm';


export interface FormattingSeparatorOptions {
	separator?: string;
	separateEach?: boolean;
}


export interface getFormattedTimeOptions extends FormattingSeparatorOptions {
	order?: TimeFormatOrder;
}


export interface YearFormattingSeparatorOptions extends FormattingSeparatorOptions {
	includeFullYear?: boolean;
}


export interface getFormattedDateOptions extends YearFormattingSeparatorOptions {
	order?: DateFormatOrder;
}


export interface getDateTimeOptions extends YearFormattingSeparatorOptions {
	ymdOrder?: DateFormatOrder;
	hmsOrder?: TimeFormatOrder;
}


export declare function getDefaultsFor_FormattingSeparatorOptions(): FormattingSeparatorOptions;


export declare function getDefaultsFor_getFormattedTimeOptions(): getFormattedTimeOptions;


export declare function getDefaultsFor_YearFormattingSeparatorOptions(): YearFormattingSeparatorOptions;


export declare function getDefaultsFor_getFormattedDateOptions(): getFormattedDateOptions;


export declare function getDefaultsFor_getDateTimeOptions(): getDateTimeOptions;


export declare let default_ymdOrder: string;
export declare let default_hmsOrder: string;
export declare let default_includeFullYear: boolean;
export declare let default_separator: string;
export declare let default_separateEach: boolean;
