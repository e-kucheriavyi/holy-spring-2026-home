<script setup lang="ts">
	import { computed, ref } from "vue"
	import { handleBackground } from "../layoutHelper"
	import { useGlitch } from "../glitch"

	const props = defineProps({
		background: {
			default: '',
		},
		layer: {
			default: '0',
		},
	})

	const style = computed(() => handleBackground(props.background, true))

	const { glitchClass } = useGlitch()
</script>

<template>
	<div class="slidev-layout layer text-outline" :style="style">
		<div
			class="my-auto w-full bg position-absolute h-full top-0 bottom-0 left-0 right-0 p-20 pt-50"
			:class="glitchClass"
		>
			<slot />
		</div>
		<div :class="glitchClass">
			<div class="layer-label">Layer<span class="white">:</span> {{ String(layer).padStart(2, "0") }}</div>
		</div>
	</div>
</template>

<style scoped>
	.layer {
		/*background: url(/crt-1.jpg);*/
		color: var(--orange);
		text-shadow: 0 0 1px var(--orange), 0 0 2px var(--orange), 0 0 3px var(--orange);
	}

	.bg {
		backdrop-filter: brightness(0.6);
	}

	.layer :deep(h1) {
		font-family: "Press Start 2P" !important;
		font-size: 5.8rem;
		line-height: 5.8rem;
	}

	.layer .white {
		text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff;
	}

	.glitch :deep(h1), .glitch *, .glitch .layer-label {
		font-family: "Rubik Glitch" !important;
		font-size: 8rem;
		animation: shake 0.1s linear infinite;
	}

	@keyframes shake {
		0% {
			transform: translateX(-4px);
		}
		100% {
			transform: translateX(4px);
		}
	}

	.layer-label {
		font-family: "Press Start 2P" !important;
		position: absolute;
		bottom: 5rem;
		right: 5rem;
		font-size: 4.5rem;
	}
</style>

