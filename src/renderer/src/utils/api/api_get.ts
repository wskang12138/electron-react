import request from '../request'
export function apiGet(interfaceName: string, param?: object) {
  let user: any = JSON.parse(localStorage.getItem('user') as string)
  console.log(user,6666666)
  let params ={
    ...param,
    name:user?.username,
    password:user?.password
  }
  return request({
    url: interfaceName,
    method: 'get',
    params
  })
}
