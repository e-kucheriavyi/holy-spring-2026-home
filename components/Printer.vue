<script setup>
	import { ref, onMounted, computed } from "vue"

	const props = defineProps({
		text: { type: String },
		noRed: { type: Boolean, default: false },
	})

	const delay = 30
	const freeticks = 4

	const t = ref(0)

	const update = () => {
		t.value = Math.min(Math.max(0, t.value + 1), props.text.length + freeticks)

		if (t.value >= props.text.length + freeticks) {
			return
		}

		setTimeout(() => {
			update()
		}, delay)
	}

	const chars = "=,/.:?!()*[]«»÷×-—+'`=\""

	const result = computed(() => {
		if (t.value < freeticks) {
			return ""
		}

		const txt = props.text.slice(0, t.value - freeticks)

		if (props.noRed) {
			return txt
		}

		const r = []

		for (let i = 0; i < txt.length; i++) {
			const c = txt[i]
			if (chars.includes(c)) {
				r.push(`<span class="red">${c}</span>`)
				continue
			}
			r.push(c)
		}

		return r.join("")
	})

	onMounted(() => {
		setTimeout(() => {
			update()
		}, 1000)
	})
</script>

<template>
	<span v-html="result"></span>
</template>

