// https://adventjs.dev/en/challenges/2023/1

function findFirstRepeated(gifts) {
	const uniqueIds = new Set()
	for (const element of gifts) {
		if (uniqueIds.has(element)) {
			return element
		}
		uniqueIds.add(element)
	}
	return -1
}
