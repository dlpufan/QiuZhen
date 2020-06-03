// pages/read/read.js
Page({

  data: {
    imgSrc:[],
    text:[],
    searchData:"",
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
    
  },
  
  
  handleSearch(e){
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenPostSearchAPI.php',
      method:'GET',
      data:{
        search:e.detail.value
        },
        header:{
          'Content-Type': 'application/json' //GET方式
          },
      success:(message)=>{
        this.setData({
           text : message.data.msg,
        })
      }
    }),

    this.setData({
      searchData : e.detail.value
    })
  },
  onShow(){
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenAppGetImg.php',
      success:(message)=>{ 
        this.setData({
          imgSrc : message.data.msg,
          current:0
        })
       
      }
    }),
    wx.request({
      url: 'https://www.fybgame.top/api/WXQiuZhenGetTextAPI.php',
      success:(message)=>{
        this.setData({
          text : message.data.msg,
        })
       
      }
    })
  }
})