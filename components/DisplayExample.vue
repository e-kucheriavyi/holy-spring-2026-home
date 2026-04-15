<script setup>
	import { ref, computed, onMounted } from "vue"

	const RES = 8
	const PAD = 8
	const D = 32
	const FILL_STYLE = "red"
	const STROKE_STYLE = "#fff"

	const el = ref(null)

	const speed = ref(16)
	const done = ref(false)

	let index = 0
	let t = 0

	const update = () => {
		t += 1

		if (t < speed.value) {
			return
		}

		t = 0

		index += 1
		if (index >= RES * RES) {
			index = 0
		}
	}

	const draw = () => {
		if (el.value === null) {
			return
		}

		update()
	
		const canvas = el.value
		canvas.style = `width: ${PAD*4+D*RES}px; height: ${PAD*4+D*RES}px;`
		canvas.width = canvas.clientWidth*2
		canvas.height = canvas.clientHeight*2

		const ctx = canvas.getContext("2d")
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		ctx.fillStyle = FILL_STYLE
		ctx.strokeStyle = STROKE_STYLE
		ctx.lineWidth = 2

		const r = D * 0.5

		let i = 0

		for (let y = 0; y < RES; y++) {
			for (let x = 0; x < RES; x++) {
				ctx.beginPath()

				const xx = (x+1) * D * 2
				const yy = (y+1) * D * 2

				ctx.arc(xx, yy, D, 0, Math.PI*2)

				if (i === index) {
					ctx.fill()
				}

				ctx.stroke()

				i += 1
			}
		}

		if (el.value !== null) {
			requestAnimationFrame(() => { draw() })
		}
	}

	onMounted(() => {
		// update()

		draw()
	})

	// onUnmounted(() => {
	//	done.value = true
	//})
</script>

<template>
	<div class="pwm">
		<div class="pwm-controls">
			<h1>Display</h1>
			<input type="range" v-model="speed" min="1" max="16" />
		</div>
		<div class="pwm-preview">
			<canvas ref="el" class="canvas"></canvas>
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
