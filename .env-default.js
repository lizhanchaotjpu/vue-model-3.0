// 不同环境访问不同的路径
const api = {
  develop: 'http://127.0.0.1:8080',
  mock: 'http://www.baidu.com',
  feature: 'http://www.baidu.com',
  test: 'http://www.baidu.com',
  production: 'http://www.baidu.com'
}

export const baseURL = api[process.env.NODE_ENV || 'dev']
