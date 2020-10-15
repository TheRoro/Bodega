import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    firstname: "Alberto",
    username: "Albertito69",
    password: "albertitotupapa",
    profilePicture: '',
    address: "Calle Kosaraju 420",
    accountNumber: "191-0001-00005",
    interestRate: "5%",
    itemsPurchased: 10,
    orders: 11,
    cart: [],
    itemDetail: [],
  },
  mutations: {
    logIn (state) {
      state.loggedIn = true
    },
    logOut (state) {
      state.loggedIn = false
    },
    firstname (state, firstname) {
      state.firstname = firstname
    },
    username (state, username) {
      state.username = username
    },
    password (state, password) {
      state.password = password
    },
    address (state, address) {
      state.address = address
    },
    profilePicture (state, profilePicture) {
      state.profilePicture = profilePicture
    },
    addToCart (state, itemDetail) {
      state.cart = [...state.cart, {itemDetail}]
    }
  },
  getters: {
    loggedStatus: state => {
      return state.loggedIn
    },
    firstname: state => {
      return state.firstname
    },
    username: state => {
      return state.username
    },
    password: state => {
      return state.password
    },
    profilePicture: state => {
      return state.profilePicture
    },
    address: state => {
      return state.address
    },
    accountNumber: state => {
      return state.accountNumber
    },
    interestRate: state => {
      return state.interestRate
    },
    itemsPurchased: state => {
      return state.itemsPurchased
    },
    orders: state => {
      return state.orders
    },
    cart: state => {
      return state.cart
    }
  },
  actions: {
  },
  modules: {
  }
})
