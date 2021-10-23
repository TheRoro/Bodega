<template>
	<div>
		<Nav />
		<Shop />
	</div>
</template>

<script>
import Nav from '../modules/nav/Nav.vue'
import Shop from '../modules/shop/Shop.vue'

export default {
	name: 'ShopView',
	components: {
		Nav,
		Shop,
	},
}
</script>
