<script setup lang="ts">
	import { computed } from "vue"
	import { handleBackground } from "../layoutHelper"

	const props = defineProps({
		background: {
			default: '',
		},
	})

	const style = computed(() => handleBackground(props.background, true))
</script>

<template>
	<div class="slidev-layout display" :style="style">
		<div class="my-auto w-full bg">
			<slot />
		</div>
	</div>
</template>

<style scoped>
	.display {
		background: url(/display-2.png);
		padding: 64px 110px;
	}
</style>
