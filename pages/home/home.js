var {getGoodsList,getdetailData} = require('../../api/goods.js');

Page({

  data: {
  
    imgs:[
      {
        url:"../../images/font/扫一扫.png",
        text:"扫啊扫"
      },
    ],
    imgss:[
      {
        url:"../../images/font/信息.png",
        text:"信息"
      },
    ],
    banner:[
       "../../images/goods01.jpeg",
       "../../images/goods02.jpeg",
       "../../images/goods03.jpeg",
    ],
    lists:[
      {
        url:"../../images/font/01.png",
        text:"海鲜"
      },
      {
        url:"../../images/font/01.png",
        text:"母婴"
      },
      {
        url:"../../images/font/01.png",
        text:"护肤"
      },
      {
        url:"../../images/font/01.png",
        text:"家居"
      },
      {
        url:"../../images/font/01.png",
        text:"饮料"
      },
      {
        url:"../../images/font/01.png",
        text:"水果"
      },
      {
        url:"../../images/font/01.png",
        text:"电器"
      },
      {
        url:"../../images/font/01.png",
        text:"蔬菜"
      },
    ],
  },
 
  navtab(){
    console.log("111");
    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },

  onLoad: function (options) {
    console.log(getGoodsList);
    this.getGoodsData();
  },

  // 请求数据
  getGoodsData(){
    // 请求数据
    let _this = this;
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data.message.goods)
        let goodslist = res.data.message.goods;
        let lists = [];
        goodslist.forEach(item=>{
          let {goods_id,goods_name,goods_small_logo,goods_price} = item;
          let data = {
              id:goods_id,
              goodsImage:goods_small_logo,
              goodsName:goods_name,
              goodsAddress:"广州",
              goodsPrice:goods_price
            }
          
          if(goods_small_logo)
          {
            lists.push(data);
          }
            
          
        })
        console.log(lists);
        // 修改数据
        _this.setData({
          goodsList:lists,
        })
        console.log(_this.data.goodslist);
      }
    })
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
