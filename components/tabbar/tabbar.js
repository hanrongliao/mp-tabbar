// component/u-tarbar/tarbar.js
Component({
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
    curTabIndex: {
      type: Number,
      value: 0,
    },
  },
  data: {
    scrollLeft: 0,
    tabItemsPosition: [],
    windowWidth: 375,
  },
  created() {
    wx.getSystemInfo({
      success: (res) => {
        this.data.windowWidth = res.windowWidth
      }
    })
  },
  ready() {
    this.queryTabItemsPosition()
  },
  methods: {
    queryTabItemsPosition() {
      this.createSelectorQuery()
      .selectAll('.navigation-item-pos-center')
      .boundingClientRect((e) => {
        const tabItemsPosition = []
        for (let i = 0; i < e.length; i++) {
          tabItemsPosition.push(e[i].left)
        }
        this.setData({ tabItemsPosition })
        wx.nextTick(() => {
          this.scrollTo(this.data.curTabIndex)
        })
      }).exec()
    },
    scrollTo(index) {
      let scrollLeft = 0
      const { tabItemsPosition, windowWidth } = this.data
      const halfWidth = windowWidth / 2

      scrollLeft = tabItemsPosition[index] <= halfWidth ? 0 : tabItemsPosition[index] - halfWidth
      this.setData({ scrollLeft })
    },
    onClick(e) {
      const { index } = e.currentTarget.dataset
      this.setData({ curTabIndex: index })
      this.scrollTo(index)
      this.triggerEvent('change', index)
    },
  },
})
