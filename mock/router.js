exports.user = [
  {
    url: '/mock/userInfo',
    method: 'post',
    response: {
      success: true,
      data: {
        name: '小丹',
        title: '设计总监'
      }
    }
  },
  {
    url: '/mock/test',
    method: 'get',
    // response可以写成函数的形式，取值为函数返回值
    response: (ctx) => {
      return {
        success: true,
        'data|1-20': [{
          name: '@cname'
        }]
      }
    }
  },
  {
    url: '/mock/test2',
    method: 'get',
    response: {
      success: true,
      'data|20': [{
        name: '@cname'
      }]
    }
  }
]