<script setup>
	import { onMounted } from "vue"

	const props = defineProps({
		text: { type: String },
		size: { type: String, default: "4rem" },
	})
</script>

<template>
	<div class="term">
		<div class="term-body" :style="`font-size: ${size}`">
			<span class="term-input" style="padding-right: 1rem;">></span>
			<RenderWhen context="slide">
				<Printer :text="text" class="term-text" style="padding-right: 1rem;" />
			</RenderWhen>
			<span class="term-carret"></span>
		</div>
	</div>
</template>

<style scoped>
	.term {
		position: absolute;
		top: 100px;
		bottom: 100px;
		left: 100px;
		right: 100px;
		background: rgba(0, 0, 0, 0.8);
		overflow: hidden;
	}

	.term * {
		font-family: "Press Start 2P" !important;
	}

	.term-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		background: #222;
	}
	
	.term-body {
		padding: 1rem;
		color: var(--orange);
	}

	.term-input {
	}

	.term-text {
		white-space: pre-line;
	}

	.term-carret {
		position: relative;
		display: inline-block;
		top: -6px;
		width: 2rem;
		height: 3.5rem;
		animation: blink 1.5s linear infinite;
		vertical-align: middle;
	}

	@keyframes blink {
		0% { background: var(--orange); }
		50% { background: transparent; }
		100% { background: var(--orange); }
	}
</style>

