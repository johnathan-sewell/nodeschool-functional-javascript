function repeat(operation, num) {
	operation.call();
	num--;
	if(num > 0){
		repeat(operation, num);
	}
}
 // Do not remove the line below
module.exports = repeat
