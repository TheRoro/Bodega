import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/homeLogged',
    name: 'HomeLogged',
    component: () => import('../views/HomeLogged.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: () => import('../views/EditProfile.vue')
  },
  {
    path: '/imageUpload',
    name: 'ImageUpload',
    component: () => import('../views/ImageUpload.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/ordersHistory',
    name: 'OrdersHistory',
    component: () => import('../views/OrdersHistory.vue')
  },
  {
    path: '/orderDetail/:id',
    name: 'OrderDetail',
    component: () => import('../views/OrderDetail.vue')
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('../views/Payments.vue')
  },
  {
    path: '/paymentsHistory',
    name: 'PaymentsHistory',
    component: () => import('../views/PaymentsHistory.vue')
  }
  //Admin Routes
  ,
  {
    path: '/allProducts',
    name: 'AllProducts',
    component: () => import('../views/Admin/AllProducts.vue')
  },
  {
    path: '/registerProduct',
    name: 'RegisterProduct',
    component: () => import('../views/Admin/RegisterProduct.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: () => import('../views/Admin/EditProduct.vue'),
  },
  {
    path: '/allCustomers',
    name: 'AllCustomers',
    component: () => import('../views/Admin/AllCustomers.vue'),
  },
  {
    path: '/editCustomer/:id',
    name: 'EditCustomer',
    component: () => import('../views/Admin/EditCustomer.vue'),
  },
  {
    path: '/registerCustomer',
    name: 'RegisterCustomer',
    component: () => import('../views/Admin/RegisterCustomer.vue')
  },
  {
    path: '/allOrders',
    name: 'AllOrders',
    component: () => import('../views/Admin/AllOrders.vue'),
  },
  {
    path: '/allPayments',
    name: 'AllPayments',
    component: () => import('../views/Admin/AllPayments.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
