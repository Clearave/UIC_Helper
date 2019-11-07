// pages/calendar/calendar.js
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: new Date().getFullYear(), // 年份
    month: new Date().getMonth() + 1, // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()], // 月份字符串

    demo5_days_style: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();

    let demo5_days_style = new Array;

    demo5_days_style.push({
      month: 'current',
      day: 12,
      color: 'white',
      background: '#b49eeb'
    });
    demo5_days_style.push({
      month: 'current',
      day: 17,
      color: 'white',
      background: '#f5a8f0'
    });
    demo5_days_style.push({
      month: 'current',
      day: 20,
      color: 'white',
      background: '#aad4f5'
    });
    demo5_days_style.push({
      month: 'current',
      day: 25,
      color: 'white',
      background: '#84e7d0'
    });

    this.setData({
      demo5_days_style
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  openFile(){
    wx.showLoading({
      title: '加载中',
    })
    wx.downloadFile({
      url: 'https://cloud-minapp-31353.cloud.ifanrusercontent.com/1iShYj279DcSdwFM.pdf',
      success: function (res) {
        console.log(res)
        var Path = res.tempFilePath              //返回的文件临时地址，用于后面打开本地预览所用
        wx.openDocument({
          filePath: Path,
          success: function (res) {
            wx.hideLoading();
            console.log('打开成功');
          }
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '打开失败',
          icon: 'none',
          duration: 2000
        })
        console.log(res);
      }
    })
  }
})