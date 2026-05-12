<script setup>
	import { onMounted, onUnmounted, ref } from "vue"

	const props = defineProps({
		step: { type: Number, default: 0.01 },
	})

	const orange = "#FFBE30"
	const gray = "#555"
	const bg = "#000"
	const skipFPS = 4

	const model = defineModel({ type: Number, default: 0.2 })

	const setMin = () => {
		model.value = 0
	}
	const setMax = () => {
		model.value = 1
	}
</script>

<template>
	<div class="range">
		<input
			type="range"
			:min="0"
			:max="1.0"
			:step="0.1"
			v-model.number="model"
		/>
		<div class="scale">
			<div @click="setMin">0.0</div>
			<div @click="setMax">1.0</div>
		</div>
	</div>
</template>

<style scoped>
	.range {
		width: 100%;
		padding: 1rem;
	}
	.range input {
		width: 100%;
	}
	.scale {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
</style>

