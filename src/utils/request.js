/*
 * @Author: 情雨随风 
 * @Date: 2019-11-02 20:25:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-03 14:22:08
 * @Description: 网络请求
 */

import axios from 'axios';
import { notification } from 'ant-design-vue';


const baseURL = process.env.NODE_ENV === 'production' ? '' : '/api'
const service = axios.create({
    baseURL: baseURL,
    timeout: 6000
})


//请求拦截
service.interceptors.request.use(config => {
   config.headers.Authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZGI5NTg0YTU4Y2NhNzM3NThjMzk2NjgiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NzI3NjIxMTIsImV4cCI6MTU3Mjc2OTMxMn0.shaD9osa_J69Ja_r1nfaMOr8lOUdAQk7EjTouGqFEts`
    
    return config;
}, error => {
    console.error(error)
    return Promise.resolve([true, error]);
});


//响应拦截
service.interceptors.response.use(response => {
    return [null, response.data];
}, error => {
    const data = error.response.data
    //常规错误拦截
    if (error.response.status === 400) {
        notification.error({
            message: data.message,
            description: '',
            duration: 2
        })
    }
    //未登录拦截
    else if(error.response.status === 401) {
        notification.error({
            message: data.message,
            description: '',
            duration: 2
        })
    }
    //权限拦截
    else if (error.response.status === 403) {
        notification.error({
            message: data.message,
            description: '',
            duration: 2
        })
    }
    //其他错误
    else {
        notification.error({
            message: data.message,
            description: '',
            duration: 2
        })
    }
    return Promise.resolve([true, error.response.data]);
});


export default service;