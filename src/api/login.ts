import request from '@/request/index'
// 定义接口的传参
interface Login {
	username: string,
	password: string
}

// 登录接口
export function handleLogin(params: Login) {
	return request({
		url: '',
		methods: 'post',
		data: params
	})
}