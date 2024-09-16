// https://adventjs.dev/en/challenges/2023/7

function drawGift(size, symbol) {
	function drawLine(length, symbol) {
		return new Array(length).fill(symbol).join('')
	}

	const SPACE = String.fromCharCode(32)
	const BOUND = String.fromCharCode(35)

	let draw = ''
	let offset = size - 1
	let total_size = size + offset
	let decrease_factor = 0

	for (let row = 1; row <= total_size; row++) {
		let line = ''

		if (row === 1) {
			let empty = drawLine(offset, SPACE)
			let shape = drawLine(size, BOUND)
			line = empty.concat(shape)
		} else if (row === size) {
			let shape = drawLine(size, BOUND)
			let side = drawLine(size - 2, symbol)
			line = shape.concat(side).concat(BOUND)
		} else if (row === total_size) {
			let shape = drawLine(size, BOUND)
			line = shape
		} else if (row < size) {
			let empty = drawLine(offset, SPACE)
			let front = drawLine(size - 2, symbol)
			let side = drawLine(row - 2, symbol)
			line = `${empty}${BOUND}${front}${BOUND}${side}${BOUND}`
		} else {
			let front = drawLine(size - 2, symbol)
			let side = drawLine(size - 2 - decrease_factor, symbol)
			line = `${BOUND}${front}${BOUND}${side}${BOUND}`
		}

		if (row <= size && offset > 0) {
			offset--
		} else {
			decrease_factor++
		}

		draw += `${line}\n`
	}

	return draw
}
