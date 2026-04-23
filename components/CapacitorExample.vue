<script setup>
	import { ref, onMounted } from "vue"

	const MAX_CAPACITY = 100
	const DRAIN_SPEED = 10
	const CHARGE_SPEED = 2
	const t = 32

	const c = ref(0)
	const v = ref(0)
	const m = ref(true)

	const update = () => {
		if (m.value) {
			c.value += CHARGE_SPEED
	
			if (c.value >= MAX_CAPACITY) {
				m.value = false
				v.value = 255
			}
		} else {
			c.value -= DRAIN_SPEED
			v.value -= 255/10

			if (c.value <= 0) {
				m.value = true
			}
		}

		setTimeout(() => { update() }, t)
	}

	onMounted(() => {
		update()
	})
</script>

<template>
	<div class="cap-chart">
		<LedElement :value="v" />
		<div class="bar">
			<div class="bar-level" :style="`height: ${c}%;`"></div>
		</div>
	</div>
</template>

<style scoped>
	.cap-chart {
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: center;
		justify-content: center;
	}

	.bar {
		border: 1px solid #fff;
		height: 200px;
		width: 100px;
		transform: rotateX(180deg);
	}

	.bar-level {
		background: var(--orange);
		transition: 32ms;
	}
</style>

