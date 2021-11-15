import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/nft/create',
    name: 'create:nft',
    component: () => import('../views/CreateNft.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
