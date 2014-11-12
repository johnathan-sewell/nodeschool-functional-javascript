var countWords = function(words) {
	return words.reduce(function(memo, word) {
		memo[word] = (memo[word] || 0) + 1;
		return memo;
	}, {});
};
module.exports = countWords;