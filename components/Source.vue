<script setup lang="ts">
	defineProps({
		value: { type: String, default: '' },
	})
</script>

<template>
	<div class="absolute bottom-2 block px-4 py-3 source">{{ value }}</div>
</template>

<style scoped>
	.source {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3rem;
		font-size: 1rem;
		left: 1rem;
	}
</style>
