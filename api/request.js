module.exports = function HTTP(objAll){
    
    return  new Promise(function(resolve,reject){

        wx.request({
            header: {
              'content-type': 'application/json', // 默认值
            //   "acess_token": wx.getStorageSync('token') //token 令牌
            },
            ...objAll,
            success(res){  //成功返回
                resolve(res.data);
            },
            fail(err){   //失败返回
                reject(err);
            },
            complete(){  //执行后回调

            }
        })


    })

}