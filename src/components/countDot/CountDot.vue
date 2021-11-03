<template>
	<div
		class="count-dot"
		:class="{
			display: quantity === 0,
			animateDeactivated: decreaseAnimation,
			animateActivated: increaseAnimation,
		}"
	>
		<p v-if="quantity <= 9">{{ quantity }}</p>
		<p v-if="quantity > 9">9+</p>
	</div>
</template>

<style lang="scss">
@import './CountDot.scss';
</style>

<script>
export default {
	name: 'CountDot',
	props: {
		quantity: Number,
	},
	data: function() {
		return {
			increaseAnimation: false,
			decreaseAnimation: false,
		}
	},
	methods: {
		sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms))
		},
	},
	watch: {
		quantity: async function(newVal) {
			if (newVal !== 0) {
				this.increaseAnimation = true
				await this.sleep(500)
				this.increaseAnimation = false
			}
			if (newVal === 0) {
				this.decreaseAnimation = true
				await this.sleep(500)
				this.decreaseAnimation = false
			}
		},
	},
}
</script>
