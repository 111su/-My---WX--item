const HTTP = require("./request.js");

const API_URL = "https://api-hmugo-web.itheima.net";

module.exports = {

    "getGoodsList":function(){
        return HTTP({
            // method:"GET",
            url: API_URL+'/api/public/v1/goods/search', 
        })
    },
    
    "getdetailData":function(params){
        return HTTP({
            url: API_URL+'/api/public/v1/goods/detail', 
            data:params
        })
    }

}

// 使用方式
// getGoodsList().then((data)=>{
//     console.log("获取数据----》》》》",data);
//   })

//   getdetailData({goods_id:57444}).then(data=>{
//     console.log("获取数据详情页----》》》》",data);
//   })