import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/nft/:id',
    name: 'show:nft',
    component: () => import('../views/ShowNft.vue')
  },
  {
    path: '/nft/create',
    name: 'create:nft',
    component: () => import('../views/CreateNft.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/collection',
    name: 'show:user-collection',
    component: () => import('../views/UserCollection.vue'),
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
