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
    //Product
    productName: "Queso Edam",
    productDescription: "Riquisimo queso edam de 120 gr",
    productPrice: 2.40,
    productStock: 33,
    productImage: "https://i.ibb.co/gmn70wj/edam.jpg",
    //Customer
    customerName: "Jhon Doe",
    customerUsername: "johnTheKing",
    customerPassword: "123123123",
    customerAddress: "Calle Kosaraju 424",
    customerRate: "3.60%",
    customerType: "Compuesta",
    customerAccount: "123-4567789",
    customerImage: "../../../public/assets/user.png",
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
    //Product
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
    //Customer
    customerName (state, customerName) {
      state.customerName = customerName
    },
    customerUsername (state, customerUsername) {
      state.customerUsername = customerUsername
    },
    customerPassword (state, customerPassword) {
      state.customerPassword = customerPassword
    },
    customerAddress (state, customerAddress) {
      state.customerAddress = customerAddress
    },
    customerRate (state, customerRate) {
      state.customerRate = customerRate
    },
    customerType (state, customerType) {
      state.customerType = customerType
    },
    customerAccount (state, customerAccount) {
      state.customerAccount = customerAccount
    },
    customerImage (state, customerImage) {
      state.customerImage = customerImage
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
    //Product
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
    },
    //Customer
    customerName: state => {
      return state.customerName
    },
    customerUsername: state => {
      return state.customerUsername
    },
    customerPassword: state => {
      return state.customerPassword
    },
    customerAddress: state => {
      return state.customerAddress
    },
    customerRate: state => {
      return state.customerRate
    },
    customerType: state => {
      return state.customerType
    },
    customerAccount: state => {
      return state.customerAccount
    },
    customerImage: state => {
      return state.customerImage
    },
  },
  actions: {
  },
  modules: {
  }
})
