Component({
  methods: {
    closeMask: function () {
      let ruleDetail = {
        close: false
      }
      this.triggerEvent('maskevent', ruleDetail)
    }
  }
})