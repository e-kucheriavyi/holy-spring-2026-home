<script setup>
	import { onMounted, ref } from "vue"
	import { initRelayDemo } from "current-chart"

	const el = ref(null)
	const on = ref(false)

	onMounted(() => {
		if (el === null) {
			return
		}
		initRelayDemo(el.value)
	})
</script>

<template>
	<div class="wrapper">
		<div class="controls">
			<h1>Реле</h1>
			<div class="hl-chart" @click="on = !on">
				<div
					class="hl-high"
					:style="`flex: ${on ? 1 : 0};`"
				>{{ on ? "ON" : ""}}</div>
				<div class="hl-low" :style="`flex: ${on ? 0 : 1};`">{{ on ? "" : "OFF"}}</div>
			</div>
		</div>
		<div style="flex: 2;">
			<div
				ref="el"
				:data-stage="$nav.clicks >= 5 ? 5 : $nav.clicks"
				:data-active="on ? 1 : 0"
				class="demo"
			></div>
		</div>
	</div>
</template>

<style scoped>
	.wrapper {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.controls {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
		flex: 1;
	}

	.demo {
		width: 100%;
		height: 100%;
	}

	.btn {
		position: absolute;
		z-index: 1;
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
</style>
