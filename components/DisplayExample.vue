<script setup>
	import { ref, computed, onMounted } from "vue"

	const speed = ref(100)
	const done = ref(false)

	const index = ref(0)

	const pixels = []

	for (let i = 0; i < 8*8; i++) {
		pixels.push([255, 0, 0])
	}

	const pixelColor = (p, i) => {
		if (i === index.value || speed.value < 16) {
			return `background-color: rgb(${p[0]}, ${p[1]}, ${p[2]});`
		}
	}

	const update = () => {
		index.value += 1
		if (index.value >= pixels.length) {
			index.value = 0
		}
		if (done.value) {
			return
		}
		setTimeout(update, speed.value > 16 ? speed.value : 16)
	}

	onMounted(() => {
		update()
	})

	// onUnmounted(() => {
	//	done.value = true
	//})
</script>

<template>
	<div class="pwm">
		<div class="pwm-controls">
			<h1>Display</h1>
			<input type="range" v-model="speed" min="16" max="100" />
			<div style="font-size: 2rem;">{{ speed }}</div>
		</div>
		<div class="pwm-preview">
			<div class="pixels">
				<div
					v-for="(p, i) in pixels"
					class="pixel"
					:style="pixelColor(p, i)"
				></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.pwm {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
	}

	.pixels {
		display: flex;
		flex-wrap: wrap;
		width: calc(32px * 8);
	}

	.pixel {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid #fff;
	}

	.pwm-controls input {
		height: 2rem;
		width: 100%;
	}

	.pwm-controls, .pwm-preview {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
	}

	.pwm-preview {
		align-items: center;
		justify-content: center;
	}
</style>
