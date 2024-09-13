// https://adventjs.dev/en/challenges/2023/6

function maxDistance(movements) {
	function calculateMaxDistance(backwards, forwards, both) {
		return Math.abs(backwards - forwards) + both
	}

	const BACKWARDS = '<'
	const FORWARDS = '>'

	let backwards = 0
	let forwards = 0
	let both = 0

	movements.split('').forEach((movement) => {
		if (movement === BACKWARDS) {
			backwards++
		} else if (movement === FORWARDS) {
			forwards++
		} else {
			both++
		}
	})

	const distance = calculateMaxDistance(backwards, forwards, both)
	return distance
}
