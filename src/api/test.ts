import { deleteAction, getAction, postAction, putAction } from '@/utils/httpAction'

/**
 * 获取测试信息
 * @param {*} params
 * @returns
 */
export function getTestData(params: any) {
  return getAction('/api/test', params)
}
