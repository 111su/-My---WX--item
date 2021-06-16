// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        selectAllStatus:true ,
        goodsList: [
            // {
            //   id:"1",
            //   goodsImage:"../../image/goods01.jpg",
            //   goodsName:"1商品名称商品名称商品名称",
            //   goodsAddress:"广州",
            //   goodsPrice:"200",
            //   num:1,
            // },
            // {
            //   id:"1",
            //   goodsImage:"../../image/goods01.jpg",
            //   goodsName:"2商品名称商品名称商品名称",
            //   goodsAddress:"广州",
            //   goodsPrice:"200",
            //   num:1,
            // },
            // {
            //   id:"1",
            //   goodsImage:"../../image/goods01.jpg",totalData
            //   goodsName:"3商品名称商品名称商品名称",
            //   goodsAddress:"广州",
            //   goodsPrice:"200",
            //   num:1,
            // },
        ],
        totalData: 0,
        goodsListCar: [{
                id: "1",
                goodsImage: "../../image/goods01.jpg",
                goodsName: "1商品名称商品名称商品名称",
                goodsAddress: "广州",
                goodsPrice: "200"
            },
            {
                id: "1",
                goodsImage: "../../image/goods01.jpg",
                goodsName: "2商品名称商品名称商品名称",
                goodsAddress: "广州",
                goodsPrice: "200"
            },
            {
                id: "1",
                goodsImage: "../../image/goods01.jpg",
                goodsName: "3商品名称商品名称商品名称",
                goodsAddress: "广州",
                goodsPrice: "200"
            },
        ]
    },
    showPopup() {
        this.setData({
            show: true
        });
    },

    onClose() {
        this.setData({
            show: false
        });
    },
    gopay() {
        wx.navigateTo({
            url: '/pages/pay/pay',
        })
    },
    // 加法计算
    add(options) {
        // console.log("加号",options)
        // console.log(this);
        let index = options.target.dataset.index;
        // 获取this中data数据
        let num = this.data.goodsList[index].num + 1; //数值
        let key = "goodsList[" + index + "].num";
        let obj = {};
        obj[key] = num;

        this.setData(obj);

        this.getTotal(); //计算总价格
    },
    // 减法计算
    reduce(options) {
        let index = options.target.dataset.index;
        // 获取this中data数据
        let num = this.data.goodsList[index].num; //数值
        let key = "goodsList[" + index + "].num";
        let obj = {};
        if (num <= 1) {
            obj[key] = 1;
        } else {
            num--; //数量减一
            obj[key] = num;
        }
        this.setData(obj);
        this.getTotal(); //计算总价格

    },

    // 删除
    del(options) {
        // console.log(options);
        let index = options.currentTarget.dataset.index;
        this.data.goodsList.splice(index, 1);
        // 更新数据同时更新视图
        this.setData({
            goodsList: this.data.goodsList
        })
        this.getTotal(); //计算总价格
        this.setData({
            show: false
        });
    },

    // 计算总价格
    getTotal() {
        // 计算总价格
        let goodsList = this.data.goodsList;

        if (goodsList.length) {
            let data = goodsList.reduce((total, item) => {
                total = total + item.num * item.goodsPrice;
                return total;
            }, 0)

            this.setData({
                totalData: data
            })
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // 获取数据
        var getCatData = wx.getStorageSync('GoodsCarList');
        this.setData({
            goodsList: getCatData
        })
        this.getTotal(); //计算总价格
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 页面隐藏修改存储数据
        wx.setStorageSync('GoodsCarList', this.data.goodsList);

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