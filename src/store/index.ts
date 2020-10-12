import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    firstname: "Alberto",
    username: "Albertito69",
    address: "Calle Kosaraju 420",
    accountNumber: "191-0001-00005",
    interestRate: "5%",
    itemsPurchased: 10,
    orders: 11,
  },
  mutations: {
    logIn (state) {
      state.loggedIn = true
    },
    logOut (state) {
      state.loggedIn = false
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
    }
  },
  actions: {
  },
  modules: {
  }
})
