<script setup>
	import { ref, computed } from "vue"
	const v = ref(0)
</script>

<template>
	<div class="pwm">
		<div class="pwm-controls">
			<h1>PWM <span class="red">/</span> ШИМ</h1>
			<input type="range" v-model="v" min="0" max="255" />
			<div style="font-size: 2rem;">{{ v }}</div>
			<div class="pwm-chart">
				<div
					class="pwm-high"
					:style="`flex: ${v}; border-right-width: ${v == 0 || v == 255 ? 0 : 16}px;`"
				></div>
				<div class="pwm-low" :style="`flex: ${255-v};`"></div>
			</div>
		</div>
		<div class="pwm-preview">
			<LedElement :value="v"></LedElement>
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

	.pwm-chart {
		display: flex;
		width: 80%;
		aspect-ratio: 1;
		border: 1px solid #fff;
	}

	.pwm-high {
		border-top: 16px solid blue;
		border-right: 0px solid blue;
	}

	.pwm-low {
		border-bottom: 16px solid blue;
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
