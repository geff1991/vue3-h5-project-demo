import http from './request'

export function getAction(url: string, params: any) {
  return http.request({
    url: url,
    method: 'GET',
    params
  })
}

export function postAction(url: string, params: any) {
  return http.request({
    url: url,
    method: 'POST',
    data: params
  })
}

export function putAction(url: string, params: any) {
  return http.request({
    url: url,
    method: 'PUT',
    data: params
  })
}

export function deleteAction(url: string, params: any) {
  return http.request({
    url: url,
    method: 'DELETE',
    params
  })
}
