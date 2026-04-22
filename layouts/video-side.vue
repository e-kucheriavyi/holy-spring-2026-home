<script setup lang="ts">
	import { computed, onMounted, ref, watch } from "vue"

	const props = defineProps({
		video: {
			default: "",
		},
		side: {
			default: "right",
		},
		loop: {
			type: Boolean,
			default: true,
		},
		autoplay: {
			default: true,
		},
	})

	const el = ref(null)
</script>

<template>
	<div class="grid grid-cols-2 w-full h-full auto-rows-fr">
		<div class="slidev-layout default" :class="props.class" v-if="side === 'right'">
			<slot />
		</div>
		
		<div class="w-full h-full">
			<SlidevVideo
				class="side-video"
				ref="el"
				:src="video"
				:loop
				:autoplay="autoplay"
				:controls="false"
				:muted="true"
				autoreset="slide"
			></SlidevVideo>
		</div>

		<div class="slidev-layout default" :class="props.class" v-if="side === 'left'">
			<slot />
		</div>
	</div>
</template>

<style scoped>
	.side-video {
		width: 100%;
		height: 100%;
	}
</style>
