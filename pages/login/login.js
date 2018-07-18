Page({

  /**
   * 页面的初始数据
   */
  data: {
    resetBtn: false,
    submitBtn: false,
    inputValue: null,
    inputLength: null,
    focus: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getValue: function (e) {
    var btn_1 = false;
    var btn_2 = false;
    if (e.detail.value != null || e.detail.value != '') {
      btn_1 = true;
    } else {
      btn_1 = false;
    }
    if ((/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-1,3]|[6-8]))|(18[0-9]))\d{8}$/.test(e.detail.value))) {
      btn_2 = true;
    } else {
      btn_2 = false;
    }
    this.setData({
      inputValue: e.detail.value,
      inputLength: e.detail.cursor,
      resetBtn: btn_1,
      submitBtn: btn_2
    })
  },
  clearValue: function () {
    this.setData({
      inputValue: null,
      inputLength: null,
      resetBtn: false,
      submitBtn: false,
      focus: true
    })
  },
  goLogin: function () {
    wx.navigateTo({
      url: '../setcode/setcode?phone=' + this.data.inputValue,
    })
  },
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})