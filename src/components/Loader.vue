<template>
  <div class="loader h-16 w-16"></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loader {
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    background: rgb(252, 41, 122);
    opacity: 0.5;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }

  &:before {
    animation: 0.8s ease-out infinite alternate zoomOut;
  }

  &:after {
    transform: scale(0);
    animation: 0.8s ease-out infinite alternate zoomIn;
  }
}

@-webkit-keyframes zoomOut { from { transform: scale(1); } to { transform: scale(0); }  }
@keyframes zoomOut { from { transform: scale(1); } to { transform: scale(0); }  }

@-webkit-keyframes zoomIn { to { transform: scale(1); } from { transform: scale(0); }  }
@keyframes zoomIn { to { transform: scale(1); } from { transform: scale(0); }  }
</style>