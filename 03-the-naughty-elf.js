// https://adventjs.dev/en/challenges/2023/3

function findNaughtyStep(original, modified) {
	let [major, minor] =
		original.length > modified.length
			? [original, modified]
			: [modified, original]

	for (let i = 0; i < minor.length; i++) {
		if (major[i] !== minor[i]) {
			return major[i]
		}
	}

	return major.length !== minor.length ? major[major.length - 1] : ''
}
