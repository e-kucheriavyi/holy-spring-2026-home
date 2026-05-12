<script setup lang="ts">
	import { computed, onMounted, ref } from "vue"
</script>

<template>
	<div>
		<div class="slidev-layout wire text-center">
			<slot />
		</div>
		<SlidevVideo
			class="wire-video"
			ref="el"
			src="/road-glow-orange.mp4"
			:loop="true"
			:autoplay="true"
			:controls="false"
			:muted="true"
			autoreset="slide"
		></SlidevVideo>
	</div>
</template>

<style scoped>
	.wire, .wire-video {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.wire-video {
		z-index: 0;
	}

	.wire {
		z-index: 1;
		color: #fff;
		text-shadow: 0 0 1px #fff, 0 0 2px #ff, 0 0 3px #ff;
	}

	.wire :deep(h1) {
		font-size: 4rem;
		line-height: 4rem;
	}

	.wire :deep(.red) {
		text-shadow: 0 0 1px red, 0 0 2px red, 0 0 3px red;
	}

	.wire :deep(.white) {
		text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff;
	}

	.wire :deep(h2) {
		font-size: 3rem;
	}
</style>
