<template>
  <div class="max-w-screen-lg mx-auto mt-8 p-4">
    <h1 v-if="!$route.params.addr" class="text-4xl font-bold py-2">Mes collections</h1>
    <h1 v-else class="text-4xl font-bold py-2">Collections de {{ $route.params.addr }}</h1>
  </div>
  <div class="w-full mt-8 p-4">
    <Loader v-if="!collection" class="my-16 mx-auto" />
    <div v-else class="lg:flex">
      <div class="lg:w-1/2">
        <h2 class="text-2xl font-bold py-2">Mes NFTs</h2>
        <p v-if="collection.items.length === 0">Rien pour le moment 😉</p>
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <nft-card
            v-for="item in collection.items"
            :key="JSON.stringify(item)"
            :id="item.tokenId"
            :title="item.name"
            :desc="item.description"
            :thumbnail="item.image"
            :price="item.price"
          />
        </div>
      </div>
      <div class="lg:w-1/2 mt-8 lg:mt-0">
        <h2 class="text-2xl font-bold py-2">Mes Créations</h2>
        <p v-if="collection.created.length === 0">Rien pour le moment 😉</p>
        <div
          v-else
          class="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <nft-card
            v-for="item in collection.created"
            :key="JSON.stringify(item)"
            :id="item.tokenId"
            :title="item.name"
            :desc="item.description"
            :thumbnail="item.image"
            :price="item.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NftCard from '@/components/NftCard.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'UserCollections',
  computed: {
    user () {
      return this.$store.state.user
    },
    collection () {
      return this.$store.state.collection
    }
  },
  mounted () {
    this.$store.dispatch('loadMyCollection')
  },
  components: {
    NftCard,
    Loader
  }
}
</script>
