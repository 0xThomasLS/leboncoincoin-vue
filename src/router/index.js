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
  },
  {
    path: '/nft/:id',
    name: 'show:nft',
    component: () => import('../views/ShowNft.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
