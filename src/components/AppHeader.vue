<template>
  <div class="bg-white">
    <div class="max-w-screen-lg mx-auto p-3 flex items-center justify-between">
      <div class="flex-auto">
        <router-link :to="{ name: 'home' }">
          <img src="../assets/logo.png" alt="Leboncoincoin logo" class="inline-block mx-2 h-16" />
        </router-link>
        <router-link
          :to="{ name: 'create:nft' }"
          v-slot="{ navigate }"
          custom
        >
          <app-button type="button" @click="navigate">
            Créer un NFT
          </app-button>
        </router-link>
      </div>
      <div>
        <app-button type="button" color="primary">
          Connexion
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
  name: 'AppHeader',
  data () {
    return {
      query: undefined
    }
  },
  methods: {
    search () {
      // TODO
    }
  },
  components: {
    AppButton
  }
}
</script>
