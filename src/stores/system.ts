import { defineStore } from 'pinia'
import { themeVarsBlueH5 } from '@/assets/theme/blueH5'
import { themeVarsRedMini } from '@/assets/theme/redMini'

// 判断当前是否接入到微信小程序中，以及输出对应的主题色
export const useSystemStore = defineStore('systemStore', () => {
  // @ts-ignore
  const isMiniProgram = window.__wxjs_environment === 'miniprogram'
  const system = isMiniProgram ? 'miniprogram' : 'h5'
  const themeVars = isMiniProgram ? themeVarsRedMini : themeVarsBlueH5
  return { isMiniProgram, themeVars, system }
})
