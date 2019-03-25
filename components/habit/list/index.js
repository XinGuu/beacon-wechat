Component({
  data: {
    list: [],
  },
  methods: {
    getData() {
      // send initial http request here
      console.log('get data');
      this.setData({
        list: [{
          id: 0,
          name: '吃早餐',
          frequency: 0,
          today: 0,
        }, {
          id: 1,
          name: '20分钟有氧运动',
          frequency: 0,
          today: 0,
        }, {
          id: 2,
          name: '处理邮件',
          frequency: 0,
          today: 0,
        }],
      });
    },
    increase(id) {
      console.log('increase', id);
    },
    decrease(id) {
      console.log('decrease', id);
    },
    habitListTap(e) {
      const id = e.currentTarget.dataset.id;
      switch (e.target.dataset.type) {
        case 'increase':
          this.increase(id);
          break;
        case 'item':
          // go to detail
          console.log('item', id);
          break;
        case 'decrease':
          this.decrease(id);
          break;
        default:
          break;
      }
    }
  },
  lifetimes: {
    attached() {
      this.getData();
    }
  },
});
