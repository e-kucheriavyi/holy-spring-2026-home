<template>
	<div class="blink"></div>
</template>

<style scoped>
	.blink {
		width: 8px;
		height: 10px;
		background: blue;
		animation: blink 1000ms infinite;
	}

	@keyframes blink {
		0% {
			background: gray;
		}
		49% {
			background: gray;
		}
		50% {
			background: blue;
		}
		100% {
			background: blue;
		}
	}
</style>

