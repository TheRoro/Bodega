<template>
	<div class="nav">
		<div class="brand" @click="brandHome()">
			<span class="material-icons logo">storefront</span>
			<h1 class="title">BODEGA</h1>
		</div>
		<div class="links">
			<router-link to="/shop" class="router-link">
				<span class="material-icons logo">storefront</span> Shop</router-link
			>
			<router-link to="/cart" class="router-link">
				<span class="material-icons material-icons-outlined logo"
					>shopping_cart</span
				><CountDot :quantity="this.$store.getters.cartCount" />Cart</router-link
			>
			<router-link to="/wishlist" class="router-link">
				<span class="material-icons material-icons-outlined logo"
					>favorite_border</span
				><CountDot
					:quantity="this.$store.getters.wishlistCount"
				/>Wishlist</router-link
			>
		</div>
		<ProfileDropdown />
		<div class="bottom-navbar">
			<div class="responsive-links">
				<router-link to="/shop" class="router-link">
					<span class="material-icons logo">storefront</span> Shop</router-link
				>
				<router-link to="/cart" class="router-link">
					<span class="material-icons material-icons-outlined logo"
						>shopping_cart</span
					>Cart</router-link
				>
				<router-link to="/wishlist" class="router-link">
					<span class="material-icons material-icons-outlined logo"
						>favorite_border</span
					>Wishlist</router-link
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import './Nav.scss';
</style>

<script>
import ProfileDropdown from '../../components/profileDropdown/ProfileDropdown.vue'
import CountDot from '../../components/countDot/CountDot.vue'
import router from '@/router'
import axios from 'axios'
export default {
	name: 'Nav',
	components: {
		ProfileDropdown,
		CountDot,
	},
	methods: {
		brandHome() {
			router.push('/')
		},
	},
	mounted() {
		if (this.$store.getters.products.length == 0) {
			axios.get(`https://fakestoreapi.com/products`).then((response) => {
				this.$store.commit('initialiseProducts', response.data)
			})
		}
	},
}
</script>
