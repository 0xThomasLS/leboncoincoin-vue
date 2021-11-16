<template>
  <div>
    <app-header />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'LeBonCoinCoin',
  mounted () {
    this.$store.dispatch('loadNfts')
  },
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
body {
  background: rgb(250, 250, 250);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
