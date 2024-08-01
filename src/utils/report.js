import router from '@/router'

const minReportTime = 0 // 大于等于3000ms 才上报
const duration = {
  startTime: 0,
  value: 0,
  url: '',
  pageName: ''
}

// 上报页面停留时长
const reportDuration = () => {
  const time = new Date().getTime()
  duration.value = time - duration.startTime
  const { startTime, value, url, pageName } = duration
  if (value >= minReportTime) {
    console.log(
      `--- 上报页面停留时长 --- 开始时间： ${startTime}, 停留时长： ${value}, 页面地址： ${url}, 页面名称： ${pageName}`
    )
    // localStorage.setItem('report', JSON.stringify(duration)) // 测试刷新、关闭等上报数据
    // 上报接口，允许在页面卸载时异步发送数据
    navigator.sendBeacon('/report', JSON.stringify(duration))
  }
}

// 进入新路由前上报
router.beforeEach((to, from, next) => {
  console.log(to, from, 'beforeEach')
  // 首次进入页面时name为undefind 不上报
  if (from.name) {
    reportDuration()
  }
  next()
})

// 进入新路由后，开始新的计时
router.afterEach((to, from) => {
  const time = new Date().getTime()
  duration.startTime = time
  duration.url = to.fullPath
  duration.pageName = to.name
  console.log(to, from, 'afterEach')
})

// 页面没有任何跳转, 直接关闭页面或刷新页面的情况
window.addEventListener('beforeunload', () => {
  // 上报
  reportDuration()
})

// 应用切后台时上报
const handleVisibilityChange = () => {
  if (document.hidden) {
    reportDuration()
  } else {
    duration.startTime = new Date().getTime()
    duration.value = 0
  }
}
// 亦可参考api https://vant-ui.github.io/vant/#/zh-CN/use-page-visibility
document.addEventListener('visibilitychange', handleVisibilityChange)
