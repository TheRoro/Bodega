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

function initialState() {
	return {
		cart: Array<CartItem>(),
		subtotal: 0,
	}
}

export default new Vuex.Store({
	state: initialState,
	mutations: {
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
	},
	actions: {},
})
