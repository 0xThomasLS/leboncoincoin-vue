<template>
  <div class="bg-white rounded-md m-2 flex flex-col overflow-hidden">
    <!-- Thumbnail -->
    <div class="flex-none rounded-t-md bg-gray h-48">
      <img
        v-if="thumbnail"
        class="h-full mx-auto"
        alt="NFT thumbnail"
        :src="thumbnail"
      />
    </div>

    <!-- Meta -->
    <div class="flex-none flex justify-between items-start p-2">
      <div class="font-bold text-lg">
        {{ title }}
      </div>
      <div class="flex items-center bg-blue">
        <span>{{ price }}</span>
        <img src="../assets/logo.png" alt="Valou logo" class="mx-2 h-6" />
      </div>
    </div>
    <div class="flex-auto px-2 text-xs">
      {{ desc }}
    </div>

    <!-- Manage -->
    <div class="flex-none mt-2 flex rounded-b-md shadow-sm shadow-inner">
      <app-button
        class="flex-grow"
        type="button"
        color="primary"
        @click.prevent="$emit('buy')"
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
  components: {
    AppButton
  }
}
</script>
