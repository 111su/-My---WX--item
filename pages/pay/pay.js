// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      // 获取缓存数据
      var getCardata = wx.getStorageSync('GoodsCarList');
      console.log(getCardata)

      this.setData({
          goodsList: getCardata,
      })
      this.getTotal(); //计算总价格
  },

  // 计算总价格
  getTotal(){
      // 计算总价格
      let goodsList = this.data.goodsList;

      if(goodsList.length){
          let data = goodsList.reduce((total,item)=>{
              total = total + item.num * item.goodsPrice;
              return total;
          },0)
  
          
          this.setData({
              totalData:data
          })
      }
      

  },

  goOrder(){
      wx.navigateTo({
        url: '/pages/order/order',
      })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

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