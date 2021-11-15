<template>
  <app-popin
    :show="nft ? true : false"
    title="Mon super titre" @close="nft = undefined"
  >
    <div class="p-8">
      <table class="table-auto w-full">
        <tr>
          <th class="text-left">Item</th>
          <th class="text-right">Prix</th>
        </tr>
        <tr>
          <td>
            <div class="flex items-center">
              <div class="flex-none flex items-center h-16 w-16 mr-2">
                <img
                  v-if="nft.image"
                  class="w-full"
                  alt="NFT thumbnail"
                  :src="nft.image"
                />
              </div>
              <div>
                <div>{{ nft.name }}</div>
                <div class="text-xs">{{ nft.description }}</div>
              </div>
            </div>
          </td>
          <td class="text-right">
            {{ nft.price }}
          </td>
        </tr>
        <tr class="font-bold">
          <td>Total</td>
          <td class="text-right">{{ nft.price }}</td>
        </tr>
      </table>
    </div>
    <div class="text-center p-2">
      <app-button type="button" color="primary" @click="approve">Approuver</app-button>
    </div>
  </app-popin>
  <div class="max-w-screen-lg mx-auto mt-8">
    <div class="text-xl p-2">{{ items.length }} resultats</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <nft-card
        v-for="item in items"
        :key="JSON.stringify(item)"
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
import NftCard from '../components/NftCard.vue'
import AppPopin from '../components/AppPopin.vue'
import AppButton from '../components/AppButton.vue'

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
      console.log('Buy:', item)
      this.nft = item
    },
    approve () {
      // TODO
      alert('To do')
    }
  },
  components: {
    NftCard,
    AppPopin,
    AppButton
  }
}
</script>
