<script setup lang="ts">
	import { computed, onMounted, ref } from "vue"
	import { handleBackground } from "../layoutHelper"

	const props = defineProps({
		background: {
			default: '',
		},
		layer: {
			default: '0',
		},
	})

	const style = computed(() => handleBackground(props.background, true))
	
	const glitchClass = ref("")

	const glitch = () => {
		const t = glitchClass.value ? 2000 : 300
		glitchClass.value = glitchClass.value ? "" : "glitch"
		setTimeout(() => { glitch() }, t)
	}

	onMounted(() => {
		glitch()
	})
</script>

<template>
	<div class="slidev-layout cover text-outline" :style="style">
		<div
			class="my-auto w-full bg position-absolute h-full top-0 bottom-0 left-0 right-0 p-20 pt-50"
			:class="glitchClass"
		>
			<slot />
		</div>
		<div :class="glitchClass">
			<div class="layer">Layer: {{ String(layer).padStart(2, "0") }}</div>
		</div>
	</div>
</template>

<style scoped>
	.cover {
		/*background: url(/crt-1.jpg);*/
		color: var(--orange);
	}

	.bg {
		backdrop-filter: brightness(0.6);
	}

	.cover :deep(h1) {
		font-family: "Press Start 2P" !important;
		font-size: 5.8rem;
	}

	.glitch :deep(h1), .glitch .layer {
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

	.layer {
		font-family: "Press Start 2P" !important;
		position: absolute;
		bottom: 5rem;
		right: 5rem;
		font-size: 4.5rem;
	}
</style>

