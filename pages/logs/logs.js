//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    tempFilePaths : ''
  },
  dixian:function(){
    console.log(5555)
  },
  yundong:function(e){
    console.log(e)
  },
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading() //显示加载
    setTimeout(function(){
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },5000)
  },
  onLoad: function () {
    var _this = this
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        wx.chooseImage({
          count: 9, // 默认9  
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
          success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片         


            console.log(res)
            _this.setData({
              tempFilePaths: res.tempFilePaths
            })
            var tempFilePath = res.tempFilePaths[0];
            
          }
        })
      }
    })



    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
