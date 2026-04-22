<template>
	<div class="slidev-layout code-layout">
		<slot />
	</div>
</template>

<style scoped>
	.code-layout {
		padding: 0;
		--slidev-code-margin: 0;
		--slidev-code-radius: 0;
		background: rgb(35, 38, 46);
	}
	.code-layout :deep(*) {
		font-family: "JetBrains Mono" !important;
	}
</style>

