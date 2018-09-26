//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    code: '2222222',
    lists: [{
      name: '张三',
      sex: '男'
    }, {
      name: '李四',
      sex: '女'
    }, {
      name: '王五',
      sex: '不三不四'
    }]
  },
  onLoad: function(options) {},
  bindViewTap: function() {
    wx.navigateTo({
      url: '../line/line'
    })
  },
  bindViewStatus: function () {
    wx.navigateTo({
      url: '../status/status'
    })
  },
  getName: function(event) {
    var index = event.currentTarget.dataset['index'];
    var list = event.currentTarget.dataset['list'];
    console.log(index);
    console.log(list);
  }
});