import * as types from '../types';

function emptyState () {
    return {
      loggedIn: false,
      isAdmin: false,
      firstname: "",
      username: "",
      password: "",
      profilePicture: '',
      address: "",
      accountNumber: "",
      interestRate: "",
      itemsPurchased: 0,
      orders: 0,
      cart: [],
      itemDetail: [],
      //Product
      productName: "",
      productDescription: "",
      productPrice: 0,
      productStock: 0,
      productImage: "",
      delivery: false,
      //Customer
      customerName: "",
      customerUsername: "",
      customerPassword: "",
      customerAddress: "",
      customerRate: "",
      customerType: "",
      customerAccount: "",
      customerImage: "",
    }
  }

export const getDefaultState = () => ({
    loggedIn: false,
    isAdmin: false,
    firstname: "",
    username: "",
    password: "",
    profilePicture: '',
    address: "",
    accountNumber: "",
    interestRate: "",
    itemsPurchased: 0,
    orders: 0,
    cart: [],
    itemDetail: [],
    //Product
    productName: "",
    productDescription: "",
    productPrice: 0,
    productStock: 0,
    productImage: "",
    delivery: false,
    //Customer
    customerName: "",
    customerUsername: "",
    customerPassword: "",
    customerAddress: "",
    customerRate: "",
    customerType: "",
    customerAccount: "",
    customerImage: "",
})

export const mutations = {
    reset (state) {
        Object.assign(state, getDefaultState())
      },
    MUTATE_SET_RESET_STATE(state) {
        Object.assign(state, getDefaultState())
    }
};
export const actions = {
    [types.ACTION_RESET_STATE]: ({ commit }, status) => {
        commit('MUTATE_SET_RESET_STATE');
    }
};
export default {
    state: {},
    getters: {},
    mutations,
    actions,
}