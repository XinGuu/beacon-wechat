Page({
  data: {
    list: [{
      id: 0,
      name: '吃早餐',
      checked: true,
    }, {
      id: 1,
      name: '20分钟有氧运动',
      checked: false,
    }, {
      id: 2,
      name: '处理邮件',
      checked: true,
    }],
  },
  getData() {
    // send http request here
    console.log('2', this);
  },
  switchChange: function(e) {
    console.log('3', this);
    if (e.target.id !== '') {
      const idx = +e.target.id.substring(10);// get index of target in list
      this.data.list[idx].checked = e.detail.value;
      this.setData({
        list: this.data.list,
      });
    }
  },
  onLoad: function() {
    console.log('1', this);
    this.getData();
  },
});
