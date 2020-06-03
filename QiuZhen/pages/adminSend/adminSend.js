// pages/adminSend/adminSend.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    text:"",
    value:""
  },
  handleTitle(e){
    this.setData({
      title : e.detail.value
    })
  },
  handleText(e){
    this.setData({
      text : e.detail.value
    })
  },
  buttonSubmit(e){
    if(this.data.text != this.data.value && this.data.title != this.data.value){
    if(app.globalData.userInfo){
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenAdminSendAPI.php',
      method:'POST',
      data:{
        text:this.data.text,
        title:this.data.title,
        userName:app.globalData.userInfo.nickName
        }, 
        header:{
          "Content-Type": "application/x-www-form-urlencoded" //POST方式
          },
      success:(message)=>{
       this.setData({
        title:"",
        text:""
       })
      }
    })
    wx.showToast({
      title: '提交成功', // 标题
      icon: 'success',  // 图标类型，默认success
      duration: 1500  // 提示窗停留时间，默认1500ms
    })
  }
  else{
    wx.showToast({
      title: '请先登录后操作！', // 标题
      icon: 'none',  // 图标类型，默认success
      duration: 1500  // 提示窗停留时间，默认1500ms
    })
  }
}
else{
  wx.showToast({
    title: '请填写完整的标题及正文！', // 标题
    icon: 'none',  // 图标类型，默认success
    duration: 1500  // 提示窗停留时间，默认1500ms
  })
}
}

})