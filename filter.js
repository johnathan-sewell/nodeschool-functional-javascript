function getShortMessages(messages) {
	return messages.filter(function isLessThan50Chars(item) {
		return item.message.length < 50;
	}).map(function extractMessage(item) {
		return item.message;
	});
}

module.exports = getShortMessages