<script setup lang="ts">
import { usePageVisibility } from '@vant/use'
import SvgOverview from '@/assets/svgs/SvgOverview.vue'
import SvgPreview from '@/assets/svgs/SvgPreview.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import router from '@/router'
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()
const text = ref('')
const show = ref(false)
const checked = ref(true)
const value1 = ref(0)
const value2 = ref('a')
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
]
const activeId = ref(1)
const activeIndex = ref(0)
const items = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
      { text: '宁波', id: 3, disabled: true }
    ]
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 4 },
      { text: '无锡', id: 5 },
      { text: '徐州', id: 6 }
    ]
  },
  { text: '福建', disabled: true }
]

const onConfirm = (dates: any) => {
  show.value = false
  text.value = `选择了 ${dates.length} 个日期`
}

const pageVisibility = usePageVisibility()
watch(pageVisibility, (value) => {
  console.log('page visibility: ', value)
})
</script>

<template>
  <div class="home">
    <van-space direction="vertical" style="width: 100%">
      <p>Home Page - {{ systemStore.system }}</p>
      <van-divider>纯色icon/svg/引用svg文件</van-divider>
      <van-space>
        <van-icon name="cart-o" :color="systemStore.themeVars.primaryColor" size="40" />
        <SvgIcon
          name="currentColor"
          width="50"
          height="50"
          :color="systemStore.themeVars.primaryColor"
        ></SvgIcon>
        <SvgIcon name="overview" width="50" height="50"></SvgIcon>
      </van-space>
      <van-divider>渐变色svg组件</van-divider>
      <van-space>
        <SvgOverview></SvgOverview>
        <SvgOverview
          :color1="systemStore.themeVars.stopColor"
          :color2="systemStore.themeVars.primaryColor"
          :linearGradientId="systemStore.system"
          width="50px"
          height="50px"
        ></SvgOverview>
        <SvgPreview></SvgPreview>
        <SvgPreview
          :linearGradientId="systemStore.system"
          :color1="systemStore.themeVars.stopColor"
          :color2="systemStore.themeVars.primaryColor"
          width="50px"
          height="50px"
        ></SvgPreview>
      </van-space>
      <van-divider>其他主题组件</van-divider>
      <van-space>
        <van-button type="primary" @click="() => router.push('/test?id=1')"
          >跳转测试页面</van-button
        >
      </van-space>
      <van-button type="primary" @click="show = true">选择多个日期</van-button>
      <van-cell title="" :value="text" />
      <van-calendar v-model:show="show" type="multiple" @confirm="onConfirm" />
      <van-checkbox v-model="checked"></van-checkbox>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <van-steps :active="1">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <van-tag type="primary">标签</van-tag>
      <van-tabs :active="1">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
      <van-tree-select
        v-model:active-id="activeId"
        v-model:main-active-index="activeIndex"
        :items="items"
      />
    </van-space>
    <van-icon name="wap-home" class="icon-home" @click="() => router.replace('/')" />
  </div>
</template>
<style>
.home {
  display: flex;
  font-size: 46px;
  padding: 20px;
}
.icon-home {
  font-size: 60px;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
