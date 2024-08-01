<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSystemStore } from '@/stores/system'
const systemStore = useSystemStore()
</script>

<template>
  <van-config-provider :theme-vars="systemStore.themeVars" theme-vars-scope="global">
    <RouterView v-wechat-title="$route.meta.title" />
  </van-config-provider>
</template>

<style></style>
