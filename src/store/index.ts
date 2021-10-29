import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

type CartItem = {
	id: number;
	imgUrl: string;
	name: string;
	quantity: number;
	price: number;
}


type Product = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
	isFavorite: boolean;
	rating: number;
}

const store = new Vuex.Store({
	state: {
		products: Array<Product>(),
		cart: Array<CartItem>(),
		subtotal: 0,
	},
	mutations: {
		initialiseStore(state) {
			const lsStore = localStorage.getItem('store')
			if (lsStore) {
				Object.assign(state, JSON.parse(lsStore))
			}
		},
		initialiseProducts(state, products) {
			state.products = products
		},
		updateFavorite(state, id) {
			const productsList = state.products
			const productToUpdate: Product | undefined = productsList.find(
				(cartItem) => cartItem.id === id
			)
			if (productToUpdate) {
				productToUpdate.isFavorite = !productToUpdate.isFavorite
				const productIndex = productsList.indexOf(productToUpdate)
				Vue.set(productsList, productIndex, productToUpdate)
				state.products = productsList
			}
		},
		addProductToCart(state, product) {
			const newCart = state.cart
			let alreadyOnCart = false
			for (let i = 0; i < newCart.length; i++) {
				const item = newCart[i]
				if (product.id == item.id) {
					alreadyOnCart = true
					item.quantity += 1
				}
			}
			if (!alreadyOnCart) {
				const newItem: CartItem = {
					id: product.id,
					imgUrl: product.imgUrl,
					name: product.name,
					quantity: product.quantity,
					price: product.price,
				}
				newCart.push(newItem)
			}
			state.subtotal += product.price
			state.cart = newCart
		},
		increaseItem(state, id) {
			const newCart = state.cart
			const itemToUpdate: CartItem | undefined = newCart.find(
				(cartItem) => cartItem.id === id
			)
			if (itemToUpdate) {
				itemToUpdate.quantity += 1
				const itemIndex = newCart.indexOf(itemToUpdate)
				Vue.set(newCart, itemIndex, itemToUpdate)
				state.subtotal += itemToUpdate.price
				state.cart = newCart
			}
		},
		decreaseItem(state, id) {
			const newCart = state.cart
			const itemToUpdate: CartItem | undefined = newCart.find(
				(cartItem) => cartItem.id === id
			)
			if (itemToUpdate) {
				itemToUpdate.quantity -= 1
				const itemIndex = newCart.indexOf(itemToUpdate)
				Vue.set(newCart, itemIndex, itemToUpdate)
				if (itemToUpdate.quantity == 0) {
					const itemIndex = newCart.indexOf(itemToUpdate)
					newCart.splice(itemIndex, 1)
				}
				state.subtotal -= itemToUpdate.price
				state.cart = newCart
			}
		},
		removeItemFromCart(state, id) {
			const newCart = state.cart
			const itemToRemove: CartItem | undefined = newCart.find(
				(cartItem) => cartItem.id === id
			)
			if (itemToRemove) {
				const itemIndex = newCart.indexOf(itemToRemove)
				newCart.splice(itemIndex, 1)
				state.subtotal -= (itemToRemove.price * itemToRemove.quantity)
				state.cart = newCart
			}
		},
	},
	getters: {
		cart: (state) => {
			return state.cart
		},
		subtotal: (state) => {
			return state.subtotal
		},
		products: (state) => {
			return state.products
		},
		wishlist: (state) => {
			return state.products.filter(product => product.isFavorite === true)
		}
	},
	actions: {},
})

store.subscribe((_mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state))
})

export default store