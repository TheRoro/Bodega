<template>
	<div class="card">
		<div class="fav-container">
			<span
				v-if="isFavorite"
				class="material-icons fav-logo"
				@click="toggleFavorite(isFavorite)"
				>favorite</span
			>
			<span
				v-if="!isFavorite"
				class="material-icons fav-logo"
				@click="toggleFavorite(isFavorite)"
				>favorite_border</span
			>
		</div>
		<div class="img-container">
			<img :src="imgUrl" :alt="name" class="item-image" />
		</div>
		<div class="text-row">
			<p class="item-name" :title="name">{{ name | truncate(20) }}</p>
		</div>
		<Rating :stars="rating.rate" :count="rating.count" />
		<div class="cta-row">
			<div class="price-container">
				<p class="price-text">Price</p>
				<p class="price-number">$ {{ formatPrice(price) }}</p>
			</div>
			<button class="cart-button" @click="addToCart()">Add to cart</button>
		</div>
	</div>
</template>

<style lang="scss">
@import './Card.scss';
</style>

<script>
import Rating from '../rating/Rating.vue'
export default {
	name: 'Card',
	components: {
		Rating,
	},
	props: {
		id: Number,
		name: String,
		price: Number,
		imgUrl: String,
		rating: {},
		isFavorite: Boolean,
	},
	filters: {
		truncate: function(data, num) {
			const reqdString = data
				.split('')
				.slice(0, num)
				.join('')
			return reqdString
		},
	},
	methods: {
		formatPrice(value) {
			const val = (value / 1).toFixed(2).replace('.', '.')
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
		},
		toggleFavorite() {
			this.isFavorite = !this.isFavorite
		},
		addToCart() {
			this.$store.commit('addProductToCart', {
				id: this.id,
				imgUrl: this.imgUrl,
				name: this.name,
				quantity: 1,
				price: this.price,
			})
		},
	},
}
</script>
