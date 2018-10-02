import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray';


export function alphabetize(strings): void {
	errorIfNotArray(strings);
	strings.sort((a, b) => {
		return a.localeCompare(b, 'en', {caseFirst: 'upper'});
	});
}
