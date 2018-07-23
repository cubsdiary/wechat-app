Component({
  methods: {
    _closeMask: function () {
      let luckDetail = {
        close: false
      }
      this.triggerEvent('maskevent', luckDetail)
    },
    _goJacktopInfo: function () {
      // 跳转券详情
      console.log("跳转券详情")
    }
  }
})