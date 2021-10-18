<template>
	<div class="item">
		<div class="img-row">
			<img :src="imgUrl" :alt="name" class="item-image" />
		</div>
		<div class="text-row">
			<p class="item-name" :title="name">{{ name | truncate(20) }}</p>
		</div>
		<div class="counter-row">
			<span class="material-icons remove-logo" @click="decreaseQuantity()"
				>remove</span
			>
			<div class="quantity-container">
				<span class="quantity-text">{{ quantity }}</span>
			</div>
			<span class="material-icons add-logo" @click="increaseQuantity()"
				>add</span
			>
		</div>
		<div class="price-row">
			<p class="price-number">$</p>
			<p class="price-number">{{ formatPrice(price) }}</p>
		</div>
		<div class="delete-row">
			<span class="material-icons delete-logo" @click="removeItem()"
				>close</span
			>
		</div>
	</div>
</template>

<style lang="scss">
@import './Item.scss';
</style>

<script>
export default {
	name: 'Item',
	props: {
		id: Number,
		imgUrl: String,
		name: String,
		quantity: Number,
		price: Number,
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
		increaseQuantity() {
			this.$store.commit('increaseItem', this.id)
		},
		decreaseQuantity() {
			this.$store.commit('decreaseItem', this.id)
		},
		removeItem() {
			this.$store.commit('removeItemFromCart', this.id)
		},
	},
}
</script>
