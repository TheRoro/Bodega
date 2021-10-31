<template>
	<div class="wishlist">
		<div class="text-row">
			<h1 class="title">My wishlist</h1>
		</div>
		<div class="items-grid">
			<Card
				v-for="item in this.$store.getters.wishlist"
				:key="item.id"
				:id="item.id"
				:name="item.title"
				:price="item.price"
				:img-url="item.image"
				:is-favorite="item.isFavorite"
				:rating="item.rating"
			/>
		</div>
		<EmptyWishlist :isEmpty="this.$store.getters.wishlist.length == 0" />
	</div>
</template>

<style lang="scss">
@import './Wishlist.scss';
</style>

<script>
import Card from '../../components/card/Card.vue'
import EmptyWishlist from '../../components/emptyWishlist/EmptyWishlist.vue'
export default {
	name: 'Wishlist',
	components: {
		Card,
		EmptyWishlist,
	},
}
</script>
