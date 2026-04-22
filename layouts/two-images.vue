<script setup lang="ts">
	import { computed } from "vue"
	import { handleBackground } from "../layoutHelper"

	const props = defineProps({
		imageLeft: {
			type: String,
		},
		imageRight:{
			type: String,
		},
		class: {
			type: String,
		},
		backgroundSizeLeft: {
			type: String,
			default: 'cover',
		},
		backgroundSizeRight: {
			type: String,
			default: 'cover',
		},
	})

	const styleLeft = computed(() => handleBackground(props.imageLeft, false, props.backgroundSizeLeft))
	const styleRight = computed(() => handleBackground(props.imageRight, false, props.backgroundSizeRight))
</script>

<template>
	<div class="grid grid-cols-2 w-full h-full auto-rows-fr">
		<div class="w-full h-full" :style="styleLeft" />
		<div class="w-full h-full" :style="styleRight" />
		<slot />
	</div>
</template>

