// pages/details/details.js
var WxParse = require('../../pages/wxParse/wxParse');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_id:"",
      imgs: [
          "../../image/goods01.jpg",
          "../../image/goods02.jpg",
          "../../image/goods03.jpg",
          "../../image/goods04.jpg"
      ],
      goods: {
          // id: 5,
          // goodsName: "商品名称",
          // goodsImage: "../../image/goods01.jpg",
          // goodsImgs: [
          //     "../../image/goods01.jpg",
          //     "../../image/goods02.jpg",
          //     "../../image/goods03.jpg",
          // ],
          // goodsPrice: "210",
          // goodsPriceOld: "300",
          // goodsDetails: "../../image/IMG_0466.JPG"
      },
      num: 0
  },
  goCart() {
      wx.switchTab({
          url: '/pages/cart/cart',
      })
  },

  goHome() {
      wx.switchTab({
          url: '/pages/home/home',
      })
  },
  goPay() {
      wx.navigateTo({
          url: '/pages/pay/pay',
      })
  },
  // 存储缓存
  // 异步缓存
  // wx.setStorageSync  
  // wx.removeStorageSync
  // wx.getStorageSync
  // wx.getStorageInfoSync
  // wx.clearStorageSync
  // 同步缓存
  // wx.setStorage   修改 添加
  // wx.removeStorage  删除
  // wx.getStorageInfo 获取信息
  // wx.getStorage  获取数据
  // wx.clearStorage  清空数据
  getCart() {

      var CartLists = {
          id: this.data.goods.id,
          goodsName: this.data.goods.goodsName,
          goodsPrice: this.data.goods.goodsPrice,
          goodsImage: this.data.goods.goodsImage,
          goodsAddress: "广州",
          num: 1,
      }
      // 数据添加存储中
      // 1.判断数据缓存中是否有数据
      let GoodsCarList = wx.getStorageSync('GoodsCarList'); //获取数据
      console.log(GoodsCarList)
      if (GoodsCarList) {
          // 1有数据
          // 1.1有相同数据 数量加一
          // 返回数据下标
          let index = GoodsCarList.findIndex(item => {
              return item.id == this.data.goods.id;
          })
          if (index != -1) { //添加数量
              GoodsCarList[index].num += 1;
          } else {
              // 1.2有数据没有相同数据 添加数据push
              GoodsCarList.push(CartLists);
          }
          wx.setStorageSync('GoodsCarList', GoodsCarList)
      } else {
          // 2.没有数据添加数据
          wx.setStorageSync('GoodsCarList', [CartLists])
      }


      this.setData({
          num: wx.getStorageSync('GoodsCarList').length
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      let num=Number(options.id)
      this.setData({
        goods_id:num
      })
      console.log(this.data.goods_id);
      this.getGoodsData(this.data.goods_id); //请求数据
      
  },
  // 请求数据
  getGoodsData(id) {
      // 请求数据
      let _this = this;
      wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', //仅为示例，并非真实的接口地址
          data:{
            goods_id:id
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          success(res) {
              console.log(res)
              let {goods_id, goods_name, goods_small_logo,goods_price,pics,goods_introduce} = res.data.message;
              let data = {
                  id: goods_id,
                  goodsName: goods_name,
                  goodsImage: goods_small_logo,
                  goodsImgs: pics,
                  goodsPrice: goods_price,
                  goodsPriceOld: goods_price + 1000,
                  goodsDetails: goods_introduce
              }
              // html转富文本方式
              WxParse.wxParse('goods_introduce', 'html', goods_introduce, _this, 5);
              _this.setData({
                  goods:data
              })
              
          }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.setData({
          num: wx.getStorageSync('GoodsCarList').length || 0
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})