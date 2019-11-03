
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


//登录
export const login = params => {
    return http({
        url: `/api/admin/login`,
        method: 'POST',
        data: params
    })
}