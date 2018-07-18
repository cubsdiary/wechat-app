Page({

  /**
   * 页面的初始数据
   */
  data: {
    jackpot: [
      [
        {
          id: 0,
          title: '100元快速保养机油抵扣券（常州全奇特以门店可用）暗示法法师打发按时发达第三方三房',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          state: 0
        }, {
          id: 1,
          title: '30元超精洗抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          state: 0
        }, {
          id: 2,
          title: '1000元汽车维修抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          state: 0
        }
      ],
      [
        {
          id: 0,
          title: '100元快速保养机油抵扣券（常州全奇特以门店可用）暗示法法师打发按时发达第三方三房',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          usetime: '2018.07.23 13:40',
          store: '奇特异快速保养门店-丽华南村店',
          tel: '0519-8424923',
          state: 1
        }, {
          id: 1,
          title: '30元超精洗抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          usetime: '2018.07.23 13:40',
          store: '奇特异快速保养门店-丽华南村店',
          tel: '0519-8424923',
          state: 1
        }, {
          id: 2,
          title: '1000元汽车维修抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          usetime: '2018.07.23 13:40',
          store: '奇特异快速保养门店-丽华南村店',
          tel: '0519-8424923',
          state: 1
        }
      ],
      [
        {
          id: 0,
          title: '100元快速保养机油抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          state: 2
        }, {
          id: 1,
          title: '30元超精洗抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          state: 2
        }, {
          id: 2,
          title: '1000元汽车维修抵扣券（常州全奇特以门店可用）',
          img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
          starttime: '2018.06.06',
          endtime: '2018.12.30',
          state: 2
        }
      ]
    ],
    current: 0
  },
  switchNav: function (e) {
    let cur = parseInt(e.target.dataset.current)
    if (cur === this.data.current) {
      return
    }
    this.setData({
      current: cur
    })
  },
  switchTab: function (e) {
    let cur = e.detail.current
    this.setData({
      current: cur
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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