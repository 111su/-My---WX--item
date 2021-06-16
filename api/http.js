

export function getGoodsList(callback){
    wx.request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search', //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res){
            callback(res.data)
        }
    })
}


export function getdetailData(params,callback){
    wx.request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', //仅为示例，并非真实的接口地址
        data:params,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res){
            callback(res.data)
        }
    })
}


// 调用函数使用方式

// getGoodsList(function(res){
//     console.log("获取数据----》》》》",res);
//   })

// getdetailData({goods_id:57444},function(res){
// console.log("获取数据详情页----》》》》",res);
// })