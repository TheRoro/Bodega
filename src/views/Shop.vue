<template>
	<div>
		<Nav />
		<ShopModule />
	</div>
</template>

<script>
import Nav from '../modules/nav/Nav.vue'
import ShopModule from '../modules/shop/Shop.vue'

export default {
	name: 'Shop',
	components: {
		Nav,
		ShopModule,
	},
}
</script>
