<template>
	<div class="nav">
		<div class="brand" @click="brandHome()">
			<span class="material-icons logo">storefront</span>
			<h1 class="title">BODEGA</h1>
		</div>
		<div class="links">
			<router-link to="/shop" class="router-link">Shop</router-link>
			<router-link to="/cart" class="router-link">Cart</router-link>
			<router-link to="/" class="router-link">Home</router-link>
		</div>
		<div class="profile">
			<img
				class="photo"
				src="../../assets/img/user_photo.png"
				alt="user photo"
			/>
		</div>
		<div class="bottom-navbar">
			<div class="responsive-links">
				<router-link to="/shop" class="router-link">Shop</router-link>
				<router-link to="/cart" class="router-link">Cart</router-link>
				<router-link to="/" class="router-link">Home</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import './Nav.scss';
</style>

<script>
import router from '@/router'
export default {
	name: 'Nav',
	methods: {
		brandHome() {
			router.push('/')
		},
	},
}
</script>
