import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    isAdmin: true,
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
    productName: "Queso Edam",
    productDescription: "Riquisimo queso edam de 120 gr",
    productPrice: 2.40,
    productStock: 33,
    productImage: "https://i.ibb.co/gmn70wj/edam.jpg",
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
    productName (state, productName) {
      state.productName = productName
    },
    productDescription (state, productDescription) {
      state.productDescription = productDescription
    },
    productPrice (state, productPrice) {
      state.productPrice = productPrice
    },
    productStock (state, productStock) {
      state.productStock = productStock
    },
    productImage (state, productImage) {
      state.productImage = productImage
    },
    /*addToCart (state, itemDetail) {
      state.cart = [...state.cart, {itemDetail}]
    }*/
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
    },
    isAdmin: state => {
      return state.cart
    },
    productName: state => {
      return state.productName
    },
    productDescription: state => {
      return state.productDescription
    },
    productPrice: state => {
      return state.productPrice
    },
    productStock: state => {
      return state.productStock
    },
    productImage: state => {
      return state.productImage
    }
  },
  actions: {
  },
  modules: {
  }
})
