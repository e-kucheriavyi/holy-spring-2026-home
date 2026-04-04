<template>
	<footer
		v-if="$nav.currentPage != 1"
		class="footer absolute bottom-0 left-0 right-0 p-2 text-right"
	>
		<div class="block">
			{{ $nav.currentPage < 10 ? '0' : '' }}{{ $nav.currentPage }} / {{ $nav.total < 10 ? '0' : '' }}{{ $nav.total }}
		</div>
	</footer>
</template>

<style scoped>
	.footer {
		z-index: 10;
	}

	.block {
		display: inline-flex;
	}
</style>
