<script setup lang="ts">
defineProps<{
  pineFoliageColor: string;
  pineTrunkColor: string;
}>();
</script>

<template>
  <svg
    version="1.1"
    viewBox="0 0 384 512"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
  >
    <path
      d="m192 5.12e-6a10.1 10.1 0 0 0-8.13 4.09l-61.6 82.9a6.85 6.85 0 0 0 5.5 10.9h18.2l-69.4 101a10.8 10.8 0 0 0 8.89 16.9h20.7l-73.6 102a10.4 10.4 0 0 0 8.46 16.6h22.6l-55.6 103a10.8 10.8 0 0 0 9.5 16h349a10.8 10.8 0 0 0 9.5-16l-55.6-103h22.6a10.4 10.4 0 0 0 8.46-16.6l-73.6-102h20.7a10.8 10.8 0 0 0 8.89-16.9l-69.4-101h18.2a6.85 6.85 0 0 0 5.5-10.9l-61.6-82.9a10.1 10.1 0 0 0-8.13-4.09z"
      :fill="pineFoliageColor"
    />
    <path
      d="m160 453v47.9a11.4 11.4 0 0 0 11.4 11.4h41.3a11.4 11.4 0 0 0 11.4-11.4v-47.9z"
      :fill="pineTrunkColor"
    />
  </svg>
</template>
