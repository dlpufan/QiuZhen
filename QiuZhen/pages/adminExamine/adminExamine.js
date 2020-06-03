// pages/adminExamine/adminExamine.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArrs:[],
    dataIndex:[]
  },
 
  buttonSubmit1(e) {
    this.setData({
      dataIndex:this.data.dataArrs.splice(e.currentTarget.dataset.count,1),
      dataArrs:this.data.dataArrs
    })
        wx.showToast({
          title: '通过成功', // 标题
          icon: 'none',  // 图标类型，默认success
          duration: 1500  // 提示窗停留时间，默认1500ms
        })
        wx.request({
          url: 'https://www.fybgame.top/api/WXQiuZhenTextTrueAPI.php',
          method:'GET',
          data:{
            id:e.currentTarget.dataset.id
            },
            header:{
              'Content-Type': 'application/json' //GET方式
              },
          success:(message)=>{
            this.setData({
              
            })
          }
        })
      
    
    
  },
  buttonSubmit2(e) {
    this.setData({
      dataIndex:this.data.dataArrs.splice(e.currentTarget.dataset.count,1),
      dataArrs:this.data.dataArrs
    })
    wx.showToast({
      title: '驳回成功', // 标题
      icon: 'none',  // 图标类型，默认success
      duration: 1500,  // 提示窗停留时间，默认1500ms

    })
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenTextFalseAPI.php',
      method:'GET',
      data:{
        id:e.currentTarget.dataset.id
        },
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        


      }
    })

  


},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenGetExamineTextAPI.php',
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        this.setData({
          dataArrs : message.data.msg,
        })
      }
    })

}
})
