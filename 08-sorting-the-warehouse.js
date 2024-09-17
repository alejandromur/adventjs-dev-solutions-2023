// https://adventjs.dev/en/challenges/2023/8

function organizeGifts(gifts) {
	function splitIntoGroups(str) {
		const regex = /\d+[a-zA-Z]/g
		const groups = str.match(regex)
		return groups || []
	}

	function splitNumberAndLetter(str) {
		const regex = /^(\d+)([a-zA-Z])$/
		const match = str.match(regex)

		if (match) {
			return [match[1], match[2]]
		} else {
			return null
		}
	}

	function composeWrappers(gift, quantities) {
		const patterns = [`[${gift}]`, `{${gift}}`]
		return quantities.reduce((acc, value, index) => {
			if (value === 0) return acc

			if (index === 2) {
				return (acc += `(${gift.repeat(value)})`)
			}

			return (acc += patterns[index].repeat(value))
		}, '')
	}

	function organizeGroups(groups) {
		return groups.reduce((acc, group) => {
			const [quantity, gift] = splitNumberAndLetter(group)

			const pallets = Math.floor(quantity / PALLET)
			const leftover = quantity % PALLET
			const boxes = Math.floor(leftover / BOX)
			const bags = leftover % BOX

			const distribution = composeWrappers(gift, [pallets, boxes, bags])
			return (acc += distribution)
		}, '')
	}

	const PALLET = 50
	const BOX = 10

	const groups = splitIntoGroups(gifts)
	const warehouseOrganization = organizeGroups(groups)

	return warehouseOrganization
}
