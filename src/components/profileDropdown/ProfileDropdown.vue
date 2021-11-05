<template>
	<div class="profile">
		<img
			class="photo"
			src="../../assets/img/user_photo.png"
			alt="user photo"
			@click="dropIt()"
		/>
		<transition name="slide">
			<ul class="list" v-if="isActive">
				<li @click="logout()">Log out</li>
			</ul>
		</transition>
	</div>
</template>

<style lang="scss">
@import './ProfileDropdown.scss';
</style>

<script>
export default {
	name: 'ProfileDropdown',
	mounted() {
		document.addEventListener('click', this.closeDropdown)
	},
	beforeDestroy() {
		document.removeEventListener('click', this.closeDropdown)
	},
	data: function() {
		return {
			isActive: false,
		}
	},
	methods: {
		dropIt() {
			this.isActive = !this.isActive
		},
		logout() {
			this.$store.dispatch('logout')
		},
		closeDropdown(e) {
			if (!this.$el.contains(e.target)) {
				this.isActive = false
			}
		},
	},
}
</script>
