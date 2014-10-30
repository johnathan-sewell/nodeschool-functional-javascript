function reduce(arr, func, initial) {
	return (function reduceRecursive(memo, index) {
		if (index > arr.length - 1) return memo;
		func(memo, arr[index], index, arr);
		return reduceRecursive(memo, ++index);
	})(initial, 0);
}
module.exports = reduce;