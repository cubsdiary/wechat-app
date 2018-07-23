Component({
  properties: {
    maskData: String
  },
  methods: {
    _closeMask: function () {
      let getJackpotDetail = {
        close: false
      }
      this.triggerEvent('maskevent', getJackpotDetail)
    },
    _lookJackpot: function () {
      // 查看券操作
    }
  }
})