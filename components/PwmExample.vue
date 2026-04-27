<script setup>
	import { ref, computed } from "vue"
	const v = ref(0)
</script>

<template>
	<div class="pwm">
		<div class="pwm-controls">
			<SpeedRange v-model="v" />
			<RenderWhen context="slide">
				<CurrentChart type="PWM" :voltage="5" :max="10" :freq="5" :len="v" />
			</RenderWhen>
		</div>
		<div class="pwm-preview">
			<LedElement :value="v*255"></LedElement>
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

	.pwm-controls {
		padding-top: 10rem;
	}
</style>
