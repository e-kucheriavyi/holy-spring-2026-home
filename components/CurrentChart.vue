<script setup>
	import { onMounted, ref, onUnmounted } from "vue"
	import { initCurrentChart } from "current-chart"

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
		const kill = initCurrentChart(el.value, { lineColor: "#ffbe30" })
		onUnmounted(() => {
			kill()
		})
	})
</script>

<template>
	<div
		ref="el"
		:data-voltage="voltage"
		:data-max="max"
		:data-type="type"
		:data-speed="speed"
		:data-freq="freq"
		:data-len="len"
		class="chart"
	></div>
</template>

<style scoped>
	.chart {
		width: 100%;
		height: 400px;
	}
</style>

