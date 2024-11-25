<script setup lang="ts">
import AdventDoor from "@/components/AdventDoor.vue";
import { useAppStore } from "@/stores/app";
import { shuffelWithSeed } from "@/utils";
import { computed } from "vue";

const appStore = useAppStore();

const shuffeledDoors = computed(() => shuffelWithSeed(42, appStore.doorNames));
</script>

<template>
  <main class="home">
    <div class="doors">
      <AdventDoor v-for="door in shuffeledDoors" :key="door" :door="door" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.doors {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: min(90vw, 1200px);
  height: min(90vh, 800px);
}

@media (min-aspect-ratio: 1 / 1) {
  .doors {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}

@media (max-aspect-ratio: 1 / 1) {
  .doors {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
}
</style>
