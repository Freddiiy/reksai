export function capitalize(str: string) {
	const lowercase = str.toLowerCase();
	return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
}