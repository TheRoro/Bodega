import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../../src/views/Home.vue'),
	},
	{
		path: '/shop',
		name: 'Shop',
		component: () => import('../../src/views/Shop.vue'),
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../../src/views/Cart.vue'),
	},
	{ path: '/store', redirect: '/shop' },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
