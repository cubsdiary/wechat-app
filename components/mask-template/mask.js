Component({
  properties: {
    itemMask: Object
  },
  data: {
    animationData: {},
    showRule: false,
    showShare: false,
    showUse: false,
    showGetJackpot: false,
    showNoLuckDraw: false,
    showLuckDraw: true
  },
  created: function () {
    this._showMask()
  },
  methods: {
    _showMask: function () {
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-in',
        delay: 0
      })
      this.animation = animation
      animation.opacity(1).step()
      setTimeout(function () {
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 300)
    },
    _closeMask: function (res) {

      this.animation.opacity(0).step()
      this.setData({
        animationData: this.animation.export()
      })
      let myEventDetail = {
        close: false
      }
      setTimeout(function () {
        this.triggerEvent('myevent', myEventDetail)
      }.bind(this), 300)
    },
    noThing: function () {
      return
    },
    _closeShare: function () {
      // 分享成功后操作
      this._closeMask()
    },
    _closeGetJackpot: function () {
      // 领取成功后操作
      this._closeMask()
    }
  }
})