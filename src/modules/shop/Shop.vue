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
				v-for="item in items"
				:key="item.id"
				:id="item.id"
				:name="item.title"
				:price="item.price"
				:img-url="item.image"
				:is-favorite="false"
				:rating="item.rating"
			/>
		</div>
		<Loading :loading="items.length == 0" />
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
		axios.get(`https://fakestoreapi.com/products`).then((response) => {
			this.items = response.data
		})
	},
	data: function() {
		return {
			items: [],
		}
	},
}
</script>
