<template>
  <button
    :class="['px-3', 'py-2', 'm-2', 'bg-' + color, 'rounded-md', 'text-white', 'font-medium']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: 'orange'
    }
  }
}
</script>
