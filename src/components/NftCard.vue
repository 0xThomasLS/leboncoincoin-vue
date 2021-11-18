<template>
  <div class="bg-gray rounded-md m-2 flex flex-col overflow-hidden cursor-pointer" @click="openDetail">
    <!-- Thumbnail -->
    <div class="flex-none flex rounded-t-md bg-gray h-48">
      <img
        v-if="thumbnail"
        class="max-w-full max-h-full mx-auto"
        alt="NFT thumbnail"
        :src="thumbnail"
      />
    </div>

    <!-- Meta -->
    <div class="flex-none flex justify-between items-center p-2">
      <div class="font-bold text-lg">
        {{ title }}
      </div>
      <div class="flex items-center bg-blue text-xs">
        <span>{{ price }}</span>
        <img src="@/assets/valou.png" alt="Valou logo" class="mx-2 h-4 w-4" />
      </div>
    </div>
    <div :class="[ 'flex-auto', 'px-2', 'text-xs', { 'rounded-b-md pb-2': !user } ]">
      {{ desc }}
    </div>

    <!-- Manage -->
    <div
      v-if="user"
      class="flex-none mt-2 flex rounded-b-md shadow-sm shadow-inner"
    >
      <app-button
        class="flex-grow"
        type="button"
        color="primary"
        @click.stop="$emit('buy')"
      >
        Acheter
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
  name: 'NftCard',
  props: {
    title: {
      type: String,
      require: true
    },
    id: {
      type: [ Number, String ],
      require: true
    },
    desc: {
      type: String
    },
    thumbnail: {
      type: String
    },
    price: {
      type: [ Number, String ],
      require: true
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    openDetail () {
      this.$router.push({
        name: 'show:nft',
        params: {
          id: this.id
        }
      })
    }
  },
  components: {
    AppButton
  }
}
</script>
