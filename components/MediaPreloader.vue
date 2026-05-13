<script setup>
	import { computed, ref } from "vue"

	const mediaUrls = [
		"/duck.png",
		"/8x8-matrix-chip.webp",
		"/8x8-matrix.webp",
		"/any-padme.jpg",
		"/bro-you-will-die.jpg",
		"/chat-gpt-wiring-2.webp",
		"/chat-gpt-wiring.webp",
		"/corners.png",
		"/crt-1.jpg",
		"/crt.jpg",
		"/cry.webp",
		"/duck.png",
		"/esp32-o.webp",
		"/esp32.png",
		"/esp-lamp-8-9.webp",
		"/esp-lamp.webp",
		"/esp-pc-1.png",
		"/esp-pc-2.png",
		"/espruino-ide-1.png",
		"/espruino-ide-2.png",
		"/espruino.png",
		"/i2c-protocol.webp",
		"/lamp-with-potentiometer.webp",
		"/larana-display-orange.webp",
		"/larana-pix.jpg",
		"/led-with-btn.webp",
		"/led-with-esp.webp",
		"/ohm.svg",
		"/ololoshka.svg",
		"/pico-2s.png",
		"/plug-wiring-risk.png",
		"/ps.webp",
		"/reverse-clean.webp",
		"/shenzhen-docs.png",
		"/shenzhen.png",
		"/tb.jpg",
		"/zero2-hero.webp",
		"/zigbee.webp",
		"/schematics/full-s.webp",
		"/schematics/full.webp",
		"/schematics/lamp-btn-s.webp",
		"/schematics/lamp-btn.webp",
		"/schematics/lamp-s.webp",
		"/schematics/lamp.webp",
		"/schematics/ps-1-s.webp",
		"/schematics/ps-1.webp",
		"/schematics/ps-2-s.webp",
		"/schematics/ps-2.webp",
		"/schematics/ps-3-s.webp",
		"/schematics/ps-3.webp",
		"/schematics/ps-4-s.webp",
		"/schematics/ps-4.webp",
		"/schematics/ps-5-s.webp",
		"/schematics/ps-5.webp",
		"/schematics/ps-6-s.webp",
		"/schematics/ps-6.webp",
		"/schematics/resistance-is-useless.webp",
		"/pad/acc.webp",
		"/pad/amp.webp",
		"/pad/blank.webp",
		"/pad/duck-3.webp",
		"/pad/duck-devkit.webp",
		"/pad/duck-esp-2.webp",
		"/pad/duck-esp.webp",
		"/pad/duck-pi.webp",
		"/pad/duck-programmer.webp",
		"/pad/duck.webp",
		"/pad/e-ink-pins.webp",
		"/pad/e-ink.webp",
		"/pad/esp.webp",
		"/pad/lamp.webp",
		"/pad/mic1.webm",
		"/pad/mic2.webm",
		"/pad/pi-device.webp",
		"/pad/pi-sound.webp",
		"/pad/pi.webp",
		"/pad/radio.webp",
		"/pad/sound-module.webp",
		"/pad/sound.webm",
		"/pad/sound.webp",
		"/pad/speaker-lay.webp",
		"/pad/speaker.webp",
		"/pad/tools.webp",
		"/vids/capacitor.mp4",
		"/vids/diode.mp4",
		"/vids/iceberg.mp4",
		"/vids/potentiometer.mp4",
		"/vids/resistor.mp4",
		"/vids/road.mp4",
		"/vids/transformer.mp4",
		"/vids/transistor.mp4",
	]

	const loaded = ref([])

	const isVideo = (u) => {
		return u.endsWith(".webm") || u.endsWith(".mp4")
	}

	const preloadVideo = async (res, rej, u) => {
		const v = document.createElement("video")
		v.preload = "auto"
		v.src = u
		v.muted = true

		await new Promise(r => {
			v.oncanplaythrough = () => {
				loaded.value.push(u)
				res()
				r()
			}
			v.onerror = () => {
				console.error(u)
				rej()
				r()
			}
		})

		document.getElementById('preload').appendChild(v)
	}

	const preloadMedia = async () => {
		const promises = mediaUrls.map((u) => {
			return new Promise((res, rej) => {
				if (isVideo(u)) {
					preloadVideo(res, ref, u)
					return
				}
				const img = new Image()
				img.onload = () => {
					loaded.value.push(u)
					res()
				}
				img.onerror = () => {
					console.error(u)
					rej()
				}
				img.src = u
			})
		})

		await Promise.all(promises)
	}

	const totalCount = computed(() => {
		return mediaUrls.length
	})
	const doneCount = computed(() => {
		return loaded.value.length
	})

	preloadMedia()
</script>

<template>
	<div class="hide">
		<div>Preloading: {{ String(doneCount).padStart(3, "0") }}/{{ String(totalCount).padStart(3, "0") }}</div>
		<div id="preload"></div>
	</div>
</template>

<style scoped>
	.hide {
		display: none;
	}
	#preload {
		visibility: hidden;
		position: fixed;
		left: 99999999999999999px;
		top: 99999999999999999px;
	}
</style>

