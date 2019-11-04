
import http from '@/utils/request';

const baseURL = '/api'


//拉取用户信息
export const userInfo = params => {
    return http({
        url: `/api/admin/info`,
        method: 'GET',
        params
    })
}


//账户登录
export const loginName = params => {
    return http({
        url: `/api/admin/login/name`,
        method: 'POST',
        data: params
    })
}


//邮箱登陆
export const loginEmail = params => {
    return http({
        url: `/api/admin/login/email`,
        method: 'POST',
        data: params
    })
}









