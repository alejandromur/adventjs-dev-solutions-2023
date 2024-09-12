// https://adventjs.dev/en/challenges/2023/5

function cyberReindeer(road, time) {
	const output = [road]
	const SLED = 'S'
	const CLOSED_BARRIER = '|'
	const OPENED_BARRIER = '*'

	const barriersPositions = [...road].reduce((acc, char, idx) => {
		if (char === CLOSED_BARRIER) acc.push(idx)
		return acc
	}, [])

	function moveSled(i, path) {
		const roadArr = [...path]
		const sledPosition = roadArr.indexOf(SLED)

		if (roadArr[sledPosition + 1] === CLOSED_BARRIER && i < 5) {
			return roadArr.join('')
		}

		if (sledPosition + 1 < roadArr.length) {
			roadArr[sledPosition] = '.'
			roadArr[sledPosition + 1] = SLED
		}

		if (i >= 5) {
			barriersPositions.forEach((pos) => {
				if (sledPosition + 1 > pos) {
					roadArr[pos] = OPENED_BARRIER
				}
			})
		}

		return roadArr.join('')
	}

	function openBarriers(path) {
		return path.replaceAll(CLOSED_BARRIER, OPENED_BARRIER)
	}

	for (let i = 1; i < time; i++) {
		let currentPath = i === 5 ? openBarriers(output[i - 1]) : output[i - 1]
		let newString = moveSled(i, currentPath)

		output.push(newString)
	}

	return output
}

// First approach
/*
function cyberReindeer(road, time) {
	const output = [road]
	const SLED = 'S'
	const BARRIER = '|'
	const OPENED_BARRIER = '*'

	function getBarriersPositions() {
		const positions = []
		road.split('').findIndex((char, index) => {
			if (char === BARRIER) {
				positions.push(index)
			}
		})
		return positions
	}

	function restablishBarriers(newPath, sledPosition) {
		const stringWithBarriers = newPath
			.split('')
			.map((char, index) => {
				if (!barriersPositions.includes(index)) {
					return char
				}

				if (sledPosition > index) {
					return OPENED_BARRIER
				} else {
					return char
				}
			})
			.join('')

		return stringWithBarriers
	}

	function moveSlid(i, path) {
		const sledPosition = path.indexOf(SLED)
		const prev = path.substring(0, sledPosition)
		let current = path.substring(sledPosition, sledPosition + 2)
		const next = path.substring(sledPosition + 2)

		switch (current) {
			case 'S|':
				break
			case 'S*':
				current = '.S'
				break
			default:
				current = '.S'
		}

		let newPath = prev.concat(current).concat(next)

		if (i >= 5) {
			newPath = restablishBarriers(newPath, sledPosition + 1)
		}

		return newPath
	}

	function openBarriers(path) {
		return path.replaceAll('|', '*')
	}

	const barriersPositions = getBarriersPositions()

	for (let i = 1; i < time; i++) {
		let currentPath = i === 5 ? openBarriers(output[i - 1]) : output[i - 1]
		let newString = moveSlid(i, currentPath)

		output.push(newString)
	}

	return output
}
*/
