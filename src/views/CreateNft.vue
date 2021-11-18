<template>
  <div class="max-w-screen-md mx-auto mt-8 p-4">
    <h1 class="text-4xl font-bold py-2">Créer ton NFT</h1>
    <form action="#" enctype="multipart/form-data" @submit.prevent="create">
      <div class="my-4">
        <label class="block text-xl py-2" for="asset">Image...</label>
        <input class="visibility-hidden h-0" id="asset" type="file" />
      </div>
      <div class="my-4">
        <label class="block text-xl py-2" for="name">Nom</label>
        <input class="block w-full p-2" id="name" type="text" v-model="name" />
      </div>
      <div class="my-4">
        <label class="block text-xl py-2" for="desc">Description</label>
        <textarea class="block w-full p-2 resize-y h-32" id="desc" type="text" v-model="desc"></textarea>
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
import AppButton from '@/components/AppButton.vue'

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

<style lang="scss" scoped>
label[for=asset] {
  position: relative;
  padding-bottom: 136px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    height: 128px;
    border: 3px dashed rgb(200, 200, 200);
    border-radius: 8px;
  }

  &:after {
    content: 'Sélectionner un fichier';
    text-align: center;
    vertical-align: middle;
    line-height: 116px;
    position: absolute;
    bottom: 6px; left: 6px;
    width: calc(100% - 12px);
    height: 116px;
    border-radius: 8px;
    background: rgba(220, 220, 220, 0);
    transition: 0.2s ease-out background;
  }

  &:hover {
    &:after {
      background: rgba(220, 220, 220, 1);
    }
  }
}
</style>
