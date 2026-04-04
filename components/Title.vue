<script setup lang="ts">
	defineProps({
		title: { type: String, default: '' },
	})
</script>

<template>
	<header
		v-if="$nav.currentLayout !== 'cover'"
		class="absolute top-0 left-0 right-0 pt-2 px-14 text-left"
	>
		<div class="block px-4 py-3">
			<div class="h1">
				<slot>{{ title }}</slot>
			</div>
		</div>
	</header>
	<div style="height: 1rem;"></div>
</template>

<style scoped>
	.h1 {
		color: #3caa3c !important;
		display: flex;
		align-items: center;
		height: 3rem;
		margin: 0;
		font-size: 3rem;
		gap: 1rem;
	}

	.block {
		display: inline-flex;
	}
</style>
