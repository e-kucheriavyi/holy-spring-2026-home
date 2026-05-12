<script setup>
	import { ref } from "vue"

	const ENDPOINT = "http://localhost:3000"

	const update = async () => {
		const r = await fetch(`${ENDPOINT}/lamp/state`)
		const t = await r.text()

		on.value = t === "1"
	}

	const toggle = async () => {
		await fetch(`${ENDPOINT}/lamp/toggle`)
		on.value = !on.value
	}

	const on = ref(false)

	update()
</script>

<template>
	<button
		class="demo-btn"
		@click="toggle"
	>{{ on ? "ON" : "OFF" }}</button>
</template>

<style scoped>
	.demo-btn {
		font-family: "Press Start 2P" !important;
		font-size: 10rem;
	}
</style>
