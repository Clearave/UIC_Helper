//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    elements: [{
      title: '校历',
      name: 'calendar',
      color: 'cyan',
      icon: 'newsfill'
    },
    {
      title: '校车',
      name: 'ShuttleBus',
      color: 'blue',
      icon: 'colorlens'
    },
    {
      title: '体育馆',
      name: 'gym',
      color: 'pink',
      icon: 'btn'
    },
    {
      title: '关于',
      name: 'about',
      color: 'brown',
      icon: 'tagfill'
    },
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          wx.redirectTo({
            url: '/pages/auth/auth'
          })
        }
      }
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: 'https://image.weilanwl.com/color2.0/share2215.jpg',
      path: '/pages/basics/home/home'
    }
  },
})
