Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMask: false,
    animationData: {},
    signIn: false,
    jackpot: [{
      id: 0,
      img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
      title: '5元洗车抵扣券放大阿斯顿发放大师傅萨达是发送到发送到发发生发生的发生发撒的发沙发沙发大师傅',
      day: 3,
      now: 13,
      state: 1
    }, {
      id: 1,
      img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
      title: '5元洗车抵扣券',
      day: 7,
      now: 13,
      state: 1
    }, {
      id: 0,
      img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
      title: '5元洗车抵扣券',
      day: 10,
      now: 13,
      state: 0
    }, {
      id: 0,
      img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
      title: '5元洗车抵扣券',
      day: 15,
      now: 13,
      state: -1
    }, {
      id: 0,
      img: 'https://cdn.cubsdiary.com/images/wechat/default.png',
      title: '5元洗车抵扣券',
      day: 30,
      now: 13,
      state: -1
    }]
  },
  showMask: function () {
    this.setData({
      showMask: true
    })
    let animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in',
      delay: 0
    })
    this.animation = animation
    animation.opacity(1).step()
    setTimeout(function () {
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  closeMask: function (res) {
    
    this.animation.opacity(0).step()
    this.setData({
      animationData: this.animation.export()
    })
    setTimeout(function () {
      this.setData({
        showMask: false
      })
    }.bind(this), 100)
  },
  jacktopBtn: function (e) {
    let state = e.target.dataset.item.state
    if (state < 0) {
      return
    } else if (state  === 0) {
      // 领取券操作
    } else if (state > 0) {
      // 显示券详情操作
      this.showMask()
    }
  },
  showRule: function (e) {
    console.log(e)
  },
  goJacktop: function () {
    // 跳到奖池页面
  },
  goSignIn: function () {
    // 点击签到
  },
  
  goTrophy: function () {
    // 跳到获奖记录
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