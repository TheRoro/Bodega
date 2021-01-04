import Vue from 'vue'
import Vuex from 'vuex'

const logout: any = ('./modules/logout')

Vue.use(Vuex)

function emptyState () {
  return {
    userId: 2,
    customerId: 2,
    creditAccountId: 1,
    loggedIn: false,
    isAdmin: false,
    itemsPurchased: 0,
    orders: 0,
    cart: [],
    delivery: false
  }
}

function initialState () {
  return {
    userId: 2,
    customerId: 2,
    creditAccountId: 1,
    loggedIn: false,
    isAdmin: false,
    itemsPurchased: 10,
    orders: 11,
    delivery: false,
    cart: [],
    products: [
      { 
        "id": 1,
        "name": "Coca Cola",
        "description": "200ml Coca Cola",
        "state": "Available",
        "price": 4.50,
        "unity": "UN",
        "image": "https://i.ibb.co/YZLcMkg/coke.jpg"
      },
      { 
        "id": 2,
        "name": "Lays",
        "description": "170gr Lays snack",
        "state": "Available",
        "price": 2.50,
        "unity": "UN",
        "image": "https://i.ibb.co/GVdJgfw/lays.jpg"
      },
      { 
        "id": 3,
        "name": "Pepsi",
        "description": "250ml Pepsi drink",
        "state": "Available",
        "price": 4.30,
        "unity": "UN",
        "image": "https://i.ibb.co/fxwfLmB/pepsi.jpg"
      },
      { 
        "id": 4,
        "name": "Fanta",
        "description": "225ml Fanta bottle",
        "state": "Available",
        "price": 3.90,
        "unity": "UN",
        "image": "https://i.ibb.co/3fThG44/fanta.jpg"
      },
      { 
        "id": 5,
        "name": "Oreo",
        "description": "80gr oreo cookies",
        "state": "Available",
        "price": 2.20,
        "unity": "UN",
        "image": "https://i.ibb.co/YRwfTXW/oreo.jpg"
      },
      { 
        "id": 6,
        "name": "Doritos",
        "description": "170gr Doritos nacho cheese",
        "state": "Available",
        "price": 2.60,
        "unity": "UN",
        "image": "https://i.ibb.co/3pXbsHH/doritos.jpg"
      },
      { 
        "id": 7,
        "name": "M & M's",
        "description": "47.9gr m&m's candies",
        "state": "Available",
        "price": 4.50,
        "unity": "UN",
        "image": "https://i.ibb.co/CnZjvvX/m-m.jpg"
      },
      { 
        "id": 8,
        "name": "Turron",
        "description": "500gr Peruvian Turron de Doña Pepa",
        "state": "Available",
        "price": 15.00,
        "unity": "UN",
        "image": "https://i.ibb.co/NTpJnJ1/turron.jpg"
      },
      { 
        "id": 9,
        "name": "Kit Kat",
        "description": "100gr chocolate bar",
        "state": "Available",
        "price": 4.20,
        "unity": "UN",
        "image": "https://i.ibb.co/xjWHJbf/kitkat.jpg"
      }
    ],
  }
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    userId(state, userId) {
      state.userId = userId
    },
    customerId(state, customerId) {
      state.customerId = customerId
    },
    creditAccountId(state, creditAccountId) {
      state.creditAccountId = creditAccountId
    },
    delivery(state, delivery) {
      state.delivery = delivery
    },
    resetState (state) {
      Object.assign(state, emptyState())
    },
    isAdmin (state, isAdmin) {
      state.isAdmin = isAdmin
    },
    logIn (state) {
      state.loggedIn = true
    },
    logOut (state) {
      state.loggedIn = false
    },
    updateCart (state, newCart) {
      state.cart = newCart;
    },
    updateProducts (state, newProducts) {
      state.products = newProducts;
    }
  },
  getters: {
    userId: state => {
      return state.userId
    },
    customerId: state => {
      return state.customerId
    },
    creditAccountId: state => {
      return state.creditAccountId
    },
    loggedStatus: state => {
      return state.loggedIn
    },
    itemsPurchased: state => {
      return state.itemsPurchased
    },
    orders: state => {
      return state.orders
    },
    cart: state => {
      return state.cart
    },
    products: state => {
      return state.products
    },
    isAdmin: state => {
      return state.isAdmin
    },
    delivery: state => {
      return state.delivery
    },
  },
  actions: {

  },
  modules: {
    logout
  }
})
