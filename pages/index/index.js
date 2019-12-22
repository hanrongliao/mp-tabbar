Page({
  data: {
    tabs: Array(20).fill(1).map((item, index) => ('Tab' + index)),
    curTabIndex: 10,
  },
  onLoad() {
  },
})
