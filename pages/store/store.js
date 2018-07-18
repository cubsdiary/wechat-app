Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,
    stores: [],
    checkIndex: 0
  },
  goMap: function (e) {
    var storeInfo = e.currentTarget.dataset.item
    wx.openLocation({
      latitude: parseFloat(storeInfo.lat),
      longitude: parseFloat(storeInfo.lng),
      scale: 18,
      name: storeInfo.name,
      address: storeInfo.address
    })
  },
  seleStore: function () {
    wx.setStorage({
      key: 'seleStoreId',
      data: this.data.checkIndex
    });
    wx.reLaunch({
      url: '../index/index'
    })
  },
  callDz: function (e) {
    var phone = e.currentTarget.dataset.item.phone
    if (phone) {
      wx.makePhoneCall({
        phoneNumber: phone
      })
    }
  },
  checkStore: function (e) {
    var id = e.currentTarget.dataset.item.id
    this.setData({
      checkIndex: id
    })
  },
  onLoad: function (options) {
    var _slef = this;
    wx.getStorage({
      key: 'storeList',
      success: function(res) {
        _slef.setData({
          stores: res.data,
          checkIndex: res.data[0].id
        })
      },
    })
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