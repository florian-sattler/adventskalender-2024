<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import type { DoorNumbers } from "@/types";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import PineTree from "./PineTree.vue";

const props = defineProps<{
  door: DoorNumbers[number];
}>();

const appStore = useAppStore();
const router = useRouter();

const doorState = computed(() => appStore.doorStates[props.door]);
const pineFoliage = computed<string>(() => appStore.foliageColors[props.door]);
const pineTrunk = computed<string>(() => appStore.trunkColors[props.door]);

const lockAnimation = ref<boolean>(false);

const openDoor = () => {
  // if door can't be opened, show locked animation
  if (!appStore.canOpenDoor(props.door)) {
    lockAnimation.value = true;
    setTimeout(() => (lockAnimation.value = false), 550);
    return;
  }

  appStore.doorStates[props.door].opened = true;

  router.push({
    name: "door",
    params: { door: props.door },
  });
};
</script>

<template>
  <div class="door" :class="{ opened: doorState.opened, locked: lockAnimation }" @click="openDoor">
    <PineTree :pine-foliage-color="pineFoliage" :pine-trunk-color="pineTrunk" />
    <div class="door-number" :class="{ 'more-space': door == '11' }">{{ doorState.door }}</div>
  </div>
</template>

<style lang="scss" scoped>
.door {
  position: relative;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: underline;
  transition: color 0.5s ease;

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.door.opened {
  color: #353535;
}

.door.locked {
  animation: wiggle 0.5s ease;
  transform-origin: bottom center;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.door-number {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  font-family: "Shadows Into Light";
  font-size: 2.5rem;
  font-weight: bold;
  user-select: none;

  &.more-space {
    letter-spacing: 2px;
  }
}
</style>
