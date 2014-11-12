//Use Array#reduce to implement a simple version of Array#map.
// arr.reduce(callback[, initialValue])

module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(memo, value) {
		memo.push(fn(value));
		return memo;
	}, []);
};

//official solution:
/*
      module.exports = function map(arr, fn) {
        return arr.reduce(function(acc, item, index, arr) {
          return acc.concat(fn(item, index, arr))
        }, [])
      }
*/