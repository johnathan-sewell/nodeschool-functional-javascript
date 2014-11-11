/*
Write a function duckCount that returns the number of arguments passed 
to it which have a property 'quack' defined directly on them. Do not 
match values inherited from prototypes.

We can use Object#hasOwnProperty to detect if an object 'has' a 
property defined on itself (i.e. not inherited from its prototype)
we also have Object.getPrototypeOf(object)

*/
function duckCount() {
	//convert arguments to *real* array
	//default to slice(0, arguments.length):
	var argsArray = Array.prototype.slice.call(arguments);

	return argsArray.reduce(function(prev, curr, index, arr) {
		//use Object.hasOwnProperty - curr may not have 
		//prototype link to Object
		return (Object.prototype.hasOwnProperty.call(curr || {}, 'quack') ? prev + 1 : prev);
	}, 0);

/* official solution
    return Array.prototype.slice.call(arguments).filter(function(obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
*/

}

module.exports = duckCount