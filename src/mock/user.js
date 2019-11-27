import Mock from 'mockjs'


Mock.mock('/api/login', 'post', (options) => {
  let { username, password } = JSON.parse(options.body).params;
 
  if ((/^1[3456789]\d{9}$/.test(username))) {
    return {
      code: 1,
      username: username,
      message: '登录成功'
    }
  } else {
    return {
      code: 0,
      message: '请输入正确的手机号'
    }
  }


})

