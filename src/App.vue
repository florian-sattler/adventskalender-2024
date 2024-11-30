<script setup lang="ts">
import { RouterView } from "vue-router";

const snowConfig = {
  particles: {
    color: {
      value: "#fff",
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 1.25,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 900,
    },
    opacity: {
      value: 0.9,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 4,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
    },
  },
};
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <vue-particles id="tsparticles" :options="snowConfig" />
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
