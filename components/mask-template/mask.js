Component({
  properties: {
    itemMask: String
  },
  data: {
    animationData: {}
  },
  created: function () {
    this.showMask()
  },
  methods: {
    showMask: function () {
      let animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-in',
        delay: 0
      })
      this.animation = animation
      animation.opacity(1).step()
      setTimeout(function () {
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    closeMask: function (res) {

      this.animation.opacity(0).step()
      this.setData({
        animationData: this.animation.export()
      })
      let myEventDetail = {
        close: false
      }
      setTimeout(function () {
        this.triggerEvent('myevent', myEventDetail)
      }.bind(this), 200)
    }
  }
})