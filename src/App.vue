<template>
	<div id="app">
		<transition name="moveUp">
			<router-view />
		</transition>
	</div>
</template>

<style lang="scss">
@import './assets/scss/app.scss';
.moveUp-enter-active {
	animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}
</style>

<script>
export default {
	name: 'App',
}
</script>
