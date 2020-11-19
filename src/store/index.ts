import Vue from 'vue'
import Vuex from 'vuex'

const logout:any = require('./modules/logout')

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
    cart: [

    ]
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
