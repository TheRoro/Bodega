<template>
	<div class="cart">
		<div class="text-row">
			<h1 class="title">Shopping Cart</h1>
		</div>
		<div class="items-list">
			<Item
				v-for="item in items"
				:key="item.id"
				:id="item.id"
				:name="item.name"
				:price="item.price"
				:img-url="item.imgUrl"
				:quantity="item.quantity"
			/>
		</div>
	</div>
</template>

<style lang="scss">
@import './Cart.scss';
</style>

<script>
import Item from '../../components/item/Item.vue'
export default {
	name: 'Cart',
	components: {
		Item,
	},
	mounted() {
		this.items = this.$store.getters.cart
	},
	data: function() {
		return {
			items: [],
		}
	},
}
</script>
