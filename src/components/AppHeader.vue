<template>
  <app-popin
    :show="connexion"
    title="Sélectionne ton wallet"
    @close="connexion = false"
  >
    <div class="p-8">
      <div v-if="error" class="bg-red rounded-md text-white p-4 text-sm">
        <span class="font-bold">Erreur</span>
        {{ error }}
      </div>
      <ul>
        <li class="flex flex-col items-center cursor-pointer" @click.prevent="connect('metamask')">
          <img class="h-16 w-16" src="@/assets/metamask.png" alt="Metamask icon" />
          <div>Metamask</div>
        </li>
      </ul>
    </div>
  </app-popin>
  <div class="bg-light-gray sticky z-20 top-0">
    <div class="max-w-screen-lg mx-auto p-3 flex items-center justify-between">
      <div class="flex-auto flex gap-8">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/logo.svg" alt="Leboncoincoin logo" class="inline-block mx-2 h-12" />
        </router-link>
        <ul
          v-if="user"
          class="flex gap-8 menu"
        >
          <router-link
            :to="{ name: 'create:nft' }"
            v-slot="{ navigate }"
            custom
          >
            <li
              class="cursor-pointer flex flex-col items-center text-dark-gray"
              @click="navigate"
            >
              <PlusCircleIcon class="h-8 w-8" />
              <span class="text-sm text-center">Créer ton NFT</span>
            </li>
          </router-link>
        </ul>
      </div>
      <div>
        <ul class="flex gap-8 menu">
          <li
            v-if="!user"
            class="cursor-pointer flex flex-col items-center text-dark-gray"
            @click.prevent="connexion = true"
          >
            <UserCircleIcon class="h-8 w-8" />
            <span class="text-sm">Connexion</span>
          </li>
          <template v-else>
            <li
              class="cursor-pointer flex flex-col items-center text-dark-gray"
              @click.prevent="$router.push({ name: 'show:user-collection' })"
            >
              <PhotographIcon class="h-8 w-8" />
              <span class="text-sm text-center">Mes collections</span>
            </li>
            <li
              class="cursor-pointer flex flex-col items-center text-dark-gray"
              @click.prevent="$store.dispatch('disconnect')"
            >
              <UserCircleIcon class="h-8 w-8" />
              <span class="text-sm">Déconnexion</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppPopin from '../components/AppPopin.vue'
import { PlusCircleIcon, UserCircleIcon, PhotographIcon } from '@heroicons/vue/outline'

export default {
  name: 'AppHeader',
  data () {
    return {
      query: undefined,
      connexion: false,
      error: undefined
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  watch: {
    connexion (value) {
      if (value) {
        this.error = undefined
      }
    }
  },
  methods: {
    async connect (providerName) {
      try {
        this.error = undefined

        if (await this.$store.dispatch('connexion', providerName)) {
          this.connexion = false
        }
      } catch (e) {
        console.log('Error:', e)
        switch (e) {
          case 'WORST_CHAIN':
            this.error = 'La blockchain sélectionnée doit être Polygon'
            break
        }
      }
    }
  },
  components: {
    AppPopin,
    PlusCircleIcon,
    UserCircleIcon,
    PhotographIcon
  }
}
</script>

<style lang="scss" scoped>
.menu {
  & > li {
    transition: 0.2s ease-out color;

    &:hover {
      color: black;
    }
  }
}
</style>
