// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:app.globalData.userInfo,
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    readCount:0,
    writeCount:0,
    userReadArray:[],
    userWrite:[],
    userStatus:[]
  },
  getUser:function(e) {

    if(this.data.hasUserInfo){
     
      wx.request({
        url: 'https://www.fybgame.top/api/WXQiuZhenUserLoginAPI.php',
        method:'GET',
        
        data:{
          userName:app.globalData.userInfo.nickName,
          userCountry:app.globalData.userInfo.country,
          userProvince:app.globalData.userInfo.province,
          userCity:app.globalData.userInfo.city,
          userSex:1
          },
          header:{
            'Content-Type': 'application/json' //GET方式
            },
        success:(message)=>{
          this.setData({
            userStatus:message.data.msg
          })

        },

      }),
      wx.request({
        url: 'https://www.fybgame.top/api/WXQiuZhenGetUserReadInfoAPI.php',
        method:'GET',
        data:{
          userName:app.globalData.userInfo.nickName
          },
          header:{
            'Content-Type': 'application/json' //GET方式
            },
        success:(message)=>{
          this.setData({
            userReadArray : message.data.msg,
          })
        }
      }),
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
            userWrite : message.data.msg,
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
    else{
      this.setData({
        canIUse : false
      })
    }
  },
  getUserInfo(e){
    app.globalData.userInfo = e.detail.userInfo
    if(e.detail.errMsg.indexOf('fail')>0){
    }
    else{
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    this.getUser();
  },
  onShow:function(){
    this.getUser();
  }

})