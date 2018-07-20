Component({
  properties: {
    maskData: String
  },
  methods: {
    closeMask: function () {
      let myEventDetail = {
        close: false
      }
      this.triggerEvent('myevent', myEventDetail)
    }
  }
})