<script setup>
	import { onMounted, ref } from "vue"
	import { initRelayDemo } from "current-chart"

	const el = ref(null)
	const active = ref(false)

	onMounted(() => {
		if (el === null) {
			return
		}
		initRelayDemo(el.value)
	})
</script>

<template>
	<div
		ref="el"
		:data-stage="$nav.clicks >= 5 ? 5 : $nav.clicks"
		:data-active="active ? 1 : 0"
		class="demo"
	></div>
	<button
		class="btn"
		:class="active ? '' : 'btn-red'"
		@click="active = !active"
	>{{ active ? "ON" : "OFF" }}</button>
</template>

<style scoped>
	.demo {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}

	.btn {
		position: absolute;
		z-index: 1;
	}
</style>
