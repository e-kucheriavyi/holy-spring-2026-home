const sleep = async (duration: number) => new Promise((r, _) => setTimeout(r, duration))

const setup = async () => {
	await sleep(2_000)

	const sl = document.querySelector("#slideshow") as HTMLDivElement

	if (sl === null) {
		return
	}

	const grid = document.createElement("div")
	grid.className = "slide-grid"

	// document.body.appendChild(grid)

	const cols = 24

	for (let i = 0; i < cols; i++) {
		const c = document.createElement("div")
		grid.appendChild(c)
	}
}

export default () => {
	setup()
}

