/*
Use partial application to create a function that fixes the first 
argument to console.log.  i.e. Implement a logging function that 
prepends a namespace string to its output.
*/
function logger(namespace) {
	return function(){
        var args = [namespace].concat(Array.prototype.slice.call(arguments))
		console.log.apply(console, args);
	};
}
module.exports = logger;