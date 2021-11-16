<template>
  <nft-popin
    :nft="buy ? nft : false"
    @close="buy = false"
  />
  <div
    v-if="nft"
    class="xl:flex show-nft"
  >
    <div class="flex-auto flex h-full overflow-auto items-center">
      <img
        class="h-auto mx-auto"
        alt="NFT thumbnail"
        :src="nft.image"
      />
    </div>
    <div class="flex-none flex flex-col bg-gray w-full xl:max-w-lg p-8 overflow-auto">
      <div class="flex-auto">
        <h1 class="text-4xl font-semibold">{{ nft.name }}</h1>
        <div class="text-dark-gray font-semibold">
          En vente pour <span class="text-black">{{ nft.price }} VALOU</span>
        </div>
        <p class="my-4">
          {{ nft.description }}
        </p>
      </div>
      <div class="flex-none flex items-center justify-center">
        <app-button type="button" @click="buy = true">
          Acheter pour <span class="font-bold">{{ nft.price }} VALOU</span>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import NftPopin from '../components/NftPopin.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'ShowNft',
  data () {
    return {
      buy: false
    }
  },
  computed: {
    nft () {
      if (this.$route.params.id) {
        return this.$store.getters.getNftById(this.$route.params.id)
      }
      return undefined
    }
  },
  components: {
    AppButton,
    NftPopin
  }
}
</script>

<style lang="scss">
.show-nft {
  height: calc(100vh - 80px);
}
</style>
