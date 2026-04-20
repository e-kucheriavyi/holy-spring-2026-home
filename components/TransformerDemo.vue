<script setup>
	import { onMounted, ref } from "vue"
	import { initTransformerDemo } from "current-chart"

	const { type, voltage, freq, speed, len, max } = defineProps({
		type: {
			type: String,
			default: "AC",
			validator: (v) => ["AC", "DC", "PWM", "PREDC"].includes(v),
		},
		voltage: { type: Number, default: 220 },
		max: { type: Number, default: 300 },
		freq: {
			type: Number,
			default: 50,
		},
		speed: {
			type: Number,
			default: 0.01,
		},
		len: {
			type: Number,
			default: 0.5,
		},
	})

	const el = ref(null)


	onMounted(() => {
		if (el === null) {
			return
		}
		initTransformerDemo(el.value)
	})
</script>

<template>
	<div
		ref="el"
		:data-stage="$nav.clicks >= 5 ? 5 : $nav.clicks"
		:data-first-coil="$nav.clicks < 6 ? 12 : 32"
		:data-first-width="16"
		:data-second-coil="$nav.clicks === 6 ? 4 : $nav.clicks === 7 ? 2 : 8"
		:data-second-width="$nav.clicks < 7 ? 16 : 128"
		class="demo"
	></div>
</template>

<style scoped>
	.demo {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
</style>
