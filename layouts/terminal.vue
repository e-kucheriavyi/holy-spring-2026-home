<script setup>
	const props = defineProps({
		text: { type: String },
		size: { type: String, default: "5rem" },
	})
</script>

<template>
	<RenderWhen context="main">
		<div class="slidev-layout terminal fisheye" :style="`font-size: ${size};`">
			<span style="padding-right: 1rem;">></span>
			<Printer :text="text" class="txt"/>
			<span class="carret"></span>
		</div>
	</RenderWhen>
	<RenderWhen context="visible">
		<div :style="`font-size: ${size};`">{{ text }}</div>
	</RenderWhen>
</template>

<style scoped>
	.terminal * {
		font-family: "Press Start 2P" !important;
		color: #ffbe30;
		text-shadow: 0 0 1px #ffbe30, 0 0 2px #ffbe30, 0 0 3px #ffbe30;
	}

	.txt {
		color: #ffbe30;
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
		0% { background: #ffbe30; }
		50% { background: transparent; }
		100% { background: #ffbe30; }
	}
</style>
