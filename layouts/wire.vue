<script setup lang="ts">
	import { computed, onMounted, ref } from "vue"
</script>

<template>
	<div>
		<div class="grid grid-cols-2 w-full h-full auto-rows-fr wire">
			<div class="slidev-layout cover">
			<slot />
			</div>
		</div>
		<WireRoad />
	</div>
</template>

<style scoped>
	.wire {
		position: absolute;
		z-index: 0;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
