<script setup lang="ts">
import { getTestData } from '@/api/test'
import router from '@/router'

defineProps<{ msg?: string }>()
const count = ref(0)
const tips = ref('')

function add() {
  count.value++
  getTestData({}).then((res) => {
    tips.value = res.data.message
  })
}
</script>

<template>
  <van-space direction="vertical" style="width: 100%">
    <p>test page</p>
    <h1>{{ msg }}</h1>
    <h1>{{ tips }}</h1>
    <van-button type="primary" @click="add">count is: {{ count }}</van-button>
    <van-button type="primary" @click="() => router.back()">返回</van-button>

    <van-button type="primary" @click="() => router.push('/test?id=2')">跳转页面</van-button>
  </van-space>
</template>
