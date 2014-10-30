function reduce(arr, fn, initial) {
	return (function reduceOne(index, value) {
			if (index > arr.length - 1) return value // end condition
			return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
		})(0, initial) // IIFE. kick off recursion with initial values
}

//Mine
var index = 0;
function reduce(arr, func, memo) {
	var current, 
		tail;

	if(arr.length === 0) return memo;

	current = arr[0];
	func(memo, current, index++, arr);

	tail = arr.slice(1);
	return reduce(tail, func, memo);
}
module.exports = reduce;