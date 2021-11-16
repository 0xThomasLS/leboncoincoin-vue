<template>
  <app-popin
    :show="item ? true : false"
    title="Panier"
    @close="close"
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
                  v-if="item.image"
                  class="w-full"
                  alt="NFT thumbnail"
                  :src="item.image"
                />
              </div>
              <div>
                <div>{{ item.name }}</div>
                <div class="text-xs">{{ item.description }}</div>
              </div>
            </div>
          </td>
          <td class="text-right">
            {{ item.price }}
          </td>
        </tr>
        <tr class="font-bold">
          <td>Total</td>
          <td class="text-right">{{ item.price }}</td>
        </tr>
      </table>
    </div>
    <div class="text-center p-2">
      <app-button type="button" color="primary" @click="approve">Approuver</app-button>
    </div>
  </app-popin>
</template>

<script>
import AppPopin from '../components/AppPopin.vue'
import AppButton from '../components/AppButton.vue'

export default {
  name: 'Home',
  data () {
    return {
      item: undefined
    }
  },
  props: {
    nft: {
      type: [ Boolean, Object ],
      require: true
    }
  },
  mounted () {
    this.item = this.nft
  },
  watch: {
    nft (value) {
      this.item = value
    }
  },
  methods: {
    approve () {
      // TODO
      alert('To do')
    },
    close () {
      this.item = undefined
      this.$emit('close')
    }
  },
  components: {
    AppPopin,
    AppButton
  }
}
</script>
