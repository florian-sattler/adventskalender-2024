<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <div class="snow"></div>
</template>

<style lang="scss">
body {
  background: linear-gradient(
    to bottom,
    #eceef1 0%,
    #eceef1 30%,
    #e7eaef 40%,
    #e7eaef 70%,
    #eceef1 80%,
    #eceef1 100%
  );
}
#app {
  min-height: 100dvh;
  display: grid;
  place-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
