function reduce(arr, func, initial) {
	return (function reduceRecursive(memo, index) {
		if (index > arr.length - 1) return memo;
		func(memo, arr[index], index, arr);
		return reduceRecursive(memo, ++index);
	})(initial, 0);
}
module.exports = reduce;


/* Example usage */
function sum(memo, current, index, array) {
	return memo + current;
}
reduce([1, 2, 3], sum, {});