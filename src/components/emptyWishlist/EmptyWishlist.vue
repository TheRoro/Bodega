<template>
	<div class="empty-wishlist" v-if="isEmpty">
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
		<h2 class="title">Your wishlist is empty</h2>
		<p class="subtitle">
			Looks like you haven't added
		</p>
		<p class="subtitle">
			anything to your wishlist yet
		</p>
		<button class="cta-button" @click="goToShop()">Explore our products</button>
	</div>
</template>

<style lang="scss">
@import './EmptyWishlist.scss';
</style>

<script>
export default {
	name: 'EmptyWishlist',
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
