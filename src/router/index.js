import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShoppingBag from '../views/ShoppingBag.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/shoppingBag',
    name: 'ShoppingBag',
    component: ShoppingBag

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
