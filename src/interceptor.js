import axios from 'axios'
import Qs from 'qs'

let instance = axios.create({
  timeout: 1000 * 20,
  headers: '',
  transformRequest: [function (data) {
    data = Qs.stringify(data)
    return data
  }]
})

// 在实例已创建后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
