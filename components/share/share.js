Component({
  methods: {
    closeShare: function () {
      let shareDetail = {
        close: false
      }
      this.triggerEvent('maskevent', shareDetail)
    }
  }
})