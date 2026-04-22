<script setup>
	import { ref, onMounted, watch } from "vue"

	const el = ref(null)
	const el2 = ref(null)

	const clear = (canvas, ctx) => {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
	}

	const s = 0.8
	const steps = 10

	const cam = { x: 0, y: 0, z: 0, rotX: 0, rotY: 0, fov: 700 }

	const project = (canvas, p) => {
		// transform world -> camera space
		const dx = p.x - cam.x;
		const dy = p.y - cam.y;
		const dz = p.z - cam.z;
		const eps = 0.001
		const scale = cam.fov / (z + eps)
		return {
			x: canvas.width / 2 + rp.x * scale,
			y: canvas.height / 2 - rp.y * scale,
			z: p.z,
		}
	}


	const draw = (canvas, ctx) => {
		clear(canvas, ctx)

		const w = canvas.width
		const h = canvas.height
		
		ctx.lineWidth = 3
		ctx.strokeStyle = "green"

		// ctx.strokeRect(200, 100, 100, 100)

		const side = w * 0.5 / steps

		ctx.beginPath()

		for (let x = 0; x < w * 0.5; x += side) {
			ctx.moveTo(x, h)
			ctx.lineTo(x + side * s, h * 0.5)
		}

		ctx.stroke()

		requestAnimationFrame(() => {
			draw(canvas, ctx)
		})
	}

	onMounted(() => {
		if (el.value === null) {
			return
		}
		const canvas = el.value
		const ctx = canvas.getContext("2d")

		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight
		
		draw(canvas, ctx)
	})
</script>

<template>
	<canvas class="canvas" ref="el"></canvas>
</template>

<style scoped>
	.canvas {
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>

