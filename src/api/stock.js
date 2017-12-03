import request from '@/utils/request'

export function fetchList () {
  return request({
    url: '/stock/glance',
    method: 'get'
  })
}
