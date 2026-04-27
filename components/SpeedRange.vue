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
	const el = ref(null)

	let mounted = false
	let skipped = 0

	const clear = (canvas, ctx) => {
		ctx.clearRect(0, 0, 1, 1)
	}

	const draw = (canvas, ctx) => {
		if (!mounted) {
			return
		}

		skipped += 1

		if (skipped < skipFPS) {
			requestAnimationFrame(() => { draw(canvas, ctx) })
			return
		}

		skipped = 0

		const w = canvas.width
		const h = canvas.height


		ctx.save()

		ctx.scale(w, h)

		clear(canvas, ctx)

		ctx.lineWidth = 0.01

		ctx.save()

		ctx.translate(0.5, 0.5)

		ctx.rotate(Math.PI * model.value * 1.8 - Math.PI * 0.9)

		const r = 0.2

		ctx.fillStyle = gray

		ctx.beginPath()
		ctx.arc(0, 0, r, 0, Math.PI * 2)
		ctx.fill()

		ctx.beginPath()
		ctx.moveTo(0, -0.4)
		ctx.lineTo(-0.05, -0.38)
		ctx.lineTo(-0.2, 0.3)
		ctx.lineTo(0.2, 0.3)
		ctx.lineTo(0.05, -0.38)
		ctx.lineTo(0, -0.4)
		ctx.fill()

		ctx.strokeStyle = orange
		ctx.lineWidth = 0.05

		ctx.beginPath()
		ctx.moveTo(0, -0.4)
		ctx.lineTo(0, -0.2)
		ctx.stroke()

		ctx.restore()

		ctx.restore()

		requestAnimationFrame(() => { draw(canvas, ctx) })
	}

	let pressed = false

	const handleDown = () => {
		pressed = true
	}

	const handleUp = () => {
		pressed = false
	}

	const handleMove = (e) => {
		if (!pressed) {
			return
		}

		const x = e.clientX - e.target.offsetLeft - 30

		const s = Math.min(Math.max(0, x / el.value.width), 1)

		model.value = s
	}

	const setMin = () => {
		model.value = 0.0
	}

	const setMax = () => {
		model.value = 1.0
	}

	onMounted(() => {
		if (el.value === null) {
			return
		}
		const canvas = el.value
		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight
		const ctx = canvas.getContext("2d")
		mounted = true
		draw(canvas, ctx)
		window.addEventListener("mouseup", handleUp)
	})

	onUnmounted(() => {
		mounted = false
		window.removeEventListener("mouseup", handleUp)
	})
</script>

<template>
	<div class="knob">
		<canvas
			ref="el"
			class="canvas"
			@mousemove="handleMove"
			@mousedown="handleDown"
			@mouseup="handleUp"
		></canvas>
	<div class="scale">
		<div @click="setMin">0.0</div>
		<div @click="setMax">1.0</div>
	</div>
	</div>
</template>

<style scoped>
	.canvas {
		aspect-ratio: 1;
	}

	.knob {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.scale {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
</style>

