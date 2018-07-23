Component({
  methods: {
    _closeMask: function () {
      let noLuckDetail = {
        close: false
      }
      this.triggerEvent('maskevent', noLuckDetail)
    }
  }
})