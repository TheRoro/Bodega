<template>
	<div class="shop">
		<div class="text-row">
			<label>
				<span class="search-text">Search results for</span
				><span class="category-text"> “All products”</span>
			</label>
		</div>
		<div class="items-grid">
			<Card
				v-for="item in this.$store.getters.products"
				:key="item.id"
				:id="item.id"
				:name="item.title"
				:price="item.price"
				:img-url="item.image"
				:is-favorite="item.isFavorite"
				:rating="item.rating"
			/>
		</div>
		<Loading :loading="this.$store.getters.products.length == 0" />
	</div>
</template>

<style lang="scss">
@import './Shop.scss';
</style>

<script>
import Card from '../../components/card/Card.vue'
import Loading from '../../components/loading/Loading.vue'
import axios from 'axios'
export default {
	name: 'Shop',
	components: {
		Card,
		Loading,
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
