// https://adventjs.dev/en/challenges/2023/4

function decode(message) {
	while (message.includes('(')) {
		message = message.replace(/\(([^()]+)\)/g, (match, group1) => {
			return group1.split('').reverse().join('')
		})
	}
	return message
}
