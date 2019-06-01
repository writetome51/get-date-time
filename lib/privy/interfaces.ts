export type DateFormatOrder = 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy';
export type TimeFormatOrder = 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm';


export interface SeparatorOptions {
	separator?: string,
	separateEach?: boolean
}


export interface getTimeIDOptions extends SeparatorOptions {
	order?: TimeFormatOrder
}


export interface YearSeparatorOptions extends SeparatorOptions {
	includeFullYear?: boolean
}


export interface getDateIDOptions extends YearSeparatorOptions {
	order?: DateFormatOrder,
}


export interface getDateTimeIDOptions extends YearSeparatorOptions {
	ymdOrder?: DateFormatOrder,
	hmsOrder?: TimeFormatOrder
}
