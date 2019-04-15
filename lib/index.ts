import { errorIfNotArray } from 'error-if-not-array';


export function alphabetize(strings): void {
	errorIfNotArray(strings);
	strings.sort((a, b) => {
		return String(a).localeCompare(String(b), 'en', {caseFirst: 'upper'});
	});
}
