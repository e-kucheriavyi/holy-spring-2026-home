<template>
	<footer
		v-if="$nav.currentPage != 1"
		class="footer absolute bottom-0 left-0 right-0 p-2 text-right"
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
