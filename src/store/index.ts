import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

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

const initialState = () => {
	return {
		products: Array<Product>(),
		cart: Array<CartItem>(),
		subtotal: 0,
		cartCount: 0,
		wishlistCount: 0,
	}
}

const store = new Vuex.Store({
	state: initialState(),
	mutations: {
		initialiseStore(state) {
			const lsStore = localStorage.getItem('store')
			if (lsStore) {
				Object.assign(state, JSON.parse(lsStore))
			}
		},
		destroyStore(state) {
			localStorage.removeItem('store')
			Object.assign(state, initialState())
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
				if (productToUpdate.isFavorite === true) {
					state.wishlistCount += 1
				}
				else {
					state.wishlistCount -= 1
				}
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
			state.cartCount += 1
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
				state.cartCount += 1
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
				state.cartCount -= 1
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
				state.cartCount -= itemToRemove.quantity
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
		},
		cartCount: (state) => {
			return state.cartCount
		},
		wishlistCount: (state) => {
			return state.wishlistCount
		}
	},
	actions: {
		logout({ commit }) {
			commit('destroyStore');
			router.push('/');
		}
	},
})

store.subscribe((_mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state))
})

export default store