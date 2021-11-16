<template>
  <nft-popin :nft="nft" />
  <div class="max-w-screen-lg mx-auto mt-8">
    <div class="text-xl p-2">{{ items.length }} resultats</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <nft-card
        v-for="item in items"
        :key="JSON.stringify(item)"
        :id="item.id"
        :title="item.name"
        :desc="item.description"
        :thumbnail="item.image"
        :price="item.price"
        @buy="buyNft(item)"
      />
    </div>
  </div>
</template>

<script>
import NftCard from '@/components/NftCard.vue'
import NftPopin from '@/components/NftPopin.vue'

export default {
  name: 'Home',
  data () {
    return {
      nft: undefined
    }
  },
  computed: {
    items () {
      return this.$store.state.nfts
    }
  },
  methods: {
    buyNft (item) {
      this.nft = item
    },
    approve () {
      // TODO
      alert('To do')
    }
  },
  components: {
    NftCard,
    NftPopin
  }
}
</script>
