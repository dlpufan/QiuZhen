// pages/userRead/userRead.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenGetUserReadInfoByDetailAPI.php',
      method:'GET',
      data:{
        userName:app.globalData.userInfo.nickName
        },
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        this.setData({
          text : message.data.msg.reverse(),
        })
      }
    })
  },

})