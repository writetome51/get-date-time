export declare function getDateTime(options?: getDateTimeOptions): string;


export interface getDateTimeOptions {
	includeFullYear?: boolean;
	includeDate?: boolean;
	includeTime?: boolean;
	ymdOrder?: DateFormatOrder;
	hmsOrder?: TimeFormatOrder;
	separator?: string;
	separateEach?: boolean;
}


export declare type DateFormatOrder = 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy';
export declare type TimeFormatOrder = 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm';
