<script setup lang="ts">
import BackArrow from "@/components/BackArrow.vue";
import { useAppStore } from "@/stores/app";
import type { DoorNumbers } from "@/types";
import { computed } from "vue";
import { useRoute } from "vue-router";

const appStore = useAppStore();
const route = useRoute();

const door = computed<DoorNumbers[number]>(() => route.params.door as DoorNumbers[number]);

const videoId = computed(() => appStore.doorVideoIds[door.value]);
</script>

<template>
  <div class="door-view">
    <RouterLink :to="{ name: 'home' }" class="arrow-back"><BackArrow /> Zurück</RouterLink>

    <div class="door-number">Nr. {{ door }}</div>

    <iframe
      width="100%"
      height="100%"
      :src="`https://youtube.com/embed/${videoId}?autoplay=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.door-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
}

.door-number {
  font-family: "Shadows Into Light";
  font-size: 3rem;
  font-weight: bold;
}

.arrow-back {
  font-family: "Shadows Into Light";
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
}

iframe {
  width: calc(100vw - 120px);
  height: calc(100vh - 120px);
  border: none;
  border-radius: 20px;
}
</style>
