// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollHeigth:667,
        conId:0,//默认选项
        categoryItem:[
            "签到",
            "附近",
            "展会",
            "福利",
            "玩乐",
            "体育",
            "周边",
            "亲子",
        ],
        content:[
            [
                {
                    "img":"../../images/goods01.jpeg",
                    "name":"商品"
                },
                {
                    "img":"../../images/goods02.jpeg",
                    "name":"商品"
                },
                {
                    "img":"../../images/goods01.jpeg",
                    "name":"商品"
                },
                {
                    "img":"../../images/goods03.jpeg",
                    "name":"商品"
                }
            ],
            [
                {
                    "img":"../../images/goods01.jpeg",
                    "name":"商品"
                },
                {
                    "img":"../../images/goods02.jpeg",
                    "name":"商品"
                }
            ],
            [
                {
                    "img":"../../images/goods01.jpeg",
                    "name":"商品"
                },
                {
                    "img":"../../images/goods03.jpeg",
                    "name":"商品"
                }
            ],
            [
                {
                    "img":"../../images/goods01.jpeg",
                    "name":"商品"
                },
                {
                    "img":"../../images/goods03.jpeg",
                    "name":"商品"
                }
            ],
        ]
    },

    setId(options){
        let id = options.target.dataset.id;
        // 修改data数据
        this.setData({
            conId:id
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        // 页面初始化只加载一次
        console.log("---------onload--------------")

        wx.getSystemInfo({
          success: (result) => {
              console.log(result.windowHeight)
              // 返回数据到视图 页面
                this.setData({
                    scrollHeigth:result.windowHeight
                })
          },
        })


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 页面初次渲染加载一次
        console.log("---------onReady--------------")

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // 底部导航切换显示
        console.log("---------onShow--------------")

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 底部导航切换隐藏
        console.log("---------onHide--------------")

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("---------onUnload--------------")
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