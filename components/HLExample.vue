<script setup>
	import { ref, computed } from "vue"
	const on = ref(false)
</script>

<template>
	<div class="hl">
		<div class="hl-controls">
			<h1>HIGH <span class="red">/</span> LOW</h1>
			<div class="hl-chart" @click="on = !on">
				<div
					class="hl-high"
					:style="`flex: ${on ? 1 : 0};`"
				>{{ on ? "ON" : ""}}</div>
				<div class="hl-low" :style="`flex: ${on ? 0 : 1};`">{{ on ? "" : "OFF"}}</div>
			</div>
		</div>
		<div class="hl-preview">
			<LedElement :value="on ? 255 : 0"></LedElement>
		</div>
	</div>
</template>

<style scoped>
	.hl {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
	}

	.hl-chart {
		display: flex;
		width: 80%;
		aspect-ratio: 1;
		border: 1px solid #fff;
	}

	.hl-low, .hl-high {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 5rem;
		cursor: pointer;
	}

	.hl-high {
		border-top: 16px solid blue;
	}

	.hl-low {
		border-bottom: 16px solid blue;
	}

	.hl-controls input {
		height: 2rem;
		width: 100%;
	}

	.hl-controls, .hl-preview {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
	}

	.hl-preview {
		align-items: center;
		justify-content: center;
	}
</style>
