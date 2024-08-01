<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="`#icon-${name}`" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  name: string
  width?: string
  height?: string
  color?: string
}>()
</script>
