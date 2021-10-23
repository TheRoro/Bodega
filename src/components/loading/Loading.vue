<template>
	<div class="loading" v-if="loading">
		<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<style lang="scss">
@import './Loading.scss';
</style>

<script>
export default {
	name: 'Loading',
	props: {
		loading: Boolean,
	},
}
</script>
