// much more efficient space complexity O(1) that str.split('').reverse().join('') O(n). Time complexity O(n)
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

// Time complexity O(n^2), space complexity O(1).
function longestPalindrome(str) {
	str = str.toLowerCase().replace(/[\W_]/g, '');
	let longest = '',
		i = 0;

	while (i < str.length - 1) {
		let lp = Math.floor(i - .5),
			rp = Math.ceil(i + .5);

		if (!longest) longest = str[i];

		while (str[lp] === str[rp] && lp >= 0 && rp < str.length) {
			let pl = str.slice(lp, rp + 1);
			if (longest.length < pl.length) longest = pl;
			--lp;
			++rp;
		}
		i += 0.5;

	}
	return longest;
}