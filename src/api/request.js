import axios from 'axios'
import router from '../router'

import {
    baseUrl
} from '@/config'

import {
    Message
} from 'element-ui'
// 创建axios实例
const service = axios.create({
    baseURL: baseUrl
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers['language'] = sessionStorage['locale'] === 'en' ? 2 : 0;
    config.headers['token'] = sessionStorage['token'] || '';
    return config
}, error => {
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        if (response.headers['token']) {
            sessionStorage.setItem('token', response.headers['token'])
        }
        const status = response.data.code;
        if (status == 401) {
            // router.replace('/login');
            conslog.log("111111")
            setTimeout(() => {
                Message({
                    type: 'error',
                    message: response.data.msg,
                    duration: 5 * 1000
                })
            }, 0)
        } else {
            return response.data
        }
    },
    error => {
        console.log("1111111111111")
        setTimeout(() => {
            Message({
                type: 'error',
                message: error,
                duration: 5 * 1000
            })
        }, 0)
    }
)

export default service