<script setup>
	const props = defineProps({
		text: { type: String },
		size: { type: String, default: "5rem" },
		frontmatter: { type: Object },
	})
</script>

<template>
		<div class="slidev-layout terminal" :style="`font-size: ${size};`">
			<RenderWhen context="slide">
				<span style="padding-right: 1rem;" class="orange">></span>
				<Printer :text="text" class="txt"/>
				<span class="carret"></span>
			</RenderWhen>
			<RenderWhen context="overview">
				<div :style="`font-size: ${size};`">{{ text }}</div>
			</RenderWhen>
		</div>
</template>

<style scoped>
	.terminal * {
		font-family: "Press Start 2P" !important;
		color: var(--orange);
	}

	.txt {
		color: #fff;
		padding-right: 1rem;
	}

	.carret {
		position: relative;
		display: inline-block;
		top: -1rem;
		width: 3rem;
		height: 5rem;
		animation: blink 1.5s linear infinite;
		vertical-align: middle;
	}

	@keyframes blink {
		0% { background: var(--orange); }
		50% { background: transparent; }
		100% { background: var(--orange); }
	}
</style>
