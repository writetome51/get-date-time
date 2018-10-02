export function alphabetize(strings): void {
	strings.sort((a, b) => {
		return a.localeCompare(b, 'en', {caseFirst: 'upper'});
	});
}
