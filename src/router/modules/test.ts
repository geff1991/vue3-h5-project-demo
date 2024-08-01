const testRoutes = [
  {
    path: '/test',
    name: 'TestPage',
    component: () => import('@/views/test/TestPage.vue'),
    meta: { title: '测试页面' }
  }
]

export default testRoutes
