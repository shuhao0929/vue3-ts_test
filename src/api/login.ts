// Ts引用文件 必须需要require


// const request = require('@/request/index.ts')

import request from '@/request/index'
// 定义接口的传参
interface Login {
	username: string,
	password: string
}

export function handleLogin(params: Login) {
	return request({
		url: '',
		methods: 'post',
		data: params
	})
}
