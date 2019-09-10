/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:06:28 
 * @Last Modified by:  情雨随风 
 * @Last Modified time: 2019-09-09 23:06:28 
 * @Description: 工具函数
 */


import Cookies from 'js-cookie'

/**
 * 读取cookie
 * @param { String } key
 */
export function getStore({ key }) {
    const Store = Cookies.get(key)
    return Store
}

/**
 * 存储cookie
 * @param { String } key
 * @param { Object } data
 */
export function setStore({ key,data }) {
    Cookies.set(key, JSON.stringify(data), { expires: 1 })
    return true
}

/**
 * 删除cookie
 * @param { String } key
 */
export function removeStore({ key }) {
    Cookies.remove(key)
    return true
}