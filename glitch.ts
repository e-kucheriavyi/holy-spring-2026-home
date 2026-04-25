import { ref, onMounted } from "vue"

const glitchClass = ref("")

let running = false

export const useGlitch = () => {
	const update = () => {
		running = true
		const t = glitchClass.value ? 2000 : 300
		glitchClass.value = glitchClass.value ? "" : "glitch"
		setTimeout(() => { update() }, t)
	}

	onMounted(() => {
		if (running) {
			return
		}
		update()
	})
	return { glitchClass }
}

