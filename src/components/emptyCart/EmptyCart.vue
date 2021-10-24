<template>
	<div class="empty-cart" v-if="isEmpty">
		<img
			class="empty-svg"
			src="../../assets/img/shopping_cart.svg"
			alt="empty cart logo"
			v-if="index % 2 == 0"
		/>
		<img
			class="empty-svg"
			src="../../assets/img/empty_cart.svg"
			alt="empty cart logo"
			v-if="index % 2 != 0"
		/>
		<h2 class="title">Your Cart is empty</h2>
		<p class="subtitle">
			Looks like you haven't added
		</p>
		<p class="subtitle">
			anything to your cart yet
		</p>
		<button class="cta-button" @click="goToShop()">Explore our products</button>
	</div>
</template>

<style lang="scss">
@import './EmptyCart.scss';
</style>

<script>
export default {
	name: 'EmptyCart',
	props: {
		isEmpty: Boolean,
	},
	data: function() {
		return {
			index: 0,
		}
	},
	mounted() {
		this.index = Math.floor(Math.random() * (2 - 0) + 0)
	},
	methods: {
		goToShop() {
			this.$router.push('/shop')
		},
	},
}
</script>
