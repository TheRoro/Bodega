<template>
	<div>
		<Nav />
		<Wishlist />
	</div>
</template>

<script>
import Nav from '../modules/nav/Nav.vue'
import Wishlist from '../modules/wishlist/Wishlist.vue'

export default {
	name: 'WishlistView',
	components: {
		Nav,
		Wishlist,
	},
}
</script>
