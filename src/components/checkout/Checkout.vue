<template>
	<div class="checkout" v-if="display">
		<div class="subtotal">
			<p class="text">Subtotal:</p>
			<p class="price">$ {{ formatPrice(subtotal) }}</p>
		</div>
		<button class="button">Check out</button>
	</div>
</template>

<style lang="scss">
@import './Checkout.scss';
</style>

<script>
export default {
	name: 'Checkout',
	props: {
		display: Boolean,
	},
	methods: {
		formatPrice(value) {
			const val = (value / 1).toFixed(2).replace('.', '.')
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
		},
		checkout() {
			//checkout logic
		},
	},
	computed: {
		subtotal() {
			return this.$store.getters.subtotal
		},
	},
}
</script>
