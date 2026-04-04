<script setup>
	defineProps({
		title: String,
	})
</script>

<template>
	<div class="card block">
		<div class="title">{{ $props.title }}</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
	.card {
		flex: 1;
	}

	.title {
		font-size: 2rem;
	}

	.content :deep(li) {
		font-size: 1.5rem !important;
		margin-top: 1rem;
	}
</style>

