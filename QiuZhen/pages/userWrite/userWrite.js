// pages/userWrite/userWrite.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userWrite:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenGetUserWriteInfoByDetailAPI.php',
      method:'GET',
      data:{
        userName:app.globalData.userInfo.nickName
        },
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        this.setData({
          userWrite : message.data.msg.reverse(),
        })
      }
    })
  }

})