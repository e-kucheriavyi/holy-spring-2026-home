<script setup>
	import { onMounted, computed } from "vue"

	const delay = 1000

	const update = async () => {
		// $nav.value.next()

		setTimeout(() => {
			update()
		}, delay)
	}

	const pos = computed(() => {
		if (["default", "cover", "center"].includes($nav.value.currentLayout)) {
			return "top-0"
		}
		return "bottom-0"
	})

	onMounted(() => {
		update()
	})
</script>

<template>
	<footer
		v-if="$nav.currentPage != 1"
		class="footer absolute left-0 right-0 p-2 text-right"
		:class="pos"
	>
		<div class="block">
			{{ String($nav.currentPage).padStart(2, "0") }} <span class="orange">/</span> {{ String($nav.total).padStart(2, "0") }}
		</div>
	</footer>
</template>

<style scoped>
	.footer {
		z-index: 10;
	}

	.block {
		display: inline-flex;
		font-size: 1rem;
		font-family: "Press Start 2P" !important;
	}
</style>
