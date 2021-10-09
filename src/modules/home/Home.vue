<template>
	<div class="home">
		<video autoplay muted loop id="bgVideo">
			<source src="../../assets/videos/background.mp4" type="video/mp4" />
			Your browser does not support HTML5 video.
		</video>
		<div class="opacity-filter"></div>
		<div class="container">
			<span class="material-icons logo">storefront</span>
			<h1 class="title">BODEGA</h1>
		</div>
		<div class="cta-container">
			<button class="button" @click="onClickCTA">SHOP NOW</button>
		</div>
	</div>
</template>

<style lang="scss">
@import './Home.scss';
</style>

<script>
import router from '@/router'
export default {
	name: 'Home',
	methods: {
		onClickCTA() {
			router.push('store')
		},
	},
}
</script>
