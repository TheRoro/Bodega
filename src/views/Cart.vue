<template>
	<div>
		<Nav />
		<Cart />
	</div>
</template>

<script>
import Nav from '../modules/nav/Nav.vue'
import Cart from '../modules/cart/Cart.vue'

export default {
	name: 'CartView',
	components: {
		Nav,
		Cart,
	},
}
</script>
