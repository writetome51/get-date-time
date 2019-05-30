export declare function getDateTime(options?: getDateTimeOptions): string;


export interface getDateTimeOptions {
	includeDate?: boolean;
	includeTime?: boolean;
	ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy';
	hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm';
	separator?: string;
	separateEach?: boolean;
}
