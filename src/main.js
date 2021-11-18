import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'


/**
 * Add route rules checking
 */
 router.beforeEach((to, from, next) => {
  const user = store.state.user

  // Connexion needed
  if (to.meta && ((to.meta.requireAuth === true && !user) || (to.meta.requireAuth === false && user))) {
    next({ name: 'home' })
  } else {
    next()
  }
})

// Create app and bind it
createApp(App).use(store).use(router).mount('#app')
