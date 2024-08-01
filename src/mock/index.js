import Mock from 'mockjs'
// 引入模板函数类
import test from './modules/test'

const { mock } = Mock // Mock函数

// 使用拦截规则拦截命中的请求
mock('/api/test', 'get', test.getTestData)
mock('/report', 'post', test.reportData)
