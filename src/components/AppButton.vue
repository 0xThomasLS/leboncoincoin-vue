<template>
  <button
    :class="['px-3', 'py-2', 'm-2', 'bg-' + color, 'rounded-md', 'text-white', 'font-medium', 'z-1']"
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
      default: 'pink'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: 0.2s ease-out background;
  }

  &:hover {
    &:before {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>