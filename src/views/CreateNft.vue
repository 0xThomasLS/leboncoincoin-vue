<template>
  <div class="max-w-screen-md mx-auto mt-8 p-4">
    <h1 class="text-4xl font-bold py-2">Créer ton NFT</h1>
    <form action="#" enctype="multipart/form-data" @submit.prevent="create">
      <div class="my-4">
        <label class="block text-xl py-2" for="asset">Image...</label>
        <input class="block w-full p-2" id="asset" type="file" />
      </div>
      <div class="my-4">
        <label class="block text-xl py-2" for="name">Nom</label>
        <input class="block w-full p-2" id="name" type="text" v-model="name" />
      </div>
      <div class="my-4">
        <label class="block text-xl py-2" for="desc">Description</label>
        <textarea class="block w-full p-2 resize-y h-48" id="desc" type="text" v-model="desc"></textarea>
      </div>
      <div class="my-4">
        <label class="block text-xl py-2" for="price">Prix</label>
        <input class="block w-full p-2" id="price" type="number" v-model="price" />
      </div>
      <div class="my-4 text-right">
        <app-button type="submit" color="primary">
          Créer
        </app-button>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from '../components/AppButton.vue'

export default {
  name: 'CreateNft',
  data () {
    return {
      name: undefined,
      desc: undefined,
      price: undefined
    }
  },
  methods: {
    create () {
      // TODO
      alert('To do')
    }
  },
  components: {
    AppButton
  }
}
</script>