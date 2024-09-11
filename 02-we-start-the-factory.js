// https://adventjs.dev/en/challenges/2023/2

function manufacture(gifts, materials) {
	return gifts
		.map((gift) => {
			if (gift.split('').every((element) => materials.includes(element))) {
				return gift
			}
		})
		.filter((element) => element !== undefined)
}
