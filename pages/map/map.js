// map.js
const app = getApp()
Page({
  data: {
    lat: null,
    lng: null,
    markers: [],
    markerId: -1,
    showInfo: false,
    nowStore: null,
    stores: null,
    scale: 14
  },
  onLoad: function () {
    let _self = this
    this.setData({
      lat: app.globalData.location.latitude,
      lng: app.globalData.location.longitude
    })
    wx.request({
      url: 'https://www.gt1.shop/api/store/storeList',
      data: {
        page: 1,
        limit: 50,
        lat: app.globalData.location.latitude,
        lng: app.globalData.location.longitude
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        _self.setData({
          stores: res.data.data
        })
        _self.setMarker(res.data.data)
      }
    })
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  setMarker: function (list) {
    let ret = []
    let index = 0
    list.forEach((item) => {
      if (item.name.indexOf('石家庄') > 0) {
      } else {
        ret.push({
          id: index,
          latitude: item.lat, 
          longitude: item.lng,
          alpha: 1,
          iconPath: '/image/marker.png',
          anchor: {
            x: .5,
            y: 1
          },
          callout: {
            content: item.name,
            bgColor: '#616161',
            color: '#ffffff',
            fontSize: 12,
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center'
          }
        })
        index++
      }
    })
    this.setData({
      markers: ret
    })
  },
  regionchange(e) {
    console.log(e.type)
    console.log(app.globalData.location)
  },
  callouttap (e) {
    let _self = this
    let markerId = e.markerId
    let markers = this.data.markers.slice()
    let now  = null
    markers.forEach((item) => {
      if (item.id === markerId) {
        item.callout.bgColor = '#ff6f6f'
        now = _self.data.stores[markerId]
      } else {
        item.callout.bgColor = '#616161'
      }
    })
    this.setData({
      markerId: markerId,
      markers: markers,
      nowStore: now,
      showInfo: true
    })
  },
  getAllCall () {
    wx.makePhoneCall({
      phoneNumber: '051968191385'
    })
  },
  getTypeCall () {
    wx.makePhoneCall({
      phoneNumber: this.data.nowStore.phone
    })
  },
  getLocation () {
    this.mapCtx.moveToLocation()
    this.setData({
      scale: 14
    })
  },
  openLocation () {
    let info = this.data.nowStore
    wx.openLocation({
      latitude: parseFloat(info.lat),
      longitude: parseFloat(info.lng),
      name: info.name,
      address: info.address,
      scale: 28
    })
  },
  updateMap () {
    let _self = this
    let markers = this.data.markers.slice()
    markers.forEach((item) => {
      item.callout.bgColor = '#616161'
    })
    this.setData({
      markers: markers,
      showInfo: false
    })
  }
})