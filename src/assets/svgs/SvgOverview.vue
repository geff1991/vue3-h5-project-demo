<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>编组 71</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="99.3315157%" :id="linearGradientId">
        <stop :stop-color="color1" offset="0%"></stop>
        <stop :stop-color="color2" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="估值模型APP" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="个股估值详情-财务分析(价值创造分析)" transform="translate(-91.000000, -485.000000)">
        <g id="财务分析模块" transform="translate(32.000000, 466.000000)">
          <g id="编组-71" transform="translate(59.000000, 19.000000)">
            <rect id="矩形" x="0" y="0" width="40" height="40"></rect>
            <path
              d="M31,3 C33.209139,3 35,4.790861 35,7 L35,33 C35,35.209139 33.209139,37 31,37 L9,37 C6.790861,37 5,35.209139 5,33 L5,7 C5,4.790861 6.790861,3 9,3 L31,3 Z M29.8,26 L10.6,26 C9.7163444,26 9,26.7163444 9,27.6 C9,28.4836556 9.7163444,29.2 10.6,29.2 L10.6,29.2 L29.8,29.2 C30.6836556,29.2 31.4,28.4836556 31.4,27.6 C31.4,26.7163444 30.6836556,26 29.8,26 L29.8,26 Z M29.8,20 L10.6,20 C9.7163444,20 9,20.7163444 9,21.6 C9,22.4836556 9.7163444,23.2 10.6,23.2 L10.6,23.2 L29.8,23.2 C30.6836556,23.2 31.4,22.4836556 31.4,21.6 C31.4,20.7163444 30.6836556,20 29.8,20 L29.8,20 Z M15,7 L11,7 C9.8954305,7 9,7.8954305 9,9 L9,9 L9,13 C9,14.1045695 9.8954305,15 11,15 L11,15 L15,15 C16.1045695,15 17,14.1045695 17,13 L17,13 L17,9 C17,7.8954305 16.1045695,7 15,7 L15,7 Z"
              id="形状结合"
              :fill="`url(#${linearGradientId})`"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '40px'
  },
  height: {
    type: String,
    default: '40px'
  },
  color1: {
    type: String,
    default: '#E6E6E6'
  },
  color2: {
    type: String,
    default: '#B4B4B4'
  },
  linearGradientId: {
    type: String,
    default: 'linearGradient-1'
  }
})
</script>
