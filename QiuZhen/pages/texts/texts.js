// pages/texts/texts.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    text:[],
    title_style:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      id:options.id
    }),

      

    
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenUserReadInfoAPI.php',
      method:'GET',
      data:{
        id:this.data.id
        },
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        this.setData({
          text : message.data.msg,
          title_style:"border-bottom: 3px solid black;"
        })
        if(app.globalData.userInfo){
          wx.request({
            url: 'https://www.fybgame.top/api/WXQiuZhenUserReadInfoAPI.php',
            method:'GET',
            data:{
              textID:this.data.id,
              userName:app.globalData.userInfo.nickName
              },
              header:{
                'Content-Type': 'application/json' //GET方式
                },
            success:(message)=>{

            }
          })
        }
      }
    }),
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenGetTextByIdAPI.php',
      method:'GET',
      data:{
        id:this.data.id
        },
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        this.setData({
          text : message.data.msg,
          title_style:"border-bottom: 3px solid black;"
        })

      }
    })
  },

  lunBo:function (e) {
    var textID=this.data.id;

    wx.showModal({
     title:'提示',
     content:'您确定要（设置/取消）这篇文章为轮播图吗？',
     success:function(res){
       if(res.confirm){
        wx.request({
          url: 'https://www.fybgame.top/api/WXQiuZhenLunBoTextByIdAPI.php',
          method:'GET',
          data:{
            id:textID
            },
            header:{
              'Content-Type': 'application/json' //GET方式
              },
          success:(message)=>{

              wx.showToast({
                title: '设置成功', // 标题
                icon: 'success',  // 图标类型，默认success
                duration: 1500  // 提示窗停留时间，默认1500ms
              })
              setTimeout(function () {
                wx.switchTab({
                  url: '../read/read',
                })
               }, 1500)


            }

        })
       }else{

       }
     }
    })
   
    
  },
  delect:function (e) {
    var textID=this.data.id;

    wx.showModal({
     title:'提示',
     content:'您确定要删除这篇文章吗？',
     success:function(res){
       if(res.confirm){
        wx.request({
          url: 'https://www.fybgame.top/api/WXQiuZhenDelectTextByIdAPI.php',
          method:'GET',
          data:{
            id:textID
            },
            header:{
              'Content-Type': 'application/json' //GET方式
              },
          success:(message)=>{
            wx.showToast({
              title: '删除成功', // 标题
              icon: 'success',  // 图标类型，默认success
              duration: 1500  // 提示窗停留时间，默认1500ms
            })
            setTimeout(function () {
              wx.switchTab({
                url: '../read/read',
              })
             }, 1500)
            
          }
        })
       }else{

       }
     }
    })
   
    
  }


})