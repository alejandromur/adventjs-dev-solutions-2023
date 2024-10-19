// https://adventjs.dev/en/challenges/2023/9

function adjustLights(lights) {
	const GREEN = '🟢'
	const RED = '🔴'

	const isGreen = (value) => value === GREEN

	const calculateErrors = (array) => {
		let errors = 0
		array.reduce((acc, cur, i) => {
			if (acc[i - 1]) {
				const prev = isGreen(acc[i - 1])
				const current = isGreen(cur)

				if (prev === current) {
					errors++
					acc.push(current ? RED : GREEN)
				} else {
					acc.push(cur)
				}
			} else {
				acc.push(cur)
			}

			return acc
		}, [])

		return errors
	}

	const ltr_errors = calculateErrors(lights)
	const rtl_errors = calculateErrors(lights.reverse())

	return Math.min(ltr_errors, rtl_errors)
}
