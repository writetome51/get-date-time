export declare function getDateTime(options?: getDateTimeOptions): string;
export declare function getFormattedDate(options?: getFormattedDateOptions): string;
export declare function getFormattedTime(options?: getFormattedTimeOptions): string;
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
    includeDate?: boolean;
    includeTime?: boolean;
    ymdOrder?: DateFormatOrder;
    hmsOrder?: TimeFormatOrder;
}
