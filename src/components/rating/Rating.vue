<template>
	<div class="rating-row">
		<span
			v-for="(n, index) in fullStars"
			:key="'full_star' + index"
			class="material-icons star-logo"
			>star
		</span>
		<span
			v-for="(n, index) in halfStars"
			:key="'half_star' + index"
			class="material-icons star-logo"
			>star_half
		</span>
		<span
			v-for="(n, index) in emptyStars"
			:key="'empty_star' + index"
			class="material-icons star-logo"
			>star_border
		</span>
		<p class="num-reviews">({{ count }})</p>
	</div>
</template>

<style lang="scss">
@import './Rating.scss';
</style>

<script>
export default {
	name: 'Rating',
	props: {
		stars: Number,
		count: Number,
	},
	data: function() {
		return {
			fullStars: 0,
			halfStars: 0,
			emptyStars: 0,
		}
	},
	mounted() {
		const starsArray = (this.stars + '').split('.')
		this.fullStars = parseInt(starsArray[0])
		if (starsArray.length > 1) {
			const decimal = parseInt(starsArray[1])
			if (decimal > 2 && decimal < 8) {
				this.halfStars = 1
			} else if (decimal <= 2) {
				this.emptyStars += 1
			} else {
				this.fullStars += 1
			}
		}
		this.emptyStars += 5 - this.fullStars - this.halfStars - this.emptyStars
	},
}
</script>
