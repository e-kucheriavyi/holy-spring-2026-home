<script setup>
	import { computed } from "vue"

	const { value } = defineProps({ value: { type: Number, default: 0 }})

	const ledColor = computed(() => {
		return `rgba(${0xff}, ${0xb3}, ${0x30}, ${value/255})`
	})
	const ledShadow = computed(() => {
		return `box-shadow: 0px 0px ${value}px 0px rgba(${0xff}, ${0xbe}, ${0x30}, ${value/255})`
	})
</script>

<template>
	<div class="led" :style="`background-color: ${ledColor}; ${ledShadow}`"></div>
</template>

<style scoped>
	.led {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 50%;
	}
</style>

