// wx.request({
//   url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', //这里填写你的接口路径
//   header: { //这里写你借口返回的数据是什么类型，这里就体现了微信小程序的强大，直接给你解析数据，再也不用去寻找各种方法去解析json，xml等数据了
//       'Content-Type': 'application/json'
//   },
//   data: {//这里写你要请求的参数
//      goods_id: '8888' ,
//   },

//   success: function(goods_id) {
//   //这里就是请求成功后，进行一些函数操作
//     console.log(goods_id)
//   }
// })