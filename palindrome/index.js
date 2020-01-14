// much more efficient space complexity(constant) that str.split('').reverse().join('') (O n)
function isPalindrome(str) {
	// remember underscore is a word character.
	str = str.toLowerCase().replace(/[\W_]/g, '');
	let lp = 0, rp = str.length - 1;

	while (lp < rp) {
		if (str[lp] != str[rp]) return false;
		++lp;
		--rp;
	}
	return true;
}
