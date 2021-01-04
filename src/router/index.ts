import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/Home/Home.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../../src/components/Store/Store.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../../src/components/Cart/Cart.vue')
  },
  {
    path: '/ordersHistory',
    name: 'OrdersHistory',
    component: () => import('../../src/components/OrdersHistory/OrdersHistory.vue')
  },
  {
    path: '/orderDetails',
    name: 'OrderDetails',
    component: () => import('../../src/components/OrderDetails/OrderDetails.vue')
  },
  //Admin Routes
  {
    path: '/allProducts',
    name: 'AllProducts',
    component: () => import('../../src/components/AllProducts/AllProducts.vue')
  },
  {
    path: '/createProduct',
    name: 'CreateProduct',
    component: () => import('../../src/components/CreateProduct/CreateProduct.vue')
  },
  {
    path: '/editProduct',
    name: 'EditProduct',
    component: () => import('../../src/components/EditProduct/EditProduct.vue'),
  },
  {
    path: '/allOrders',
    name: 'AllOrders',
    component: () => import('../../src/components/AllOrders/AllOrders.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
